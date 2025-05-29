import { HeaderPage } from "./Reusables"
import React, { useState, useEffect } from "react";
import siinsid from '/images/Tracking_Image.webp';
import {MyMap} from "./Maps";
import { Footer } from "./MainHomePage";
import { data, Link, useNavigate} from "react-router-dom";
import {X, ChevronUp, CircleCheckBig, Circle, CopyIcon, Loader} from 'lucide-react'
import Select from 'react-select'
import {NumberPopup} from '../E wallet/paymentWallet'
import whatsAppLogo from "/images/whatsAppLogo.png"


 



const Countries = [
    {value:"Ghana" , label:"Ghana"},
  {value:"USA" , label:"United States"},
  {value:"UK" , label:"United Kingdom"},
  {value:"Canada" , label:"Canada"},

  {value:"Nigeria" , label:"Nigeria"},
];


const PaymentOptions =[
  {value:"Mobile Money", label:"Mobile Money", countryPayment:"Ghana"},
  {value:"Bank", label:"Bank Account", countryPayment:"Other" },
  {value:"Bank", label:"Bank Account", countryPayment:"Ghana"},
 {value:"CashApp", label:"CashApp", countryPayment:"Other" },
  {value:"Paypal", label:"Paypal", countryPayment:"Other" },
  {value:"Crypto", label:"Crypto", countryPayment:"Other" },

];


 


const Copytext = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const text = element.textContent || element.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Clipboard copy failed: ", err);
    });
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

export function Tracking_Page({ stages }) {
  const [loading, setLoading] = useState(false);
  const [trackingnumber, setTrackingNumber] = useState('');
  const [stage, setStage] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState('');
  const [greeting, setGreeting] = useState("");
  const [daysLeft, setDaysLeft] = useState('');
  const navigate = useNavigate()
  

  useEffect(() => {
    if (stage === 0) {
      setDaysLeft('3 Days Left')
    } else if (stage === 1) {
      setDaysLeft('3 Days Left')
    } else if (stage === 2) {
      setDaysLeft('2 Days Left')
    } else if (stage === 3) {
      setDaysLeft('2 Days Left')
    } else if (stage === 4) {
      setDaysLeft('1 Days Left')
    } else if (stage === 5) {
      setDaysLeft('Today');
      setInfoVisible(true);
    } else {
      setDaysLeft('Arrived');
      setInfoVisible(true);
    }
  })

 

  const handleSubmit = async () => {
    if (!trackingnumber.trim()) return;

    setLoading(true);
    setError('');
    setShipmentData(null);
    try {
      const res = await fetch(`https://interpost-backend.onrender.com/progress/${trackingnumber}`);

      if (res.status === 200) {
        const data = await res.json();
        setShipmentData(data);
        setStartTime(new Date(data.startTime)); // Convert to Date
      } else if (res.status === 404) {
        setError('Package not found, Check Tracking Number and Try Again');
      } else {
        setError('Server error occurred');
      }
    } catch (err) {
      setError('Network error. Try again later.');
      console.error('Submit error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!startTime) return;

    const updateStage = () => {
      const now = new Date();
      const elapsed = Math.floor((now - startTime) / 25200000);  //25200000  
      const currentStage = Math.min(elapsed, stages.length - 1);
      setStage(currentStage);

      if (currentStage === stages.length - 3) {
        setInfoVisible(true);
      }
    };

    updateStage();
    const interval = setInterval(updateStage, 25200000); //25200000 
    return () => clearInterval(interval);
  }, [startTime, stages.length]);

  const getTickColor = (index) => (index <= stage ? 'bg-pink-600' : 'bg-gray-400');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if ( hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening')
    }

  }, []);

  const handleNav = (path) => {
    navigate(path);
    window.location.reload();
  }



useEffect(() => {
  if (loading) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [loading]);



const [showShipmentDetail, setShowShipmentDetail] = useState(false)



       
  return (
  <>
{loading && (
  <section className="fixed inset-0 z-50 bg-white/50 h-screen bg-opacity-80 flex items-center justify-center">
    <div className="animate-spin h-8 w-8 border-4 border-red-700 border-t-transparent rounded-full"></div>
    <span className="ml-3 text-black font-medium">Loading...</span>
  </section>
)}

    <div className="bg-gray-50 min-h-screen py-10 px-4 flex flex-col items-center ">

  {!startTime && ( <div className="w-full max-w-3xl mx-auto">

      <p className="text-gray-800 text-3xl lg:text-5xl 2xl:text-6xl font-extrabold uppercase text-center mb-6 tracking-wide">
        Track Your Package
      </p>

      <p className="text-gray-500 text-center text-sm lg:text-base max-w-md mx-auto mb-8">
        Enter your tracking number below and click <span className="font-semibold">'Track Package'</span>. You can find it on your receipt or invoice.
      </p>

      <div className="mt-6">
        <input
          type="text"
          value={trackingnumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Please Enter Tracking Number"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 transition"
        />
        {error && (
          <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
        )}
        <button
          onClick={handleSubmit}
          disabled={loading || !trackingnumber.trim()}
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold uppercase py-3 rounded-lg shadow-md transition"
        >
          {loading ? 'Tracking...' : 'Track'}
        </button>
      </div>

      <div className="mt-16 text-center">
        <h1 className="text-gray-800 text-2xl font-bold mb-2">
          Used in Over 220 Countries and Areas
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          33 multilingual versions supported
        </p>
        <img
          src={siinsid}
          alt="Global tracking illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="lg:hidden mt-16 text-center">
        <h1 className="text-gray-800 text-2xl font-bold mb-2">
          Cooperative Carriers
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          More timely, detailed and accurate tracking information.
        </p>
        <img
          src="/images/DELIVERY GUY.png"
          alt="Delivery Guy"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="lg:hidden mt-16 mb-20 text-center">
        <h1 className="text-gray-800 text-2xl font-bold mb-2">
          Swift and Fast Delivery
        </h1>
        <p className="text-gray-600 text-sm mb-8">
          We ensure your packages arrive quickly and safely, every time.
        </p>
        <img
          src="/images/deliveryVan.png"
          alt="Delivery Van Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )}




    
      
<div className="lg:px-20  bg-gray-50 min-h-screen text-gray-800">
  {!loading && startTime && shipmentData && (
    <section className="font-sans space-y-5">

      {/* MAP */}
      <div className="relative -mx-6 lg:mx-0 lg:mt-1 z-10 -mt-14">
        <MyMap />
      </div>

      {/* TOP CARD */}
   


<div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm space-y-6 lg:space-y-0 -mx-6 -mt-5 max-w-4xl ">
  <div className="space-y-4 max-w-lg w-full">
    <p className="text-2xl font-extrabold italic uppercase text-pink-600 tracking-wide">
      {greeting} {shipmentData.receipientname}
    </p>
    <p className="font-semibold text-gray-800 text-lg">Your Package is on its way</p>
    <p className="text-gray-600 text-sm">
      <span className="font-semibold">Sent:</span>{" "}
      <span>{shipmentData.startTime}</span>
    </p>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base font-medium">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <span className="min-w-[130px] text-pink-600">Tracking ID:</span>
        <span className="break-all">{shipmentData.trackingnumber}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <span className="min-w-[130px] text-pink-600">Estimated Arrival:</span>
        <span>{daysLeft}</span>
      </div>
    </div>
  </div>

  <div className="flex justify-end w-full lg:w-auto">
    <button
      className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold uppercase shadow-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1
        ${showShipmentDetail
          ? "bg-pink-600 text-white border-pink-600 hover:bg-pink-700"
          : "text-pink-600 border-pink-600 hover:bg-pink-50"}
      `}
      onClick={() => setShowShipmentDetail((prev) => !prev)}
      aria-expanded={showShipmentDetail}
      aria-controls="shipment-details"
      aria-label="Toggle shipment details"
    >
      More Details
      <ChevronUp
        size={18}
        className={`transition-transform duration-300 ${showShipmentDetail ? "rotate-180" : ""}`}
      />
    </button>
  </div>
</div>





      {/* DETAILS SECTION */}
      {showShipmentDetail && (
     <div className="bg-white rounded-lg shadow-lg p-5 text-sm lg:w-1/2 mx-auto -mt-2 w-full ">
  {[
    ["Sent Date & Time", shipmentData.startTime],
    ["Tracking Number #", shipmentData.trackingnumber],
    ["Sender Name", shipmentData.sendersname],
    ["Sender Telephone", shipmentData.phone],
    ["Sender Address", shipmentData.sendersaddress],
    ["Recipient Name", shipmentData.receipientname],
    ["Recipient Telephone", shipmentData.recipientsphone],
    ["Recipient Address", shipmentData.receipientaddress],
    ["Clearance Fee Amount", `GH₵ ${shipmentData.clearancefee}`]
  ].map(([label, value], index) => (
    <div
      key={index}
      className={`flex justify-between py-2 ${
        index !== 0 ? "border-t border-gray-200" : ""
      }`}
    >
      <p className="font-semibold text-gray-700">{label}:</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  ))}
</div>

      )}

      {/* TRACKING ID + ETA */}
    

      {/* CLEARANCE ALERT */}
      {infoVisible && (
        <div className="my-10 bg-pink-600 text-white rounded-md p-6 shadow-xl text-center space-y-4 w-full lg:w-2/3 mx-auto">
          <p className="text-lg font-bold uppercase">Ready For Clearance</p>
          <p>
            Package is ready for Clearance. Please contact the agent to pay a clearance fee of 
            <span className="font-bold"> GH₵ {shipmentData.clearancefee} </span>
            before our 2GO DoorStep Delivery Van can proceed to your location.
          </p>
          <button
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md shadow"
            onClick={() => handleNav("../CustomerService")}
          >
            Call Now
          </button>
        </div>
      )}

      {/* STAGE TIMELINE */}

      
      <div className="flex flex-col items-start mx-auto w-fit  mt-10 mb-20 relative">
        {stages.map((label, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Dot and line */}
            <div className="relative flex flex-col items-center">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white font-bold z-10 ${getTickColor(index)}`}>
                {index <= stage ? <CircleCheckBig /> : <Circle />}
              </div>
              {index < stages.length - 1 && (
                <div className={`w-0.5 h-25 ${getTickColor(index)}`}></div>
              )}
            </div>

            {/* Content */}
            <div className="flex gap-2">
              <img src={label.image} alt="step" className="w-5 h-5 object-contain" />
              <div>
                <span className="text-sm font-bold block text-pink-600">{label.title}</span>
                <p className="text-xs text-gray-700 w-[90%]">{label.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



    </section>
  )}
</div>


    
    </div>
  </>
  );
}


export function TrackPage(){
const stages = [
  {
    title: 'Package Sent',
    image: '/images/shop-dddddddddddc.png',
    description: 'Your package has been successfully dispatched from the sender’s location. 2GO Courier Company has begun processing it for international shipping.'
  },
  {
    title: 'Dispatched from Origin',
    image: '/images/airplhhhhhhhhhhhhhh.png',
    description: 'Your package has left the origin country and is on its way to the international transit hub. 2GO Courier Company is closely monitoring its movement.'
  },
  {
    title: 'Arrived at International Hub',
    image: '/images/global-logistics-icon-line-illustration-vector.png',
    description: 'The package has safely arrived at our international hub, where it’s being sorted and routed for its journey to Ghana.'
  },
  {
    title: 'In Transit to Ghana',
    image: '/images/165134-200.png',
    description: 'Your package is currently en route to Ghana via international air freight. 2GO Courier Company is ensuring secure and timely delivery.'
  },
  {
    title: 'Arrived in Ghana',
    image: '/images/3263004-200.png',
    description: 'Your package has landed in Ghana and is now at our main logistics facility, where it will undergo final processing.'
  },
  {
    title: 'Preparing for Clearance',
    image: '/images/black-line-icon-for-customs-clearance-vector.png',
    description: '2GO Courier Company is preparing your package for customs clearance. This includes sorting, clearance documentation and clearance fee payment, and any other applicable fees .'
  },
  {
    title: 'Customs Inspection in Progress',
    image: '/images/kdmfiifmf.png',
    description: 'Your package is undergoing a routine customs inspection to ensure it complies with Ghanaian import regulations. 2GO Courier Company is handling all procedures on your behalf.'
  },
  {
  title: 'Awaiting Delivery',
  image: '/images/4363525.png',
  description: 'Your package has cleared all checks and is now awaiting final delivery. 2GO Courier Company will contact you shortly to schedule drop-off.'
  }
];






    return(
        <>
        <HeaderPage/>

        <div className="pt-20  px-2 space-y-2 bg-slate-50 h-full " >
         
         
         <Tracking_Page stages={stages}/>

        </div>
        
        
        <Footer/>
        </>
    )
}


export function CreateShipment() {
  const [loading, setLoading] = useState(false);
  const [checkSuccess, setCheckSuccess] = useState(null);
  const [sucessbar, setsuccessBar] = useState("hidden")
  const [hideCheckSuccess, setHideSuccess] = useState("hidden")
  const [formData, setFormData] = useState({
    trackingnumber: '',
    sendersname: '',
    phone: '',
    sendersaddress: '',
    receipientname: '',
    receipientaddress: '',
    clearancefee: '',
    recipientsphone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   if(!formData.trackingnumber || !formData.sendersname || !formData.phone || !formData.sendersaddress || !formData.clearancefee){
    alert("Please Fill The form")
   } else {
    const fullData = {...formData, startTime: new Date().toISOString(), // Generate start time at submission
    };

  try {
    setLoading(true)
    const res = await fetch('https://interpost-backend.onrender.com/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    });

    if (res.ok) {
      
      console.log('Shipment data saved successfully');
     // alert('Shipment created successfully!');
      setCheckSuccess(true)
    
    } else {
      
      console.error('Failed to save shipment data');
      setCheckSuccess(false)
     
    }
  } catch (err) {
    console.error('Backend error:', err);
     setCheckSuccess(false)
  } finally {
    setLoading(false)
   
  }

if(loading === false){
setsuccessBar("block");
}

   }
 };

  


  return (
    <>
      <HeaderPage />
      <div className={`h-full grid  items-center px-5 bg-black/70 fixed w-full ${ sucessbar } `} >

      <div className={`py-5 px-5 space-y-5 bg-white shadow shadow-blue-500 text-sm rounded-sm ${checkSuccess === false ? "block" : "hidden"}`} >
      <div className="w-full text-red-500" ><X className="w-fit ml-auto rounded-full p-1 bg-white shadow shadow-blue-500" onClick={() => {setsuccessBar("hidden");}} /></div>
        <p className="text-red-500" >There was an Error Creating Your Shipment Info , Please Cancel And Retry Again</p>
      </div>

       <span className={`$${checkSuccess === true ? "block" : "hidden"}`} >
       <div className="py-5 px-5 space-y-5 bg-white shadow shadow-blue-500 text-sm rounded-sm" >
          <div className="w-full text-red-500" ><X className="w-fit ml-auto rounded-full p-1 bg-white shadow shadow-blue-500" onClick={() => {setsuccessBar("hidden");}} /></div>
         <span className="flex  justify-between" >
         <p>Your Tracking Number is : </p> 
         <p id="trackingNumber" >{formData.trackingnumber}</p>
         </span>
         <div className="w-fit bg-blue-500  px-5 text-[10px] py-2 text-white shadow-lg" onClick={() => {Copytext("trackingNumber")}} >COPY</div>
        </div>
       </span>

      </div>
      <div className="py-20 pb-40 overflow-y-auto bg-slate-100 h-full px-2">
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/3  mx-auto px-10 space-y-5 py-5 bg-white shadow-lg rounded-tl-[70px] rounded-br-[70px]">
            <h1 className="text-center uppercase font-bold text-2xl">
              Create <span className="text-amber-500">Shipment</span>
            </h1>
            <hr className="h-1 bg-slate-900 border-black" />
            <section className="space-y-5 text-sm">
              <div>
                <label>Tracking Number</label>
                <input
                  type="text"
                  name="trackingnumber"
                  onChange={handleChange}
                  placeholder="Enter Tracking Number"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Sender's Name</label>
                <input
                  type="text"
                  name="sendersname"
                  onChange={handleChange}
                  placeholder="Enter Sender's Name"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Sender's Telephone</label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Sender's Address</label>
                <textarea
                  name="sendersaddress"
                  onChange={handleChange}
                  placeholder="Enter Sender's Address"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                ></textarea>
              </div>
              <div>
                <label>Recipient's Name</label>
                <input
                  type="text"
                  name="receipientname"
                  onChange={handleChange}
                  placeholder="Enter Recipient Name"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Recipient's Telephone</label>
                <input
                  type="tel"
                  name="recipientsphone"
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Recipient's Address</label>
                <textarea
                  name="receipientaddress"
                  onChange={handleChange}
                  placeholder="Enter Recipient Address"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                ></textarea>
              </div>
              <div>
                <label>Recipient's Email <span className="text-xs ml-2 text-red-700 lg:ml-10">Note: An Email will be sent to this address on send</span></label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Recipient Email"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
              <div>
                <label>Clearance Fee</label>
                <input
                  type="number"
                  name="clearancefee"
                  onChange={handleChange}
                  placeholder="How Much To Be Paid"
                  className="block w-full py-4 bg-slate-100 px-5 outline-none text-xs mt-1"
                />
              </div>
            </section>
            {loading && (
              <section className="relative bg-black overflow-hidden">
                <div className="fixed top-40 left-0 text-center h-100 w-100 content-center"> <div className="flex gap-3 ml-20"><div className="animate-spin border-5 border-red-700 h-10 w-10 rounded-full border-t-transparent bg-white"></div> <p className="text-2xl bg-white w-fit">Loading ......</p></div></div>
              </section>
            )}
            <div className="bg-red-700 w-fit px-5 text-white py-2 shadow-xl">
              <button type="submit">Create Shipment</button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export function CreateShipmentLogin(){

  
  const Navigate = useNavigate();
  const [formData , setFormData] = useState({ Token:"",PassKey:"",});
  const login = [{TokenId:"snakedick", PassKey:"2020"}, {TokenId:"stickyfingers", PassKey:"0411032012"}];
  const [messageAlert, setMessageAlert] = useState({textColor:"",  Message:""});
  const handleChange = (e) => {setFormData({...formData , [e.target.name] : e.target.value})  };

  


  const handleSubmittoChanage = () => {
  
    if(formData.Token === "" || formData.PassKey === ""){ setMessageAlert({ textColor: "text-red-500",Message: "Please Enter Your Token-Id and Pin" });}
     else { if(formData.Token === login[0].TokenId && formData.PassKey === login[0].PassKey){ setMessageAlert({textColor:"text-green-500", Message:'Login SuccessFull'}); Navigate("../CreateShipmentPage");} 
     else { setMessageAlert({ Message:"login Invalid , please Make sure your Pin is Accurate",   textColor:"text-red-500"  })  } }
   

   if(formData.Token === "" || formData.PassKey === ""){ setMessageAlert({ textColor: "text-red-500",Message: "Please Enter Your Token-Id and Pin" });}
     else { if(formData.Token === login[1].TokenId && formData.PassKey === login[1].PassKey){ setMessageAlert({textColor:"text-green-500", Message:'Login SuccessFull'}); Navigate("../CreateShipmentPage");} 
     else { setMessageAlert({ Message:"login Invalid , please Make sure your Pin is Accurate",   textColor:"text-red-500"  })  } }
   




  }

 


  return(
<>
<HeaderPage/>
<div className="min-h-screen flex items-center justify-center bg-gray-50  px-4">
  <div className="w-80 lg:w-[32rem] bg-white text-center p-6 lg:p-10 shadow-lg border-l-8 border-l-pink-600 rounded-xl space-y-6 text-[12px] lg:text-[14px] font-medium">
    <h1 className="text-2xl font-bold uppercase text-pink-600">Login Access</h1>

    <div className="text-left space-y-1">
      <label htmlFor="token" className="text-gray-700">Enter Access Login Token</label>
      <input
        type="text"
        id="token"
        name="Token"
        onChange={handleChange}
        className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-pink-600 font-normal mt-1"
      />
    </div>

    <div className="text-left space-y-1">
      <label htmlFor="passkey" className="text-gray-700">PassKey / Pin</label>
      <input
        type="number"
        id="passkey"
        name="PassKey"
        onChange={handleChange}
        className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-pink-600 font-normal mt-1"
      />
    </div>

    {messageAlert.Message && (
      <p className={`text-sm ${messageAlert.textColor}`}>{messageAlert.Message}</p>
    )}

    <div className="mt-6">
      <button
        type="submit"
        onClick={handleSubmittoChanage}
        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md uppercase font-semibold tracking-wide"
      >
        Get Access
      </button>
    </div>
  </div>
</div>


<Footer />

</>
  )
}

 


export function PaymentPage(){


  const MtnMOMODetails = {
    AccountType: "MTN momo",
    AccountName:"John DOe",
    AccountNumber:"00521511",
  }

  const VodaphoneDetails = {
   AccountType: "Telecel Cash",
    AccountName:"Abigaial Aidu",
    AccountNumber:"897897",
  }

  const AirtelTigoCash = {
    AccountType: "Airtel Tigo Cash",
    AccountName:"Prince Baidu",
    AccountNumber:"5535464645",
  }

  const PaypalDetails = {
      AccountType: "Paypal",
    AccountName:"Jane Nice",
    Email:"JaniceNIce@gmail.com",
  }

  const CashAppDetails = {
      AccountType: "CashApp",
    AccountName:"Mary jane",
    CashTag:"@MaryJane",
  }

  const BankAccountDetails ={
     AccountType: "EcoBank Account",
     AccountName:"Sarah Dot",
      AccountNumber:"00521fgbfg4511",

  }

  const [AccountDetails, setAccountDetails] = useState({
   AccountName:"",
   AccountNumber:"",
   Email:"",
   CashTag:"",
  });

  const [ShowHide , setShowHide] = useState({
    CountryPage: false,
    LocationPage:false,
    PaymentDetailTag: false,
    WelcomeMessage:true,
    ContactUs:false

  })



   const [selectPaymentCountry, setSelectPaymentCountry] = useState('');
   const [Amount, setAmount] = useState("");
   const HandleAmountInput = (e) => {
        const data = e.target.value;
        setAmount(data);

   }

const HandleSelectPayment = (data) => {
  setSelectPaymentCountry(data.value)
}

      const PurposeOfPayment = [
        {value:"Other Payment", label:"Other Payment"},
        {value:"Clearance Payment", label:"Payment of Clearance Fee"},
        {value:"MemberShip Fee Payment", label:"MemberShip Fee"},
        {value:"Delivery Payment", label:"Delivery Payment"},
      ];

      const [MobilePaymentDisplay, setMobilePaymentDisplay] = useState(false);
      const [Paywith, setPayWith] = useState({
         PaywithPayement:"", PurposeOfPayment:""
      });
      const [LocalPayement, setLocalPayment] = useState("");
      const[ TermsCondition, setTermsCondition] = useState("");
    
      
      const HandleStermsCondition = (e) => {
          const data = e.target.checked;
          setTermsCondition(data)
      }

      console.log(TermsCondition)

      const HandleSelectChange = (data) => { setPayWith((prev) => ({...prev, PaywithPayement:data.value}))};

      const handleSelectChanage2 = (data) => {setPayWith((prev) => ({...prev, PurposeOfPayment: data.value}))};

      const HandleInputchange = (e) =>{ const data = e.target.value; setLocalPayment(data); };

      useEffect(() => {
        if(Paywith.PaywithPayement === "Mobile Money"){
        setMobilePaymentDisplay(true);
      } else{
         setMobilePaymentDisplay(false);
      }

if(Paywith.PaywithPayement === "Bank"){
setAccountDetails({
AccountName: BankAccountDetails.AccountName,
AccountNumber: BankAccountDetails.AccountNumber,
   Email:"",
   CashTag:"",

})

}
else if(Paywith.PaywithPayement === "Paypal"){
setAccountDetails({
AccountName: PaypalDetails.AccountName,
AccountNumber: PaypalDetails.AccountNumber,
   Email: PaypalDetails.Email,
   CashTag:"",

})
} 
else if(Paywith.PaywithPayement === "CashApp"){
  setAccountDetails({
  AccountName: CashAppDetails.AccountName,
  AccountNumber: "",
   Email: "",
   CashTag: CashAppDetails.CashTag,

})
}

else if(Paywith.PaywithPayement === "Mobile Money" && LocalPayement === "Momo"){
  setAccountDetails({
  AccountName: MtnMOMODetails.AccountName,
  AccountNumber: MtnMOMODetails.AccountNumber,
   Email: "",
   CashTag: "",

})
} 
else if(Paywith.PaywithPayement === "Mobile Money" && LocalPayement === "Telecel-Cash"){
  setAccountDetails({
  AccountName: VodaphoneDetails.AccountName,
  AccountNumber: VodaphoneDetails.AccountNumber,
   Email: "",
   CashTag: "",

})
}
else if(Paywith.PaywithPayement === "Mobile Money" && LocalPayement === "Tigo-Cash"){
  setAccountDetails({
  AccountName: AirtelTigoCash.AccountName,
  AccountNumber: AirtelTigoCash.AccountNumber,
   Email: "",
   CashTag: "",

})
}


      }, [Paywith, LocalPayement]);

      console.log(Paywith.PaywithPayement, )

  return(
   <>
   <HeaderPage/>

 


   <div className="min-h-screen max-h-full  grid items-center text-sm py-20 bg-gray-50" >





{ShowHide.WelcomeMessage && (
  <div className="bg-white shadow-lg lg:w-full max-w-3xl p-6 mx-auto space-y-6 rounded-2xl border-l-8 border-pink-600">
    <h1 className="font-bold text-3xl text-pink-600 text-center uppercase">
      Welcome to 2GO Payments
    </h1>
    <p className="text-center text-sm text-gray-600">
      We provide easy, seamless transactions with multiple payment options.
    </p>

    <div className="space-y-6">
      <p className="font-bold text-gray-800">
        Complete Your Payment in 5 Simple Steps
      </p>

      <ul className="list-decimal list-inside space-y-4 text-gray-700">
        <li><strong>Select Your Country</strong> – Choose the country you are making the payment from.</li>
        <li><strong>Select Payment Type</strong> – Choose your preferred payment method.</li>
        <li><strong>Select Purpose of Payment</strong> – Indicate the reason for your payment.</li>
        <li><strong>Enter Amount</strong> – Enter the exact amount you're paying, then proceed to the next step.</li>
        <li><strong>Use Account Details</strong> – Carefully copy the account details to avoid errors.</li>
      </ul>

      <p className="text-gray-700 font-medium">
        <strong>Payment Verification</strong> – If automatic payment verification fails, please contact us for manual verification.
      </p>

      <p className="text-xs text-gray-800 bg-yellow-400/70 border border-yellow-400 p-4 rounded-lg">
        <strong className="text-red-500">Note:</strong> Payment should be completed within 20 minutes. Otherwise, automatic verification will fail, and you will need to verify the payment manually.
      </p>

      <div className="flex items-center gap-3">
        <input
          type="radio"
          onChange={HandleStermsCondition}
          checked={TermsCondition}
          name="TermsCondition"
          className="accent-pink-600 w-4 h-4"
        />
        <p className="text-sm text-gray-700">
          I have read and understand the payment process.
        </p>
      </div>

      <button
        className="bg-pink-600 hover:bg-pink-700 transition-all duration-200 text-white px-6 py-2 rounded-lg w-full font-semibold"
        onClick={() => {
          if (TermsCondition === true) {
            setShowHide({
              CountryPage: false,
              LocationPage: true,
              PaymentDetailTag: false,
              WelcomeMessage: false,
            });
          } else {
            alert("Please read and understand the instructions.");
          }
        }}
      >
        Start Payment Process
      </button>
    </div>
  </div>
)}





{ShowHide.CountryPage && (
  <div className="bg-white shadow-lg max-w-2xl p-6 mx-auto space-y-6 rounded-2xl border-l-8 border-pink-600">
    {/* Payment Method */}
    <div>
      <p className="text-gray-800 font-semibold">Pay With:</p>
      <Select
        options={
          selectPaymentCountry === "Ghana"
            ? PaymentOptions.filter(data => data.countryPayment !== "Other")
            : PaymentOptions.filter(data => data.countryPayment === "Other")
        }
        placeholder="Select Payment Option"
        className="mt-2 w-full"
        onChange={HandleSelectChange}
        value={PaymentOptions.find(data => data.value === Paywith.PaywithPayement)}
        isSearchable={false}
      />
    </div>

    {/* Mobile Payment Options */}
    {MobilePaymentDisplay && (
      <div className="space-y-4">
        {[
          { label: "MTN MoMo", value: "Momo", img: "/images/69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png" },
          { label: "Telecel Cash", value: "Telecel-Cash", img: "/images/Rede-5f0f780acc6c05a6539d7e3229ac508c.webp" },
          { label: "Airtel Tigo Cash", value: "Tigo-Cash", img: "/images/463-4631269_logo-tigo-cash-png-transparent-png.png" }
        ].map((option, index) => (
          <div key={index} className="grid grid-cols-3 items-center gap-2">
            <img src={option.img} alt={option.label} className="h-10 w-20 object-contain" />
            <div className="col-span-2 flex items-center gap-2">
              <input
                type="radio"
                value={option.value}
                name="LocalPayement"
                onChange={HandleInputchange}
                className="h-5 w-5"
              />
              <p className="font-bold text-gray-800 text-sm">{option.label}</p>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* Purpose of Payment */}
    <div>
      <p className="text-gray-800 font-semibold">Purpose of Payment:</p>
      <Select
        options={PurposeOfPayment}
        placeholder="Select Option"
        className="mt-2"
        value={PaymentOptions.find(data => data.value === Paywith.PurposeOfPayment)}
        onChange={handleSelectChanage2}
        isSearchable={false}
      />
    </div>

    {/* Amount Input */}
    <div>
      <p className="text-gray-800 font-semibold">Amount:</p>
      <input
        type="number"
        name="Amount"
        value={Amount}
        onChange={HandleAmountInput}
        className="border border-gray-300 rounded-lg px-3 py-2 mt-2 w-full focus:outline-pink-600"
        placeholder="Enter amount"
      />
    </div>

    {/* Next Button */}
    <div
      className="bg-pink-600 hover:bg-pink-700 transition-all duration-200 px-6 py-2 text-center text-white font-semibold rounded-lg w-fit ml-auto cursor-pointer"
      onClick={() => {
        if (!Amount || !Paywith.PaywithPayement  || !Paywith.PurposeOfPayment) {
          alert("Make sure all details are correctly entered.");
        } else {
          setShowHide({
            CountryPage: false,
            LocationPage: false,
            PaymentDetailTag: true,
          });
        }
      }}
    >
      Next
    </div>
  </div>
)}



{ShowHide.LocationPage && (
  <div className="bg-white shadow-lg lg:w-full max-w-2xl p-6 mx-auto space-y-6 rounded-2xl border-l-8 border-pink-600 scroll-mt-10">
    <p className="text-gray-800 font-semibold text-lg">
      Which country are you making your payment from?
    </p>

    <Select
      options={Countries}
      placeholder="Select Country"
      value={Countries.find((data) => data.value === selectPaymentCountry)}
      onChange={HandleSelectPayment}
      isSearchable={false}
      className="text-sm"
    />

    <div
      className="bg-pink-600 hover:bg-pink-700 transition-all duration-200 px-6 py-2 w-fit text-white font-medium rounded-lg ml-auto cursor-pointer"
      onClick={() => {
        if (!selectPaymentCountry) {
          alert("Select your country");
        } else {
          setShowHide({
            CountryPage: true,
            LocationPage: false,
            PaymentDetailTag: false,
          });
        }
      }}
    >
      Next
    </div>
  </div>
)}




{ShowHide.PaymentDetailTag && (
  <div className="bg-white shadow-xl lg:w-[90%] w-[95%] max-w-3xl mx-auto mt-10 space-y-6 rounded-2xl border-l-8 border-pink-600 px-6 py-8 transition-all duration-300">
    
    <h1 className="text-center text-xl font-extrabold uppercase text-pink-600 tracking-wide">
      Account Details
    </h1>

    <p className="text-gray-700 text-sm text-center">
      Please use the payment details below to complete your transaction.
    </p>

    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-red-700 text-sm p-4 rounded-md">
      <strong>Note:</strong> Please verify if the account name matches before sending. Use your <strong>Name</strong> and <strong>Description</strong> as the transaction reference.
    </div>

    {Paywith.PaywithPayement === "Bank" && (
      <div className="flex justify-between text-gray-800">
        <p className="font-medium">Bank Name:</p>
        <p>EcoBank Bank Account</p>
      </div>
    )}

    <div className="flex justify-between text-gray-800">
      <p className="font-medium">Account Type:</p>
      <p>{Paywith.PaywithPayement}</p>
    </div>

    {Paywith.PaywithPayement === "Mobile Money" && (
      <div className="flex justify-between text-gray-800">
        <p className="font-medium">ISP:</p>
        <p>{LocalPayement}</p>
      </div>
    )}

    {Paywith.PaywithPayement !== "Crypto" && Paywith.PaywithPayement !== "Paypal" && Paywith.PaywithPayement !== "CashApp" && (
      <div className="flex justify-between text-gray-800">
        <p className="font-medium">Account Name:</p>
        <p>{AccountDetails.AccountName}</p>
      </div>
    )}

    {Paywith.PaywithPayement !== "Crypto" && Paywith.PaywithPayement !== "Paypal" && Paywith.PaywithPayement !== "CashApp" && (
      <div className="flex justify-between text-gray-800 items-center">
        <p className="font-medium">Account Number:</p>
        <span className="flex items-center gap-2">
          <p id="AccountNumber" className="font-mono text-blue-600">{AccountDetails.AccountNumber}</p>
          <CopyIcon size="12" className="cursor-pointer hover:text-blue-800" onClick={() => Copytext("AccountNumber")} />
        </span>
      </div>
    )}

    {Paywith.PaywithPayement === "Paypal" && (
      <div className="flex justify-between text-gray-800 items-center">
        <p className="font-medium">Email:</p>
        <span className="flex items-center gap-2">
          <p id="Email" className="font-mono text-blue-600">{AccountDetails.Email}</p>
          <CopyIcon size="12" className="cursor-pointer hover:text-blue-800" onClick={() => Copytext("Email")} />
        </span>
      </div>
    )}

    {Paywith.PaywithPayement === "CashApp" && (
      <div className="flex justify-between text-gray-800">
        <p className="font-medium">CashApp Tag:</p>
        <p className="text-green-600">{AccountDetails.CashTag}</p>
      </div>
    )}

    {Paywith.PaywithPayement === "Crypto" && (
      <div className="text-gray-800 space-y-2">
        <p className="font-medium">Bitcoin Address:</p>
        <p className="font-mono text-blue-600">{AccountDetails.BitcoinAddress}</p>
        <div>
          <p className="text-sm">QR Code:</p>
          <img src={AccountDetails.QRImage} alt="Crypto QR Code" className="w-32 h-32 mt-1" />
        </div>
      </div>
    )}

    <div className="flex justify-between text-gray-800">
      <p className="font-medium">Amount To Be Paid:</p>
      <p className="text-green-600 font-bold">{Amount}</p>
    </div>

    <div className="flex justify-between text-gray-800 items-center">
      <p className="font-medium">Description / Reference:</p>
      <div className="flex items-center gap-2">
        <p id="PaymentPurpose" className="font-mono text-blue-600">{Paywith.PurposeOfPayment}</p>
        <CopyIcon size="12" className="cursor-pointer hover:text-blue-800" onClick={() => Copytext("PaymentPurpose")} />
      </div>
    </div>

    <div className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 w-fit rounded-md ml-auto cursor-pointer font-semibold shadow-md transition"
      onClick={() => {
        setShowHide(prev => ({
          ...prev,
          ContactUs: !prev.ContactUs
        }));
      }}
    >
      {ShowHide.ContactUs ? (<div className="animate-spin"><Loader /></div>) : (<p>Completed</p>)}
    </div>

    {ShowHide.ContactUs && (
      <div className="bg-rose-100 p-4 rounded-md mt-3 space-y-2 border border-pink-200">
        <p className="text-sm text-gray-700">Submit a screenshot of the transaction for verification:</p>
        <div className="flex items-center gap-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow w-fit text-sm"
          onClick={() => window.open("https://wa.me/+233504372398", "_blank")}>
          <img src={whatsAppLogo} alt="WhatsApp Icon" className="w-5 h-5" />
          <span>Contact Us</span>
        </div>
      </div>
    )}
  </div>
)}
















   </div>




   <Footer/>
   </>
  )
}


 
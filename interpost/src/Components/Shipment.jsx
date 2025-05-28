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





{ShowHide.WelcomeMessage && ( <div className="bg-white shadow-lg  lg:w-100 min-w-4/5 max-w-88 p-5 mx-auto space-y-5 rounded-lg border-l-5 border-pink-600 " >
  <h1 className="font-bold text-2xl text-pink-600 text-center uppercase" >Welcome to  2GO Payments </h1>
  <p className=" text-center text-sm" >We Provide Easy Seamless Transaction , With Multiple Payment Options . </p>


<div className="space-y-5" >
  <p className="font-bold" >Complete Your Payment In 5 Simple Steps</p>
  <ul className="list-decimal list-inside space-y-5 mt-5" >
    <li><strong>Select Your Country</strong> - select the Country of Origin which you are making the payment from. </li>
    <li><strong>Select Payment Type</strong> - Next Choose your prefered Payment Type option   </li>
    <li><strong>Select Purpose of Payment </strong> - Choose the purpose of your payment.   </li>
    <li><strong>Enter Amount</strong> - Accurately Enter Amount You are Paying. and Proceed to Next Step</li>
    <li><strong>Use Account Details</strong> - Accurately copy the Account Details to prevent mistakes. </li>
    <p><strong>Payment Verification</strong> - If The Automatic Payment Verification Fails , Please Proceed to contact us  </p>
  </ul>
  <p className="text-xs text-red-700 bg-yellow-600 p-5 rounded" ><em className="font-bold" >Note: </em> Payment Should be Completed within 20 minutes , or Automatic Verification fails and you will have to verify the Payment from us manually.      </p>
  
  
  
  
  
  <div className="flex gap-2" >
   <input type="radio" onChange={HandleStermsCondition} checked={TermsCondition} name="TermsCondition" className="-mt-4.5"/>
   <p> i have Read and Understand the Payment Process .</p>
  </div>
  
  
  <div className="bg-green-700 px-5 py-2  w-full text-center  text-white rounded"   onClick={() => {
    if(TermsCondition === true){
      setShowHide(
        {
    CountryPage: false,
    LocationPage:true,
    PaymentDetailTag: false,
    WelcomeMessage:false,
        }
      )
    } else {
      alert("Please Read and Understand Instruction")
    }
  }}>
    Start Payment Process
  </div>
 
</div>

 

</div>

)}





{ ShowHide.CountryPage  && ( <div className="bg-white shadow-lg  lg:w-100 min-w-4/5 w-88 p-5 mx-auto space-y-5 rounded-lg border-l-5 border-pink-600 " >

<div>
  <p>Pay With: </p>
  <Select options={ 
 selectPaymentCountry === "Ghana" ?   PaymentOptions.filter( data => data.countryPayment !== "Other") : PaymentOptions.filter( data => data.countryPayment === "Other")

  
  } placeholder="Select Payment Option" className="mt-1 w-full" onChange={HandleSelectChange} value={PaymentOptions.find(data => data.value === Paywith.PaywithPayement)} isSearchable={false} />
</div>

{MobilePaymentDisplay && (<div>
 <span className="grid grid-cols-3" > <img src="\images\69-691715_mtn-mm-logo-generic-mtn-mobile-money-logo.png" alt="Image1" className="h-10 w-20 col-span-1" />      <span className="flex  gap-2 col-span-2 mt-1" ><input type="radio" onChange={HandleInputchange} value={"Momo"} name="LocalPayement" className="h-7 w-7"/> <p className="font-bold text-lg" >MTN MoMo</p></span>     </span>
 <span className="grid grid-cols-3" > <img src="\images\Rede-5f0f780acc6c05a6539d7e3229ac508c.webp" alt="FundsIcon" className="h-10 w-20 col-span-1" />     <span className="flex  gap-2 col-span-2 mt-1" > <input type="radio" onChange={HandleInputchange} value={"Telecel-Cash"} name="LocalPayement" className="h-7 w-7" /> <p className="font-bold text-lg" >Telecel Cash</p> </span>   </span>
 <span className="grid grid-cols-3" > <img src="\images\463-4631269_logo-tigo-cash-png-transparent-png.png" alt="Image2" className="h-10 w-20 col-span-1" />   <span className="flex  gap-2 col-span-2 mt-1" ><input type="radio" onChange={HandleInputchange} value={'Tigo-Cash'} name="LocalPayement" className="h-7 w-7" /> <p className="font-bold text-lg" >Airtel Tigo Cash</p></span>   </span>

</div>) }


<div>
  <p>Purpose Of Payment</p>
  <Select options={PurposeOfPayment} placeholder="Select Option" className="mt-1" value={PaymentOptions.find(data => data.value === Paywith.PurposeOfPayment)} onChange={handleSelectChanage2} isSearchable={false}  />
</div>

<div>
  <p>Amount: </p>
  <input type="number" className="border py-1 w-full border-gray-300 rounded-sm mt-1 px-3 outline-none" onChange={HandleAmountInput} value={Amount} name="Amount" />
</div>





<div className="bg-green-700 px-5 py-2 text-center text-white w-25 ml-auto" onClick={() => {
   if(!Amount , !Paywith.PaywithPayement, !LocalPayement, !Paywith.PurposeOfPayment){

    alert("Make Sure All Details are Correctly Entered")

   }else{
      setShowHide({
           CountryPage: false,
           LocationPage: false,
           PaymentDetailTag: true
        })
   }
}} >
  Next
</div>

</div>

  ) }


{ ShowHide.LocationPage && (  <div className="bg-white shadow-lg  lg:w-100 min-w-4/5 max-w-88 p-5 mx-auto space-y-5 rounded-lg border-l-5 border-pink-600 scroll-mt-10" >
  <p className="" >Which Country Are you Making Your Payment from?</p>
      <Select options={Countries} placeholder="Select Country" value={Countries.find(data => data.value === selectPaymentCountry)} onChange={HandleSelectPayment}  isSearchable={false}/>
      <div className="bg-green-700 px-5 py-2  w-fit  text-white ml-auto" onClick={() => {
        if(!selectPaymentCountry){
          alert("Select Your Country")
        }
       else{
        setShowHide({
           CountryPage: true,
           LocationPage: false,
           PaymentDetailTag: false
        }) 
       }
      }} >
        Next
      </div>
    </div>)}



{ShowHide.PaymentDetailTag && <div className="bg-white shadow-lg  lg:w-100 min-w-4/5 max-w-88 p-5 mx-auto space-y-5 rounded-lg border-l-5 border-pink-600 scroll-mt-10" >

  <h1 className="font-bold text-center text-lg uppercase text-pink-600" >Account Details</h1>
  <p>Please Use The Payments Details Below for your Payment .</p>
  <p className="text-xs text-red-700 bg-yellow-600 p-5 rounded" >Note: Please Verify if the account name Matches before Sending, and use your Name and Description as the Reference of your Transaction .</p>

  {Paywith.PaywithPayement === "Bank" ? (<div className="flex justify-between" >
    <p>Bank Name: </p>
    <p>EcoBank Bank Account</p>
  </div>) : ""}
 
 <span className="flex justify-between" >
   <p>Account Type:</p>
   <p>{ Paywith.PaywithPayement}</p>
 </span>

{Paywith.PaywithPayement === 'Mobile Money' ? ( <span className="flex justify-between" >
  <p>ISP</p>
  <p>{LocalPayement}</p>
 </span>): "" }



  {Paywith.PaywithPayement === "Crypto" ? ""  : (
 <div className="flex justify-between" >
     <p>Account Name: </p>
    <p>{AccountDetails.AccountName}</p>
 </div>
    )}




{Paywith.PaywithPayement === "Crypto" || Paywith.PaywithPayement === "Paypal" || Paywith.PaywithPayement === "CashApp" ? "" : ( <div className="flex justify-between" >
   <p>Account Number:</p>
  <span className="flex gap-2" > <p id="AccountNumber" >{AccountDetails.AccountNumber}</p> <CopyIcon size="10" className="mt-1.5" color="blue" onClick={() => Copytext("AccountNumber")} /></span>
 </div>)}


  {Paywith.PaywithPayement === "Paypal" ? (
    <span className="flex justify-between" >
      <p>Email:  </p>
      <span className="flex gap-2"  ><p id="Email" >{AccountDetails.Email}</p> <CopyIcon size="10" className="mt-1.5" color="blue" onClick={() => Copytext("Email")} /></span>
    </span>
  ) : ""}

{Paywith.PaywithPayement === "CashApp" ? (
  <div className="flex justify-between" >
    <p>CashApp Tag: </p>
    <p>{AccountDetails.CashTag}</p>
  </div>
) : "" }

{Paywith.PaywithPayement === "Crypto" ? (
  <div>
    <p>BitCoin Address</p>
<p>QR Code</p>
  </div>
) : ""}

<div className="flex justify-between" >
  <p>Amount To Be Paid: </p>
  <p>{Amount}</p>
</div>

<div className="flex justify-between" >
  <p>Description / Reference: </p>
  <div className="flex gap-2" >
    <p id="PaymentPurpose" >{Paywith.PurposeOfPayment}</p>  <CopyIcon size="10" className="mt-1.5" color="blue" onClick={() => Copytext("PaymentPurpose")} />
  </div>

</div>


<div className="bg-green-700 px-5 py-2  w-fit  text-white ml-auto" onClick={() => {

  if(ShowHide.ContactUs === false){
    setShowHide((prev) => ({...prev, ContactUs: true}))
  } else{
    setShowHide((prev) => ({...prev, ContactUs: false}))
  }

}} >
 {ShowHide.ContactUs ?  (<div className="animate-spin" ><Loader/></div> ) : (<p>Completed </p> ) }
</div>


{ShowHide.ContactUs && 
(
  <div>
  <p>Submit a Screenshot the Transaction For Verification  </p>
  <span>
     <div className="text-xs bg-green-700 mt-1  py-2 text-center w-30 shadow-2xl flex gap-1 px-2 rounded-sm h-fit justify-center"
                      onClick={() => {
                      window.open("https://wa.me/+233504372398", "_blank");
                      }}
                    >
                      <div className="w-4 h-4 ">
                        <img src={whatsAppLogo} alt="whatsPPiCON" />
                      </div>
                      <p className="text-white">Contact us</p>
                    </div>
  </span>
</div>
)
 }










  
</div>
 }















   </div>




   <Footer/>
   </>
  )
}


 
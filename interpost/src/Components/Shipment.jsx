import { HeaderPage } from "./Reusables"
import React, { useState, useEffect } from "react";
import siinsid from '/images/Tracking_Image.webp';
import {MyMap} from "./Maps";
import { Footer } from "./MainHomePage";
import { Link, useNavigate} from "react-router-dom";
import {X, ChevronUp, CircleCheckBig, Circle} from 'lucide-react'




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

  const getTickColor = (index) => (index <= stage ? 'bg-blue-700' : 'bg-gray-400');

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

    <div className="" >
      {!startTime && (

        <div className="mb-4 lg:w-1/2 2xl:w-1/3 mx-auto ">
          <p className="text-2xl font-bold text-center my-5 lg:text-4xl 2xl:text-6xl uppercase text-gray-800">Track Your Package</p>
           <p className="text-xs lg:text-sm lg:text-center text-center" >Enter your tracking number below and click 'Track Package'. You can find it on your receipt or invoice.</p>
      


        <div className=" mt-10">
        
        <input
            type="text"
            value={trackingnumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className=" w-full block p-2 outline-2 outline-blue-500 rounded-sm"
            placeholder="Please Enter Tracking Number"
          />
           {error && <p className="text-red-600 text-xs my-2 text-center ">{error}</p>}
          <div
            onClick={handleSubmit}
            disabled={loading || !trackingnumber.trim()}
            className="mt-5 p-3 bg-blue-500 text-white disabled:opacity-30 text-center uppercase rounded-lg"
          >
            {loading ? 'Tracking...' : 'Track'}
          </div>
        </div>


       <div className="lg:mb-30" >
        <h1 className="text-center text-xl font-bold mt-10 text-gray-800" >Used in Over 220 countries and Areas</h1>
        <p className="text-center text-[14px] text-gray-700"> 33 multilingual  versions supported</p>
         <img src={siinsid} alt="image" className=" lg:h-100 h-50 w-full  lg:mt-10 mt-2 "/>
       </div>

       <div className="lg:hidden">
        <h1 className="text-center text-xl font-bold mt-10 text-gray-800" >Cooperative Carriers</h1>
        <p className="text-center text-[14px] text-gray-700" >More timely, detailed and acurate Tracking information.</p>
        <img src="\images\DELIVERY GUY.png" alt="delivery Guy"  className=" lg:h-100 h-70 w-full  lg:mt-5 mt-2" />
       </div>


       <div className="lg:hidden mb-30">
  <h1 className="text-center text-xl font-bold mt-10 text-gray-800" >Swift and Fast Delivery</h1>
  <p className="text-center text-[14px] text-gray-700">We ensure your packages arrive quickly and safely, every time.</p>
  <img src="\images\deliveryVan.png" alt="Delivery van illustration" className=" lg:h-100 h-70 w-full  lg:mt-5 mt-2" />
</div>

          
        </div>
      )}

    
      

<div className="grid" >
{!loading && startTime && shipmentData && (
        <section className="smooch-sans-TExt"  >

            <div className="relative z-2 -mx-5 -mt-3.5 lg:mt-1"><MyMap /></div>

          <div className="bg-white -mx-5 flex text-[12px] justify-between p-5" >
           <span>
             <p className="text-lg"><span className="font-bold uppercase italic">{greeting}</span> {shipmentData.receipientname}</p>
             <p className="font-bold " >Your Package is on its way</p>
            <p>Send Date: <span>{shipmentData.startTime}</span></p>
           </span>
            <span className="flex  gap-2 items-center">
              <p  className={`${showShipmentDetail === true ? "bg-blue-700 text-white" : ""} uppercase  border text-[10px] w-fit  px-2 py-1 rounded-sm shadow-lg h-fit flex `}          onClick={() => {if (showShipmentDetail === false) { setShowShipmentDetail(true)} else {setShowShipmentDetail(false)}}}  ><p>Details</p> <p className={`${showShipmentDetail === true ? "rotate-180 " : ""}`} ><ChevronUp size={15}/></p> </p>
           
            </span>
          </div>
     {showShipmentDetail &&
          <div>
                 <div className=" bg-white rounded  space-y-5 p-6 text-xs lg:w-1/2 -mx-5 ">
           
            <span className="flex justify-between" ><p className="font-medium" >Sent Date & Time:</p> <p>{shipmentData.startTime}</p> </span>
            <span className="flex justify-between" ><p className="font-medium" >Tracking Number #:</p> <p>{shipmentData.trackingnumber}</p> </span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Name:</p> <p>{shipmentData.sendersname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Telephone:</p> <p>{shipmentData.phone}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Address:</p> <p>{shipmentData.sendersaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Name:</p> <p>{shipmentData.receipientname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Telephone:</p> <p>{shipmentData.recipientsphone}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Address:</p> <p>{shipmentData.receipientaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Clearance Fee Amount:</p> <p>GH₵ <span className="">{shipmentData.clearancefee}</span></p></span>
          </div>
          </div>}


          <div className="mt-5">
             
           <div className="flex justify-between mt-2 lg:mt-10 gap-2">
           <div className="bg-white p-2 py-4 rounded-sm w-full" ><p className="text-center text-xs"><span className=" uppercase">Tracking ID</span> <br/> <span className="" >{shipmentData.trackingnumber}</span></p></div>
           <div className="bg-white p-2 py-4 rounded-sm w-full" > <p className="text-center text-xs "> <span className=" uppercase" >Estimated Arrival Time</span> <br/> <span className="">{daysLeft}</span></p></div>
          </div>
         
          </div>

          {infoVisible && (
        <div className="my-10 bg-red-700 text-center rounded-sm text-white p-4 w-fit text-sm space-y-5 mx-auto shadow-2xl ">
          <p className="font-bold uppercase text-center text-lg " >Ready For Clearance</p>
          <p className="my-2">Package is ready for Clearance, Please Contact Agent to Make Payment For Clearance Fee of <span className="font-bold">{shipmentData.clearancefee} Cedis</span>. Before our 2GO DoorStep Delivery Van Can Proceed To Your Location.</p>
          <div className="bg-slate-900 rounded-sm shadow-xl mt-10 px-4 py-2 w-fit cursor-pointer" onClick={() => handleNav("../CustomerService")}>Call Now</div>
        </div>
          )}
        






         
        <div className="flex flex-col items-start mt-5 lg:mt-10  mx-auto w-fit mb-20 relative">
  {stages.map((label, index) => {
   
    return (
      <div key={index} className="flex items-start gap-4 relative">

        {/* Circle and connector */}
        <div className="relative flex flex-col items-center">
          <div className={`w-5 h-5 p-1 rounded-full flex items-center justify-center font-bold text-white z-10 ${getTickColor(index)}`} >

            {index <= stage ? (<CircleCheckBig  />) : (<Circle />) }
          </div>

          {/* Connector line (skip for last) */}
          {index < stages.length - 1 && (
            <div className={`w-1 h-22 ${getTickColor(index)}`}></div>
          )}
        </div>

        {/* Content */}
        <div className="flex items-start gap-2">
          <img src={label.image} alt="image" className="h-8 w-8 object-contain shrink-0" />
          <div>
            <span className="text-sm font-bold block">{label.title}</span>
            <p className="text-xs w-[90%] text-gray-700">{label.description}</p>
          </div>
        </div>
      </div>
    );
  })}
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

        <div className="pt-20 px-5 space-y-2 bg-slate-100 h-full " >
         
         
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
<div className="h-screen py-30 bg-slate-100" >



  <div className=" lg:w-100 p-5 mx-auto bg-white text-center pb-10  shadow shadow-blue-500 border-l-8  border-l-blue-500 space-y-5 w-80 text-[12px] lg:text-[14px] font-medium rounded-sm" >
    <h1 className="font-bold uppercase text-2xl" >Login Access</h1>
      <div>
        <label htmlFor="">Enter Access Login Token</label>
        <input type="text" className="w-full block bg-slate-100  shadow shadow-blue-500  py-2 mt-1 px-5 outline-none font-normal" name="Token" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">PassKey/ Pin</label>
        <input type="number" className="w-full block bg-slate-100  shadow shadow-blue-500  py-2 mt-1 px-5 outline-none font-normal" name="PassKey" onChange={handleChange} />
      </div>
      <p className={`${messageAlert.textColor}`} > {messageAlert.Message} </p>
      <div className="bg-blue-500 w-fit  px-5 py-2 text-white rounded-sm mt-10" >
        <button type="submit"className="uppercase" onClick={handleSubmittoChanage}> Get Access </button>
      </div>
      </div>
     
 
  

  

</div>

<Footer />

</>
  )
}



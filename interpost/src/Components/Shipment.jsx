import { HeaderPage } from "./Reusables"
import React, { useState, useEffect } from "react";
import siinsid from '/images/Tracking_Image.webp';
import {MyMap} from "./Maps";
import { Footer } from "./MainHomePage";
import { Link, useNavigate } from "react-router-dom";
import {X} from 'lucide-react'




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
      setDaysLeft('4 Days Left')
    } else if (stage === 1) {
      setDaysLeft('3 Days Left')
    } else if (stage === 2) {
      setDaysLeft('Tomorrow')
    } else if (stage === 3) {
      setDaysLeft('TODAY')
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
      const elapsed = Math.floor((now - startTime) / 345600000 );
      const currentStage = Math.min(elapsed, stages.length - 1);
      setStage(currentStage);

      if (currentStage === stages.length - 1) {
        setInfoVisible(true);
      }
    };

    updateStage();
    const interval = setInterval(updateStage, 345600000 );
    return () => clearInterval(interval);
  }, [startTime, stages.length]);

  const getTickColor = (index) => (index <= stage ? 'bg-red-700' : 'bg-gray-300');

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

  
       
  return (
  <>
   <section className="fixed h-screen top-1/2 left-1/2 -translate-x-1/2 ">
   {loading && (
      <div className="flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-red-700 border-t-transparent rounded-full"></div>
        <span className="ml-3 text-black font-medium"></span>
      </div>
    )}
   </section>
    <div className="" >
      {!startTime && (
        <div className="mb-4 lg:w-1/2 2xl:w-1/3 mx-auto ">
          <p className="text-2xl font-bold text-center my-5 lg:text-4xl 2xl:text-6xl uppercase ">Track Your Package</p>
           <p className="text-xs lg:text-sm lg:text-center" >To Track your package please enter your Tracking Number in the box bolow and press the "Track Package Button". Find your tracking number on your receipt or Invoice. Thank You!</p>
      
          <img src={siinsid} alt="image" className=" lg:h-auto my-5 lg:my-10 w-full "/>
      
        <div className="bg-white shadow shadow-blue-500 p-5 mb-40 rounded-sm">
          <label htmlFor=""  > <p className="text-red-700 mb-5 font-bold">Enter Tracking Number Below:</p> </label>
        <input
            type="text"
            value={trackingnumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className=" w-full block p-2 outline-none bg-slate-100 shadow shadow-blue-500"
            placeholder="Enter Tracking Number"
          />
           {error && <p className="text-red-600 text-xs my-2 text-center ">{error}</p>}
          <button
            onClick={handleSubmit}
            disabled={loading || !trackingnumber.trim()}
            className="mt-5 px-4 py-2 bg-blue-500 text-white disabled:opacity-30"
          >
            {loading ? 'Tracking...' : 'Track Package'}
          </button>
        </div>
          
        </div>
      )}

    
      

<div className="grid" >
{!loading && startTime && shipmentData && (
        <section  >
           <div className="my-5">
          <p className="text-center mt-5 text-2xl font-medium"><span className="font-bold uppercase">{greeting}</span> {shipmentData.receipientname}</p>
          <p className="text-center text-sm mt-1 ">Your Package Tracking Progress is displayed below</p>
          <p className="text-center text-xs mt-1 ">Estimated Arrival Time: <span className="font-bold">{daysLeft}</span></p>
          </div>
          {infoVisible && (
        <div className="my-10 bg-red-700 text-center rounded-sm text-white p-4 w-fit text-sm space-y-5 mx-auto shadow-2xl ">
          <p className="font-bold uppercase text-center text-lg " >Ready For Clearance</p>
          <p className="my-2">Package is ready for Clearance, Please Contact Agent to Make Payment For Clearance Fee of <span className="font-bold">{shipmentData.clearancefee} Cedis</span>. Before our 2GO DoorStep Delivery Van Can Proceed To Your Location.</p>
          <div className="bg-slate-900 rounded-sm shadow-xl mt-10 px-4 py-2 w-fit cursor-pointer" onClick={() => handleNav("../CustomerService")}>Call Now</div>
        </div>
          )}
          <div className="relative z-2"><MyMap /></div>
         
          <div className="lg:flex lg:gap-5 lg:space-x-10 mt-8 space-y-6 mx-auto w-fit  ">
            {stages.map((label, index) => (
              <div key={index} className="flex gap-5 items-center  ">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${getTickColor(index)}`}>
                  ✓
                </div>
                <div className="flex gap-2">
                  <img src={label.image} alt="" className="h-10 w-10" />
                  <div>
                    <span className="text-sm font-bold">{label.title}</span>
                    <p className="text-[11px] w-[80%]">{label.description}</p>
                  </div>
                </div>
              </div>
            ))}

       
            
          </div>

          <div className="my-6 mt-20 bg-white rounded shadow shadow-blue-500 mb-40 space-y-5 p-6 text-xs lg:w-1/2 mx-auto ">
            <h2 className="uppercase  text-center font-bold ">Shipment Information</h2>
            <span className="flex justify-between" ><p className="font-medium" >Tracking Number #:</p> <p>{shipmentData.trackingnumber}</p> </span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Name:</p> <p>{shipmentData.sendersname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Telephone:</p> <p>{shipmentData.phone}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Address:</p> <p>{shipmentData.sendersaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Name:</p> <p>{shipmentData.receipientname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Telephone:</p> <p>{shipmentData.recipientsphone}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Address:</p> <p>{shipmentData.receipientaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Clearance Fee Amount:</p> <p>GH₵ <span className="">{shipmentData.clearancefee}</span></p></span>
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
      title: 'Sent',
      image: '/images/shop-dddddddddddc.png',
      description: 'Your package has been dispatched from the origin office.'
    },
    {
      title: 'In Transit',
      image: '/images/airplhhhhhhhhhhhhhh.png',
      description: 'Your package is currently on the way to its destination.'
    },
    {
      title: 'Delivered To Main Warehouse',
      image: '/images/c66cd4hhhhhhhhhhhn.png',
      description: 'Your package has arrived at our central distribution warehouse.'
    },
    {
      title: 'Ready For Clearance & Delivery',
      image: '/images/kdmfiifmf.png',
      description: 'Your package is awaiting customs clearance and final delivery..'
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
  const login = [{TokenId:"snakedick", PassKey:"2020"},];
  const [messageAlert, setMessageAlert] = useState({textColor:"",  Message:""});
  const handleChange = (e) => {setFormData({...formData , [e.target.name] : e.target.value})  };

  


  const handleSubmittoChanage = () => {
  
    if(formData.Token === "" || formData.PassKey === ""){ setMessageAlert({ textColor: "text-red-500",Message: "Please Enter Your Token-Id and Pin" });}
     else { if(formData.Token === login[0].TokenId && formData.PassKey === login[0].PassKey){ setMessageAlert({textColor:"text-green-500", Message:'Login SuccessFull'}); Navigate("../CreateShipmentPage");} 
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



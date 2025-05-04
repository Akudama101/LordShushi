import { HeaderPage } from "./Reusables"
import React, { useState, useEffect, useRef } from "react";
import siinsid from '/images/Tracking_Image.webp';
import {MyMap} from "./Maps";
import { Footer } from "./MainHomePage";
import { Link, useNavigate } from "react-router-dom";












export function Tracking_Page({ stages }) {
  const [loading, setLoading] = useState(false);
  const [trackingnumber, setTrackingNumber] = useState('');
  const [stage, setStage] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState('');

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
      const elapsed = Math.floor((now - startTime) / 60000);
      const currentStage = Math.min(elapsed, stages.length - 1);
      setStage(currentStage);

      if (currentStage === stages.length - 1) {
        setInfoVisible(true);
      }
    };

    updateStage();
    const interval = setInterval(updateStage, 60000);
    return () => clearInterval(interval);
  }, [startTime, stages.length]);

  const getTickColor = (index) => (index <= stage ? 'bg-red-700' : 'bg-gray-300');

  return (
    <div className="" >
      {!startTime && (
        <div className="mb-4 lg:w-1/2 2xl:w-1/3 mx-auto ">
          <img src={siinsid} alt="image" className=" lg:h-auto my-5 lg:my-10 w-full "/>
        <div className="bg-white shadow shadow-blue-500 p-5 rounded-sm">
          <label htmlFor=""  > <p className="text-red-700 mb-5">Enter Tracking Number Below:</p> </label>
        <input
            type="text"
            value={trackingnumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className=" w-full block p-2 outline-none bg-slate-100 shadow shadow-blue-500"
            placeholder="Enter Tracking Number"
          />
          <button
            onClick={handleSubmit}
            disabled={loading || !trackingnumber.trim()}
            className="mt-5 px-4 py-2 bg-blue-500 text-white disabled:opacity-50"
          >
            {loading ? 'Tracking...' : 'Track Package'}
          </button>
        </div>
          {error && <p className="text-red-600 mt-20">{error}</p>}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin h-8 w-8 border-4 border-red-700 border-t-transparent rounded-full"></div>
          <span className="ml-3 text-black font-medium">Tracking Package ...</span>
        </div>
      )}
      

<div className="grid" >
{!loading && startTime && shipmentData && (
        <section  >
          <div className="relative z-2"><MyMap /></div>
          <div className="lg:flex lg:gap-5 lg:space-x-10 mt-8 space-y-6 mx-auto w-fit  ">
            {stages.map((label, index) => (
              <div key={index} className="flex gap-5 items-center w-fit ">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${getTickColor(index)}`}>
                  ✓
                </div>
                <div className="flex gap-2">
                  <img src={label.image} alt="" className="h-10 w-10" />
                  <div>
                    <span className="text-sm font-bold">{label.title}</span>
                    <p className="text-[11px]">{label.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          <div className="mt-6 bg-white rounded shadow shadow-blue-500 space-y-5 p-6 text-xs lg:w-1/2 mx-auto ">
            <h2 className="uppercase  text-center font-bold ">Shipment Information</h2>
            <span className="flex justify-between" ><p className="font-medium" >Tracking Number:</p> <p>{shipmentData.trackingnumber}</p> </span>
            <span className="flex justify-between" ><p className="font-medium" >Sender's Name:</p> <p>{shipmentData.sendersname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Address:</p> <p>{shipmentData.sendersaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Sender Contact:</p> <p>{shipmentData.phone}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient's Name:</p> <p>{shipmentData.receipientname}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Recipient Address:</p> <p>{shipmentData.receipientaddress}</p></span>
            <span className="flex justify-between" ><p className="font-medium" >Clearance Fee:</p> <p>GHC {shipmentData.clearancefee}</p></span>
          </div>
        </section>
      )}

      {infoVisible && (
        <div className="mt-6 bg-blue-500 text-white p-4 w-fit  mx-auto shadow shadow-black ">
          <p className="font-bold uppercase text-center " >Complete Delivery Process</p>
          <p className="my-2">Contact Agent to Make Payment For Clearance Fee. Before DoorStep Delivery Can be Arranged.</p>
          <Link to="../CustomerService" ><div className="bg-red-700 px-4 py-2 w-fit cursor-pointer">
            Call Now
          </div></Link>
        </div>
      )}
</div>

    
    </div>
  );
}


export function TrackPage(){
  const stages = [
    {
      title: 'Sent',
      image: '/images/shop-dddddddddddc.png',
      description: 'Your package has been sent from the origin office.'
    },
    {
      title: 'In Transit',
      image: '/images/airplhhhhhhhhhhhhhh.png',
      description: 'Your package is on its way to the destination.'
    },
    {
      title: 'Delivered',
      image: '/images/c66cd4hhhhhhhhhhhn.png',
      description: 'The package has arrived at our main office in Ghana.'
    },
    {
      title: 'Ready For Clearance',
      image: '/images/kdmfiifmf.png',
      description: 'Your package is ready for customs clearance.'
    }
  ];
  

    return(
        <>
        <HeaderPage/>

        <div className="pt-20 px-5 space-y-2 bg-slate-100 h-screen overflow-auto" >

        
         <p className="text-2xl font-bold text-center my-5 lg:text-4xl 2xl:text-6xl uppercase ">Track Your Package</p>
         <p className="text-xs lg:text-sm lg:text-center" >To Track your Order please enter your order ID in the box and press the "Track Button". This was given to you on your receipt.</p>
         
         <Tracking_Page stages={stages}/>

        </div>
        
        
        <Footer/>
        </>
    )
}




export function CreateShipment() {
  const [formData, setFormData] = useState({
    trackingnumber: '',
    sendersname: '',
    phone: '',
    sendersaddress: '',
    receipientname: '',
    receipientaddress: '',
    clearancefee: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullData = {
      ...formData,
      startTime: new Date().toISOString(), // Generate start time at submission
    };

    try {
      const res = await fetch('https://interpost-backend.onrender.com/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullData),
      });

      if (res.ok) {
        console.log('Shipment data saved successfully');
        alert('Shipment created successfully!');
      } else {
        console.error('Failed to save shipment data');
      }
    } catch (err) {
      console.error('Backend error:', err);
    }
  };

  return (
    <>
      <HeaderPage />
      <div className="py-20 overflow-y-auto bg-slate-100 h-screen px-2">
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
                <label>Phone</label>
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



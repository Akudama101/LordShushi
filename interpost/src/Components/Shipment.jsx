import { HeaderPage } from "./Reusables"
import React, { useState, useEffect } from "react";
import siinsid from '/images/Group.png';
import {MyMap} from "./Maps";










export function Tracking_Page({ stages }) {
  const [loading, setLoading] = useState(false);
  const [ref, setRef] = useState('');
  const [stage, setStage] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://interpost-backend.onrender.com/progress/${ref}`);
      if (res.status === 200) {
        const data = await res.json();
        setStartTime(new Date(data.startTime)); // Convert to real Date
      } else {
        const newStart = new Date();
        await fetch('https://interpost-backend.onrender.com/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ref, startTime: newStart.toISOString() }),
        });
        setStartTime(newStart);
      }
    } catch (err) {
      console.error('Submit error:', err);
    } finally {
      setLoading(false); // Stop loading
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
  
    updateStage(); // 👈 Run once immediately
  
    const interval = setInterval(updateStage, 60000);
  
    return () => clearInterval(interval);
  }, [startTime]);

  const getTickColor = (index) => (index <= stage ? 'bg-red-700' : 'bg-gray-300');

  return (
    <div >
    
      {!startTime && (
        <div className="mb-4">
          <img src={siinsid} alt="" className="h-35 my-10 w-full"/>
          <input
            type="text"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            className="border w-full block p-2 outline-none "
            placeholder="Enter Tracking Number"
          />
         
          <button
            onClick={handleSubmit}
            className=" mt-5 px-4 py-2 bg-blue-500 text-white"
          >
            Track Package
          </button>
       
          
        </div>
      )}

      {loading ? (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin h-8 w-8 border-4 border-red-700 border-t-transparent rounded-full"></div>
    <span className="ml-3 text-black font-medium">Tracking Package ...</span>
  </div>
) : (startTime && (
       <section>
       <div className="relative z-2"> <MyMap/></div>
         <div className=" justify-between mt-8">
          {stages.map((label, index) => (
            <div key={index} className=" flex gap-2 space-y-10 items-center">
              <div
                className={`w-8 h-8 rounded-full  flex items-center justify-center font-bold text-white ${getTickColor(index)}`}
              >
                ✓
              </div>
             <div className="flex space-y-10 gap-2">
             <img src={label.image} alt="" className="border h-10 w-10 border-transparent" />
             <div>
             <span className="text-sm font-bold">{label.title}</span>
             <span className=""><p className="text-[11px]">{label.description}</p></span>
             </div>
             </div>
            </div>
          ))}
        </div>
       </section>
      ))}

      {infoVisible && (
        <div className="mt-6 bg-gray-500 text-white p-4">
          <p>Package at our Office</p>
          <p className="my-2">Contact Agent to talk about Clearance</p>
          <div className="bg-red-700 px-4 py-2 w-fit cursor-pointer">
            Call Now
          </div>
        </div>
      )}
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

        <div className="mt-20 px-5 space-y-2" >

        
         <p className="text-2xl font-bold text-center my-5">Track Your Package</p>
         <Tracking_Page stages={stages}/>

        </div>
        
        
        
        </>
    )
}


export function CreateShipment(){



  return(
    <>
    <HeaderPage/>
    <div className="py-20 overflow-y-auto bg-slate-100 h-screen" >

      <form action="">



      <div className=" lg:w-1/3 w-80 mx-auto px-10 space-y-5 py-5 bg-white shadow-lg rounded-tl-[70px] rounded-br-[70px]" >
        <h1 className="text-center uppercase font-bold  text-2xl" >Create <span className="text-amber-500">Shipment</span></h1>
        <hr className="h-1 bg-slate-900 border-black" />
        <section className="space-y-5 text-sm">
          <div>
            <label htmlFor="">Tracking Number</label>
            <input type="text" placeholder="Enter Tracking Number" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1" />
          </div>
          <div>
            <label htmlFor=""> Senders Name </label>
            <input type="text" placeholder="Enter Sender's Name" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="">Sender's Address </label>
            <textarea name="" id="" placeholder="Enter Senders Address" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1"></textarea>
          </div>
          <div>
            <label htmlFor=""> Receipient Name </label>
            <input type="text" placeholder="Enter Receipient Name" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="">Receipient Address </label>
            <textarea name="" id="" placeholder="Enter Receipient Address" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1"></textarea>
          </div>
          <div>
            <label htmlFor=""> Clearance to be Paid </label>
            <input type="number" placeholder="How Much To be Paid" className="block w-full py-4 bg-slate-100 rounded-xs px-5 outline-none text-xs mt-1" />
          </div>
        </section>
        <div className="bg-red-700 w-fit px-5 text-white   py-2 shadow-xl " ><button>Create Shipment</button></div>
      </div>



















      </form>
      
    </div>
    </>
  )
}


import { HeaderPage } from "./Reusables"





import React, { useState, useEffect } from "react";









export function Tracking_Page({ stages }) {
  const [ref, setRef] = useState('');
  const [stage, setStage] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3001/progress/${ref}`);
      if (res.status === 200) {
        const data = await res.json();
        setStartTime(new Date(data.startTime)); // Convert to real Date
      } else {
        const newStart = new Date();
        await fetch('http://localhost:3001/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ref, startTime: newStart.toISOString() }),
        });
        setStartTime(newStart);
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  useEffect(() => {
    if (!startTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now - startTime) / 4000); // Use 60000 for real minutes
      console.log('Elapsed:', elapsed);
      const currentStage = Math.min(elapsed, stages.length - 1);
      setStage(currentStage);
      if (currentStage === stages.length - 1) {
        setInfoVisible(true);
        clearInterval(interval);
      }
    

    }, 4000); // Change to 60000 for real 1-min intervals

    return () => clearInterval(interval);
  }, [startTime]);

  const getTickColor = (index) => (index <= stage ? 'bg-green-500' : 'bg-gray-300');

  return (
    <div className="p-6">
      {!startTime && (
        <div className="mb-4">
          <input
            type="text"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            className="border p-2"
            placeholder="Enter Reference Number"
          />
          <button
            onClick={handleSubmit}
            className="ml-2 px-4 py-2 bg-blue-600 text-white"
          >
            Track
          </button>
        </div>
      )}

      {startTime && (
        <div className="flex justify-between mt-8">
          {stages.map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${getTickColor(index)}`}
              >
                ✓
              </div>
              <span className="mt-2 text-sm">{label}</span>
            </div>
          ))}
        </div>
      )}

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
    const stages = ['Sent', 'In Transit', 'Out for Delivery', 'Delivered'];

    return(
        <>
        <HeaderPage/>

        <div className="mt-20" >

         <form action="" className="space-y-5 px-5">
       <div>
       <p>Enter Your Tracking Number :</p>
       <input type="text" className="border w-full p-2" />
       </div>
       <div className=" bg-red-700  w-fit px-5 py-2 text-white" >     <button className="uppercase" >Submit</button></div>
         </form>
         <Tracking_Page stages={stages}/>

        </div>
        
        
        
        </>
    )
}


import { HeaderPage } from "./Reusables"
import React, { useState, useEffect, useRef } from "react";
import siinsid from '/images/Group.png';
import {MyMap} from "./Maps";












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
      const res = await fetch(`http://localhost:7001/progress/${trackingnumber}`);

      if (res.status === 200) {
        const data = await res.json();
        setShipmentData(data);
        setStartTime(new Date(data.startTime)); // Convert to Date
      } else if (res.status === 404) {
        setError('Package not found');
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
    <div>
      {!startTime && (
        <div className="mb-4">
          <img src={siinsid} alt="Banner" className="h-35 my-10 w-full" />
          <input
            type="text"
            value={trackingnumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border w-full block p-2 outline-none"
            placeholder="Enter Tracking Number"
          />
          <button
            onClick={handleSubmit}
            disabled={loading || !trackingnumber.trim()}
            className="mt-5 px-4 py-2 bg-blue-500 text-white disabled:opacity-50"
          >
            {loading ? 'Tracking...' : 'Track Package'}
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin h-8 w-8 border-4 border-red-700 border-t-transparent rounded-full"></div>
          <span className="ml-3 text-black font-medium">Tracking Package ...</span>
        </div>
      )}

      {!loading && startTime && shipmentData && (
        <section>
          <div className="relative z-2"><MyMap /></div>
          <div className="justify-between mt-8 space-y-6">
            {stages.map((label, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${getTickColor(index)}`}>
                  ✓
                </div>
                <div className="flex gap-2">
                  <img src={label.image} alt="" className="border h-10 w-10" />
                  <div>
                    <span className="text-sm font-bold">{label.title}</span>
                    <p className="text-[11px]">{label.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Shipment Information</h2>
            <p><strong>Tracking Number:</strong> {shipmentData.trackingnumber}</p>
            <p><strong>Sender:</strong> {shipmentData.sendersname}</p>
            <p><strong>Sender Address:</strong> {shipmentData.sendersaddress}</p>
            <p><strong>Phone:</strong> {shipmentData.phone}</p>
            <p><strong>Recipient:</strong> {shipmentData.receipientname}</p>
            <p><strong>Recipient Address:</strong> {shipmentData.receipientaddress}</p>
            <p><strong>Clearance Fee:</strong> ${shipmentData.clearancefee}</p>
          </div>
        </section>
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
      const res = await fetch('http://localhost:7001/progress', {
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
      <div className="py-20 overflow-y-auto bg-slate-100 h-screen">
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/3 w-80 mx-auto px-10 space-y-5 py-5 bg-white shadow-lg rounded-tl-[70px] rounded-br-[70px]">
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
    </>
  );
}






  
import { Section1 , CustomerService, Section2 } from "./Reusables"
import { Section3 } from "./Reusables"
import { Section4 } from "./Reusables"
import { Section5 } from "./Reusables"
import { Section6 } from "./Reusables"
import { Section7 } from "./Reusables"
import { Section8 } from "./Reusables"
import { Blog } from "./Reusables"
import { How_Package_Tracking_Works, 
         Safe_Package_Delivery_Tips, 
         Package_delay_solutions,
         Delivery_Status_Explained,
         Future_of_delivery,
         File_lost_package_claim,
         International_Shipping_Basics,
         Green_Shipping_Methods,
         Covid_Impact_On_Shipping,
         Delivery_driver_daily,
         Importance_of_tracking_numbers,
         Same_Day_Delivery_Explained,
         Damage_Prevention_Through_Packaging,
         Weather_and_Shipping,
         Barcode_Scanning_in_Logistics,
         Multi_Package_Tracking
        } from "./Blog_Pages"



import { Routes, Route, Link, useNavigate } from "react-router-dom"
import { LocateFixed, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import whatsAppLogo from "/images/whatsAppLogo.png"
import {About_Us} from './Reusables'
import {TrackPage, CreateShipment, CreateShipmentLogin, PaymentPage} from './Shipment'
import {AnimatePresence, easeInOut, motion} from 'framer-motion'







export function RoutesPage (){


  return(

    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="CustomerService" element={<CustomerService />} />
        <Route path="TrackPage" element={<TrackPage/>} ></Route>
        <Route path="Blog" element={<Blog/>} ></Route>
        <Route path="How_Package_Tracking_Works" element={<How_Package_Tracking_Works/>} ></Route>
        <Route path="Safe_Package_Delivery_Tips" element={<Safe_Package_Delivery_Tips/>} ></Route>
        <Route path="Package_delay_solutions" element={<Package_delay_solutions/>} ></Route>
        <Route path="About_Us" element={<About_Us/>} ></Route>
        <Route path="Delivery_Status_Explained" element={<Delivery_Status_Explained/>} ></Route>
        <Route path="Future_of_delivery" element={<Future_of_delivery/>} ></Route>
        <Route path="File_lost_package_claim" element={<File_lost_package_claim/>} ></Route>
        <Route path="International_Shipping_Basics" element={<International_Shipping_Basics/>} ></Route>
        <Route path="Green_Shipping_Methods" element={<Green_Shipping_Methods/>} ></Route>
        <Route path="Covid_Impact_On_Shipping" element={<Covid_Impact_On_Shipping/>} ></Route>
        <Route path="Delivery_driver_daily" element={<Delivery_driver_daily/>} ></Route>
        <Route path="Importance_of_tracking_numbers" element={<Importance_of_tracking_numbers/>} ></Route>
        <Route path="Same_Day_Delivery_Explained" element={<Same_Day_Delivery_Explained/>} ></Route>
        <Route path="Damage_Prevention_Through_Packaging" element={<Damage_Prevention_Through_Packaging/>} ></Route>
        <Route path="Weather_and_Shipping" element={<Weather_and_Shipping/>} ></Route>
        <Route path="Barcode_Scanning_in_Logistics" element={<Barcode_Scanning_in_Logistics/>} ></Route>
        <Route path="Multi_Package_Tracking" element={<Multi_Package_Tracking/>} ></Route>
        <Route path="CreateShipment" element={<CreateShipmentLogin/>} ></Route>
        <Route path="CreateShipmentPage" element={<CreateShipment/>} ></Route>
        <Route path="PaymentPage" element={<PaymentPage/>} ></Route>
      
      </Routes>
    </>
  );
}

export function HomePage() {

  useEffect(() => {
    window.scrollTo(0,0)
}, [])

    return (
        <>
      
    <div className="text-slate-800 bg-gray-100 h-screen">
    <div className="pb-10 lg:pb-40 md:pb-40">
        <Section1/>
        </div>
       
        <div className="lg:pb-10 ">
        <Section2/>
        </div>
        
        <div className="lg:pb-10 ">
        <Section3/>
        </div>
     
      <div className="lg:pb-10 ">
      <Section4/>
      </div>
    
      <div className="lg:pb-10 pb-5">
        <Section5 />
      </div>
      <div className="lg:pb-10 pb-5">
        <Section6 />
      </div>
      <div className="lg:pb-10 pb-5">
        <Section7 />
      </div>
      <div className="lg:pb-10 pb-5" >
      
        <Section8 />
      </div>
      <Footer/>
    </div>
   
    </>
  );
       
       
        
    
}

export function Footer() {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    window.location.reload();
  };

  const [showWhatAppIcon, setShowWhatAppIcon] = useState({
    show: false,
    Circle: "rounded-sm",
  });

  return (
    <div className="bg-gray-100">
      <div className="p-8 bg-white shadow-lg border-t-8 border-pink-600 space-y-12 lg:space-y-20 text-black lg:px-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <ul className="space-y-4 text-sm cursor-pointer">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-pink-100 text-pink-600 rounded-full -mt-1">
                <LocateFixed size={18} />
              </div>
              <p>
                San Jose–San Francisco–Oakland
                <br />
                <span className="font-semibold">San Francisco</span>
              </p>
            </li>

            <li className="flex items-center gap-4">
              <div className="p-2 bg-pink-100 text-pink-600 rounded-full -mt-1">
                <Mail size={18} />
              </div>
              <p>
                <span className="font-semibold text-pink-700">
                  2GODeliverycompany@gmail.com
                </span>
              </p>
            </li>
          </ul>

          {/* Navigation Links */}
          <ul className="space-y-4 hidden lg:block cursor-pointer text-pink-700">
            {[
              { label: "Track My Package", path: "../TrackPage" },
              { label: "About Us", path: "../About_Us" },
              { label: "Blog", path: "../Blog" },
              { label: "Contact Us", path: "../CustomerService" },
              { label: "Speak to an Agent in your Country", path: "../CustomerService" },
            ].map(({ label, path }) => (
              <li
                key={label}
                className="underline hover:text-pink-900 transition-colors duration-200"
                onClick={() => handleNav(path)}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* About Section */}
          <div className="space-y-5 text-sm">
            <h2 className="font-bold text-xl">About 2GO</h2>
            <p>
              <span className="font-semibold">2GO</span> is a multinational logistics brand,
              founded in the United States and headquartered in Bonn, Germany. It provides courier,
              package delivery, and express mail service, delivering over 1.7 billion parcels per year.
            </p>

            {/* WhatsApp Button Row */}
            <div className="flex items-center gap-4 -mb-8">
              <AnimatePresence>
                {showWhatAppIcon.show && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex gap-4 ml-auto"
                  >
                    {[
                      { label: "Ghana Agent", url: "https://wa.me/+233504372398" },
                      { label: "USA Agent", url: "https://wa.me/+1234567890" }, // Replace with real URL
                    ].map(({ label, url }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white text-xs rounded shadow-lg cursor-pointer hover:bg-green-600 transition"
                        onClick={() => window.open(url, "_blank")}
                      >
                        <img src={whatsAppLogo} alt="WhatsApp Icon" className="w-4 h-4" />
                        <p>{label}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating WhatsApp Icon */}
              <div
                className={`bg-green-500 p-2 mt-1 ml-auto shadow-xl cursor-pointer ${showWhatAppIcon.Circle}`}
                onClick={() => {
                  setShowWhatAppIcon((prev) => {
                    if (!prev.show) return { show: true, Circle: "rounded-full" };
                    else return { show: false, Circle: "rounded-sm" };
                  });
                }}
              >
                <img src={whatsAppLogo} alt="WhatsApp Icon" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-xs text-gray-600 select-none">
          <p>&copy; 2GO-Courier-Service</p>
        </div>
      </div>
    </div>
  );
}







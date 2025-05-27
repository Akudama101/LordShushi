


  
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
      
    <div className="text-slate-800 bg-slate-100 h-screen">
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

export function Footer(){
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    window.location.reload()
  }

  const [showWhatAppIcon, setSHowWhatAPP] = useState({
    show: false,
    Circle:"rounded-sm "
  })

  return(
   <div>
  <div className="p-5 bg-pink-600/90 space-y-10 py-10 lg:py-20 lg:px-20 text-white">
    <div className="space-y-10 grid lg:grid-cols-3">
      {/* Contact Info */}
      <ul className="space-y-2 text-sm cursor-pointer">
        <li className="flex gap-5">
          <div className="p-2 bg-pink-800/70 w-fit h-fit rounded-full -mt-1">
            <LocateFixed size={15} />
          </div>
          <p>
            San Jose–San Francisco–Oakland
            <br />
            <span className="font-bold">San Francisco</span>
          </p>
        </li>
        <li className="flex gap-5">
          <div className="p-2 bg-pink-800/70 w-fit h-fit rounded-full -mt-1">
            <Phone size={15} />
          </div>
          <p>
            <span className="font-bold">+233 (504)-372-398</span>
          </p>
        </li>
        <li className="flex gap-5">
          <div className="p-2 bg-pink-800/70 w-fit h-fit rounded-full -mt-1">
            <Mail size={15} />
          </div>
          <p>
            <span className="font-bold text-pink-200">2GODeliverycompany@gmail.com</span>
          </p>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="space-y-2 hidden lg:block cursor-pointer">
        <li className="underline text-pink-200 hover:text-white" onClick={() => handleNav("../TrackPage")}>
          Track My Package
        </li>
        <li className="underline text-pink-200 hover:text-white" onClick={() => handleNav("../About_Us")}>
          About Us
        </li>
        <li className="underline text-pink-200 hover:text-white" onClick={() => handleNav("../Blog")}>
          Blog
        </li>
        <li className="underline text-pink-200 hover:text-white" onClick={() => handleNav("../CustomerService")}>
          Contact Us
        </li>
        <li className="underline text-pink-200 hover:text-white" onClick={() => handleNav("../CustomerService")}>
          Speak to an Agent in your Country
        </li>
      </ul>

      {/* About Section */}
      <ul className="space-y-5">
        <li className="font-bold text-lg">
          <h1>About 2GO</h1>
        </li>
        <li className="text-sm">
          <span className="font-bold">2GO</span> is a multinational logistics brand, founded in the United States and
          headquartered in Bonn, Germany. It provides courier, package delivery, and express mail service, delivering over
          1.7 billion parcels per year.
        </li>

        {/* WhatsApp Button Row */}
        <li className="flex h-15 -mb-8">
          <AnimatePresence>
            {showWhatAppIcon.show && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`h-fit bg-pink-600/90 space-y-2 py-2 flex gap-5 ml-auto`}
              >
                <div
                  className="text-xs bg-green-500 py-2 text-center w-30 shadow-2xl flex gap-1 px-2 rounded-sm h-fit justify-center"
                  onClick={() => {
                    window.open("https://wa.me/+233504372398", "_blank");
                  }}
                >
                  <div className="w-4 h-4">
                    <img src={whatsAppLogo} alt="whatsPPiCON" />
                  </div>
                  <p>Ghana Agent</p>
                </div>
                <div className="text-xs bg-green-500 py-2 text-center w-30 shadow-2xl flex gap-1 px-2 rounded-sm h-fit justify-center">
                  <div className="w-4 h-4">
                    <img src={whatsAppLogo} alt="whatsPPiCON" />
                  </div>
                  <p>USA Agent</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating WhatsApp Icon */}
          <div
            className={`bg-green-500 ml-auto h-fit p-2 mt-1 shadow-xl ${showWhatAppIcon.Circle}`}
            onClick={() => {
              setSHowWhatAPP(!showWhatAppIcon.show);
              if (!showWhatAppIcon.show) {
                setSHowWhatAPP({ show: true, Circle: "rounded-full" });
              } else {
                setSHowWhatAPP({ show: false, Circle: "rounded-sm" });
              }
            }}
          >
            <img src={whatsAppLogo} alt="whatsPPiCON" />
          </div>
        </li>
      </ul>
    </div>

    {/* Footer bottom */}
    <div className="text-center text-xs text-pink-200">
      <p>&copy; 2GO-Courier-Service</p>
    </div>
  </div>
</div>

  )
}









  
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



import { Routes, Route } from "react-router-dom"
import { LocateFixed, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import whatsAppLogo from "/images/whatsAppLogo.png"
import {About_Us} from './Reusables'
import {TrackPage, CreateShipment} from './Shipment'







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
        <Route path="CreateShipment" element={<CreateShipment/>} ></Route>
      
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
       
        <div className="lg:pb-10 pb-5">
        <Section2/>
        </div>
        
        <div className="lg:pb-10 pb-5">
        <Section3/>
        </div>
     
      <div className="lg:pb-10 pb-5">
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

  return(
    <div>

<div className="p-5 bg-slate-900 space-y-10 py-10 text-white" >
<ul className="space-y-2 text-sm " >
  <li className="flex gap-5 " ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" ><LocateFixed size={15} />  </div> <p>Airport Residence Terminal 2 <span className="font-bold" >Accra, Ghana</span></p> </li>
  <li className="flex gap-5 " ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" ><Phone size={15} />  </div> <p> <span className="font-bold" >+ 233 57 000 000  </span> </p> </li>
  <li className="flex gap-5 " ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" > <Mail size={15} /> </div> <p><span className="font-bold text-blue-500" >interpostsupport@company.com</span></p> </li>
</ul>


<ul className="space-y-5" >
  <li className=" font-bold text-lg" ><h1>About InterPost</h1></li>
  <li className=" text-sm" > <span className="font-bold" >Interpost </span> is a multinational logistics brand, founded in the United States and headquartered in Bonn, Germany. It provides courier, package delivery, and express mail service, delivering over 1.7 billion parcels per year. </li>
  <li className="" ><div className="bg-green-500 w-fit p-2" ><img src={whatsAppLogo} alt="whatsPPiCON" /></div></li>
</ul>
<div className="text-center  text-xs" ><p>&copy; interpost-service</p></div>
</div>



    </div>
  )
}






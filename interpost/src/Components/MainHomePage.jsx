


  
import { Section1 , CustomerService, Section2 } from "./Reusables"
import { Section3 } from "./Reusables"
import { Section4 } from "./Reusables"
import { Section5 } from "./Reusables"
import { Section6 } from "./Reusables"
import { Section7 } from "./Reusables"
import { Section8 } from "./Reusables"
import { Blog } from "./Reusables"
import { How_Package_Tracking_Works, Safe_Package_Delivery_Tips , Package_delay_solutions} from "./Blog_Pages"



import { Routes, Route } from "react-router-dom"
import { LocateFixed, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import whatsAppLogo from "/src/assets/images/whatsAppLogo.png"
import {About_Us} from './Reusables'
import {TrackPage} from './Shipment'







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
      
        <div className="pb-10 lg:pb-40 md:pb-40">
        <Section1/>
        </div>
       
        <div className="pb-10">
        <Section2/>
        </div>
        
        <div className="pb-10">
        <Section3/>
        </div>
     
      <div className="pb-10">
      <Section4/>
      </div>
      <div className="pb-10">
        <Section2 />
      </div>

      <div className="pb-10">
        <Section3 />
      </div>
      <div className="pb-10">
        <Section4 />
      </div>
    
      <div className="pb-10">
        <Section5 />
      </div>
      <div className="pb-10">
        <Section6 />
      </div>
      <div className="pb-20">
        <Section7 />
      </div>
      <div className="pb-10" id="director">
      <a href='#director_Page' ><p className='bg-blue-600 px-5 py-4' >Next</p></a>
        <Section8 />
      </div>
      <Footer/>
   
    </>
  );
       
       
        
    
}

export function Footer(){

  return(
    <div>

<div className="p-5 bg-gray-700 space-y-10 py-10" >
<ul className="space-y-2 text-sm text-white " >
  <li className="flex gap-5 text-white" ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" ><LocateFixed size={15} />  </div> <p>Airport Residence Terminal 2 <span className="font-bold" >Accra, Ghana</span></p> </li>
  <li className="flex gap-5 text-white" ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" ><Phone size={15} />  </div> <p> <span className="font-bold" >+ 233 57 000 000  </span> </p> </li>
  <li className="flex gap-5 text-white" ><div className="p-2 bg-gray-800 w-fit h-fit rounded-full -mt-1" > <Mail size={15} /> </div> <p><span className="font-bold text-blue-300" >interpostsupport@company.com</span></p> </li>
</ul>


<ul className="space-y-5" >
  <li className="text-white font-bold text-lg" ><h1>About InterPost</h1></li>
  <li className="text-white text-sm" > <span className="font-bold" >Interpost </span> is a multinational logistics brand, founded in the United States and headquartered in Bonn, Germany. It provides courier, package delivery, and express mail service, delivering over 1.7 billion parcels per year. </li>
  <li className="text-white" ><div className="bg-gray-800 w-fit p-2" ><img src={whatsAppLogo} alt="whatsPPiCON" /></div></li>
</ul>
<div className="text-center text-white text-xs" ><p>&copy; interpost-service</p></div>
</div>



    </div>
  )
}






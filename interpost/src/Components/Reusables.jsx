
import xpa from '/images/woman-box.jpg';
import xpc from '/images/parcel-shipping-.jpg';
import xpd from '/images/plane.svg';
import xpe from '/images/fast-bus.svg';

import xpg from "/images/Warehouse.jpg";
import xph from "/images/parcel-delivery.jpg";
import xpi from "/images/New-innovations.jpg";
import xpj from "/images/seaship.jpg";
import ibm from "/images/cheerful-woman-with-box.jpg";
import ibn from '/images/360_F_603227348_Hpid47cSby44NH5CEYXu1Io2F94utpu5.jpg';
import { Newspaper, Headset, User, Phone, Contact, Mail, ChevronUp, PackageCheck, Truck } from 'lucide-react';
import cb1 from "/images/what-is-a-courier-driver-HERO.webp";
import cb2 from "/images/driver.webp";
import cb3 from "/images/lady driver.jpeg";
import cb4 from "/images/Delivery-Driver5.jpeg";
import cb5 from "/images/delivery man.jpg";
import { useState, useEffect } from 'react';
import bb1 from "/images/Cathay-Pacific.jpg";
import bb2 from "/images/Airbus-Wing-.webp";
import bb3 from "/images/plane6.webp";
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './MainHomePage';
import directorPic from "/images/cfpb_s-bessent-close-up_2025-02.original.jpg";
import agentPic from "/images/2go_logo_main.png"

import { MenuIcon, HomeIcon, PhoneCallIcon , UserIcon, NewspaperIcon, QuoteIcon, BookCheck, TruckIcon, X , PhoneIcon, MailIcon, Wallet} from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion';
import asusas from '/images/World_blank_map_countries.png';

import Select from "react-select";
import TaxAgentImg from "/images/Tax-Agents.jpg";
import ManagerImg from "/images/cfpb_s-bessent-close-up_2025-02.original.jpg";
import CoronaImage from "/images/Loading-container-in-cargo-airplane.webp";
import Happyrating from "/images/happyRating.png";
import InnovationImage from "/images/logo-fpi.jpg";
import digidds from '/images/business-landing-express.png';
import digijid from '/images/ugggugug.jpg';
import idnisoa from '/images/1710846499365.jpeg';
import idnfidj from '/images/services-forwarding.png';
import dioasd from '/images/Special-Services.jpg';
import dignis from '/images/hero-3-highres.png';
import dioaod from '/images/hero-2-highres.png';
import sonoas from '/images/services-sea-solutions.png';
import sonaoid from '/images/services-special-containers.png';
import soanfoa from '/images/services-project-logisitcs.png';
import sonfoja from '/images/services-logistics-and-warehousing.png';
import aodnoa from '/images/media-coverage-thumbnail-5-r61ga08057pwjwd4yr6r596d2ih5p74tucw2k3ak5w.png';
import sonaoif from '/images/media-coverage-thumbnail-4-r61g8oa8gnwa3sarqogs439urv1fsmuinrmb2z9mz8.png';
import aoosij from '/images/hero-1-highres.png'







const images = [dioaod, dignis, digidds, digijid,  xpa, ibn ]

const images2 = [idnfidj, sonoas, cb2, sonaoid, cb3, soanfoa, cb4, cb5, sonfoja]

const images3 = [idnisoa, dioasd, bb1, aoosij, bb2, aodnoa, bb3, sonaoif]
//bg-[#41134E]

export function Section1() {
    const navigate = useNavigate() 
    const handleNav = (path) => {
        navigate(path);
        window.location.reload();
    }
    return(
        <>
         <div  ><HeaderPage/></div>
     


        <section className='bg-[url("/images/1710846501ffff.jpeg")] lg:bg-[url("/images/types-of-shipping-containers6527d77f86bfc.jpg")] h-screen bg-cover bg-center grid items-center bg-no-repeat bg-fixed '>
         
        
<span>
    <div className='rounded-sm  bg-gray-100 text-gray-800 w-2/3 space-y-20 p-5 lg:hidden ml-5 shadow-2xl' >
    <p className='font-bold  text-2xl ' > <span className='text-pink-600 font-extrabold ' >2-GO</span> Courier & Delivery Company is here to serve you.</p>
    <div className='bg-pink-600 mx-auto w-fit  px-5 py-2 text-white shadow-lg rounded-sm ' onClick={() => handleNav("../TrackPage" )} ><span className='flex gap-2' ><Truck/><p>Track Package</p></span> </div>
    </div>


    <div className='hidden lg:block w-100  mx-20 bg-slate-900 rounded-sm py-10 shadow-2xl' >
    <p className='font-bold text-white text-5xl px-10' > <span className='text-blue-500 ' >2-GO</span> Delivery is here to serve you.</p>

       <div className='bg-blue-500 mx-auto w-fit  px-5 py-2 text-white shadow-lg flex gap-2 mt-30 '  onClick={() => handleNav("../TrackPage")}> <Truck/> <p>Track Package</p></div>


    </div>
</span>
       
          


         
        
        </section>
        </>
    )
}

export function Section2() {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000);
        return () => clearInterval(interval)
    }, [])

    const handleNav = (path) => {
        navigate(path);
        window.location.reload();
    }

    return(
        <>
                  <section className='grid lg:grid-cols-2 px-5'>
          
                 <div className=" w-full h-full overflow-hidden shadow-lg rounded-sm">
              <div style={{ transform: `translateX(-${index * 100}%)` }} className="flex transition-transform duration-[800ms] ease-in-out w-full h-full 2xl:h-full" >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`slide${i}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
            <div className=' text-slate-800 '>
                <h1 className='text-2xl  font-bold text-center my-5 2xl:mt-30 2xl:text-6xl lg:text-4xl lg:my-15'>For Your Business</h1>
                <p className='text-xl  text-center 2xl:text-3xl 2xl:px-5 2xl:my-15 lg:px-4 lg:text-2xl px-5'>Power your small and medium-sized business sucess with world-class shipping and logistics. Our team of experts can help you address the ever changing need of your customers</p>
              <div className='py-4 w-fit px-5 mx-auto lg:my-15 text-white  bg-pink-600 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg flex gap-5 mt-5 mb-10 '  onClick={() => handleNav("../CustomerService")}> <Phone/> <p>Explore More Options</p></div>
            </div>
        </section>
        </>
    )
}

export function Section3() {
    const navigate = useNavigate()

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {  setIndex((a) => (a + 1) % images2.length) ;}, 4000); return () => clearInterval(interval) ; }, []);

    const [invoiceClear, setInvoiceClear] = useState("hidden");
    const [assurancePackage, setassurancePackage] = useState("hidden");
    const [deliveryGuarantee, setdeliveryGuarantee] = useState("hidden");
    const [PaymentDelivery, setPaymentDelivery] = useState("hidden") ;
    const showInvoiceClear = () => {if(invoiceClear === "hidden"){ setInvoiceClear("block"); setassurancePackage("hidden");  setdeliveryGuarantee("hidden"); setPaymentDelivery("hidden") ; } else{ setInvoiceClear("hidden") ; } } ;
    const showAssurancePackage = () => { if(assurancePackage === "hidden"){ setassurancePackage("block"); setInvoiceClear("hidden");  setdeliveryGuarantee("hidden"); setPaymentDelivery("hidden") ;} else {  setassurancePackage("hidden"); } } ;
    const showDeliveryGuarantee = () => { if(deliveryGuarantee === "hidden"){  setdeliveryGuarantee("block") ;  setInvoiceClear("hidden") ;  setassurancePackage("hidden"); setPaymentDelivery("hidden") ; } else { setdeliveryGuarantee("hidden");}  } ;
    const showPaymentDelivery = () => {    if(PaymentDelivery === "hidden"){  setPaymentDelivery("block");  setInvoiceClear("hidden") ;   setassurancePackage("hidden");  setdeliveryGuarantee("hidden");  } else {   setPaymentDelivery("hidden") ; } };
    

  const handleNav = (path) => {
    navigate(path);
    window.location.reload()
  }


 
    return(
        <>
        <section className='grid lg:grid-cols-2 px-5'>

            <div className=' lg:w-4/5 lg:ml-10   2xl:w-5/8 2xl:ml-40 py-5 mb-10 text-slate-800'>
                <h1 className='text-3xl font-bold 2xl:text-6xl 2xl:mt-5'>Document and Parcel Shipping</h1>
                <h1 className='text-xl  my-5 2xl:text-4xl'>For All Shippers</h1>
                <hr className='bg-gray-700 h-1' />
                <p className='text-lg my-5  2xl:text-2xl'>Learn about 2GO Express - the undisputed global leader in international experss shipping</p>
               
                <div  className=' py-5 space-y-10 border p-4 shadow-lg border-gray-200 bg-white lg:mb-10 mb-5 rounded-sm' >
                    <h1 className='font-bold text-2xl uppercase underline mb-10' > Service</h1>
                    <div className='space-y-5' >
                       

                       <div className='grid grid-cols-12' >
                       <div className='col-span-11' ><p>Invoice Clearity</p>   </div>
                       <p className={`${invoiceClear === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showInvoiceClear} ><ChevronUp/> </p> 
                        <span className={`${invoiceClear} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} > We believe in full transparency. Every invoice you receive is clear, detailed, and easy to understand no hidden fees or confusing charges. You’ll always know exactly what you’re paying for, with a complete breakdown of services and costs.  </span>
                        
                       </div>



                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >2GO’s 100% Assurance Safety Package</p> 
                            <p className={`${assurancePackage === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showAssurancePackage} ><ChevronUp/></p> 
                        <span className={`${assurancePackage} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} >At 2GO Your package’s safety is our top priority. We use secure packaging, trusted handling procedures, and reliable tracking systems to ensure your item arrives in perfect condition. With our 100% Assurance Safety Package, you can ship with total confidence.</span>
                        </div>
                        
                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >2GO’s 24h Delivery Guarantee</p> 
                            <p className={`${deliveryGuarantee === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showDeliveryGuarantee} ><ChevronUp/></p>
                        <span className={`${deliveryGuarantee} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} >We don’t just promise fast delivery—we guarantee it. Our 24-Hour Delivery Guarantee means your package will be delivered within 24 hours, or you get your money back. It’s our commitment to speed, reliability, and customer satisfaction.</span>
                        </div>


                        <div className='grid grid-cols-12' >
                            <p className="col-span-11" >Payment Before Delivery</p> 
                            <p className={`${PaymentDelivery === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showPaymentDelivery} ><ChevronUp/> </p>
                        <span className={`${PaymentDelivery} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} >For efficiency and mutual trust, we operate on a Payment Before Delivery policy. This ensures smooth processing, secure handling, and timely dispatch of your items. Once payment is confirmed, we take care of the rest—fast and professionally.</span>
                        </div>

                    </div>
                </div>

                <div className='py-4 w-fit px-5 mx-auto lg:my-15 text-white  bg-pink-600 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg flex gap-5 ' onClick={() => handleNav("../CustomerService" )}>  <PhoneIcon />  <p>Contact Us Now</p> </div>
            </div>
            <div className="w-full overflow-hidden 2xl:h-200 lg:h-full shadow-lg rounded-sm">
                <div className="flex transition-transform duration-[800ms] ease-in-out w-full h-full" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {images2.map((img, i) => (
                        <img key={i} src={img} alt="man with box" className="w-full h-100 lg:h-150 2xl:h-screen object-cover flex-shrink-0" />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export function Section4() {
    return(
        <>
        <section className=' grid lg:grid-cols-2 '>
            <div>
                <img src={xpc} alt="parcel"  className='hidden lg:block h-full'/>
                
                </div>

            <div className=' px-4 pb-15 2xl:h-200' >
                <h1 className='text-3xl px-4 font-bold mt-10 2xl:text-6xl 2xl:pr-30 '>Retailer or Volume Shipping</h1>
                <h1 className='text-2xl ml-4 my-3 2xl:text-4xl 2xl:my-10'>Business Only</h1>
                <hr className='bg-gray-700 h-1 my-5' />
                <p className='text-lg ml-4 2xl:text-2xl 2xl:pr-20 2xl:mt-15'>We have two divisions the offer reliable business shipping for e-commerce, supplier or manufacturing companies</p>

                <div className='flex h-30 text-black border-l-4 border-blue-500 shadow-xl bg-white my-5 lg:my-10 2xl:mt-17'>
                    <img src={xpd} alt="plane" className='h-20 w-27 mt-6 ml-2'/>
                   <div className='flex ml-2'>
                   <div className=' h-10 my-10 w-5 bg-blue-500'></div>
                   <p className='text-sm lg:text-lg grid items-center ml-5 mt-1'>Global Express Flight Delievry , Delivers within Set Delivery Time. and 100% Assurance of Safety.</p>
                   </div>
                </div>

                <div className='flex h-30 text-black border-l-4 border-blue-500 shadow-xl bg-white 2xl:mt-15'>
                  <img src={xpe} alt="bus" className='h-15 w-27 mt-6 ml-2'/>
                 <div className='flex ml-2'>
                 <div className=' h-10 my-10 w-5 bg-red-500'></div>
                 <p className='text-sm lg:text-lg grid items-center ml-5 mt-1'>Fast, door-to-door, courier delivered. Time definite delivery to 220+ countries.</p>
                 </div>
                </div>
            </div>
        </section>
        </>
    )
}

export function Section5() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
     const interval = setInterval(() => {
         setIndex((a) => (a + 1) % images3.length )
     }, 4000);
     return () => clearInterval(interval)
    }, [])
 
    return(
        <>
        <section className='grid lg:grid-cols-2 px-5'>
           <div className='2xl:h-200 border w-4/5 ml-30 lg:ml-10 bg-white rounded-2xl  shadow shadow-black hidden lg:block'>
            <h1 className='text-3xl font-bold ml-5 mt-5 2xl:text-6xl'>Cargo Shipping</h1>
            <h1 className='text-2xl ml-5 my-3 2xl:text-4xl 2xl:my-10'>Business Only</h1>
            <div className='w-4/5 border shadow shadow-black ml-5 my-3'></div>
            <p className='text-xl px-3 ml-1 2xl:text-3xl 2xl:mt-10'>Discover Shipping and logistics Service Options from 2GO Global Forwarding</p>
            <div className='h-50 2xl:h-65 bg-[#DBD7D7] my-8 border border-[#DBD7D7]'>
                <p className='font-bold text-xl mt-5 ml-5 2xl:text-3xl'>Services Available</p>
                <div className='grid grid-cols-2 mt-5 gap-8 ml-5 2xl:text-2xl'>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Road Freight</p>
                    <p>Rail Freight</p>
                </div>
            </div>
            <button className='h-15 bg-red-600 text-white text-xl w-4/5 ml-10 rounded-2xl mb-8 lg:mt-10 2xl:text-2xl lg:font-bold'>Explore 2GO'S Global Forwarding</button>
           </div>

           <div className='overflow-hidden w-full h-full shadow-lg'>
           <div className='flex transition-transform duration-[800ms] ease-in-out w-full h-full' style={ {transform: `translateX(-${index * 100}%)`}}>
            {images3.map((img, i) => ( <img key={i} src={img} alt="Cargo" className='w-full h-full object-cover flex-shrink-0' />))}
            </div>
           </div>
        </section>
        </>
    )
}

export function Section6() {
    const navigate = useNavigate();
   
    const [hideClearing, setHideClearing] = useState("hidden") ;
    const [hideSameDayDelivery, setHideSameDayDelivery] = useState("hidden");
    const [hide24Hinternationa, setHide24International] = useState("hidden");
    const [DoortoDoor, setdoorToDoor] = useState("hidden")
    const showClearing = () => {  if(hideClearing === "hidden"){ setHideClearing("block") ; setHideSameDayDelivery("hidden"); setHide24International("hidden") ;   setdoorToDoor("hidden") } else { setHideClearing("hidden") } };
    const ShowSameDayClearing = () => { if(hideSameDayDelivery === "hidden"){setHideSameDayDelivery("block"); setHideClearing("hidden"); setHide24International("hidden") ;   setdoorToDoor("hidden") } else { setHideSameDayDelivery("hidden")  } };
    const showInternational = () => {  if(hide24Hinternationa === "hidden"){   setHide24International("block");   setHideClearing("hidden");  setHideSameDayDelivery("hidden") ;   setdoorToDoor("hidden") } else { setHide24International("hidden")  } };
    const ShowDoorToDoor = () => { if(DoortoDoor === "hidden"){   setdoorToDoor("block");   setHideClearing("hidden"); setHideSameDayDelivery("hidden");  setHide24International("hidden");   } else {  setdoorToDoor("hidden")  }   }

    const handleNav = (path) => {
        navigate(path);
        window.location.reload()
    }




    return (
        <>
        <section className='lg:grid-cols-2 lg:h-140 grid 2xl:h-200 2xl:px-15 text-slate-800'>
           
            <div className='border border-white h-full 2xl:w-4/5 2xl:ml-20 2xl:shadow 2xl:shadow-black 2xl:rounded-2xl px-5'>
                <h1 className='text-3xl  font-bold mt-5 lg:mt-10 2xl:text-6xl'>Enterprise Logistics Services</h1>
                <h1 className=' text-2xl my-3 2xl:text-4xl 2xl:my-8'>Business Only</h1>

                <hr className='bg-gray-700 h-1' />
                
                <p className='text-lg my-4 2xl:text-2xl 2xl:mt-10'>Find out how 2GO supply chain can revolutionize your business as 3PL Provider.</p>


                <div className=' py-5 space-y-10 border p-4 shadow-lg border-gray-200 bg-white lg:mb-10 mb-5 rounded-sm'>
                    <h1 className='text-xl font-bold 2xl:text-3xl uppercase  underline'>Services</h1>
                    <div className='space-y-5'>

                     <div className='grid grid-cols-12' >  
                        <h1 className='col-span-11'>Quick Clearing</h1> 
                        <p className={`${hideClearing === "hidden"? "": "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showClearing}><ChevronUp/> </p>   
                        <span  className={`${hideClearing} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} > We offer comprehensive customs clearing services to make international shipping hassle-free. Our team takes care of all the necessary paperwork, duties, and compliance checks to ensure your goods move smoothly through ports and borders—saving you time and avoiding unnecessary delays or penalties.</span>
                     </div> 


                     <div className='grid grid-cols-12' >
                        <h1 className='2xl:text-3xl col-span-11'>Same Day Delivery</h1>
                         <p className={`${hideSameDayDelivery === "hidden" ? "" : "rotate-180" } bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={ShowSameDayClearing} ><ChevronUp/> </p> 
                     <span className={` ${hideSameDayDelivery} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2 `} > Need it there today? Our Same Day Delivery service guarantees that your package reaches its destination within hours. Ideal for urgent business documents, perishable items, or last-minute gifts, we prioritize speed, reliability, and secure handling—so your delivery gets there exactly when it needs to. </span>   
                     </div>




                     <div className='grid grid-cols-12' >
                         <h1 className='2xl:text-3xl col-span-11'>24H international Delivery</h1> 
                         <p className={`${hide24Hinternationa === "hidden" ? "" : "rotate-180"}  bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full`} onClick={showInternational} ><ChevronUp/> </p>
                     <span className={`px-5 ${hide24Hinternationa} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} >Reach across borders in record time. With our 24-Hour International Delivery, we ensure that your shipment is picked up, processed, and delivered to most major global cities within just one day. Powered by trusted global logistics partners, we make urgent international shipping fast, safe, and efficient. </span> 

                     </div>  


                     <div className='grid grid-cols-12' > 
                        <h1 className='2xl:text-3xl col-span-11'>Door to Door Delivery</h1>
                         <p className={`${DoortoDoor === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-pink-400 border-none rounded-full `} onClick={ShowDoorToDoor}><ChevronUp/></p>  
                    <span className={`px-5 ${DoortoDoor} bg-gray-50 p-5 col-span-12 text-xs shadow shadow-pink-300 border-none rounded-sm mt-2`} > From sender to recipient, we manage the entire journey. Our Door to Door Delivery service includes pickup from your location and delivery right to the recipient’s doorstep—no drop-off points or extra effort required. It's a convenient, full-service option designed for individuals and businesses alike. </span>
                    </div>  
                    </div>
                </div>


                <div className='py-4 w-fit px-5 mx-auto lg:my-15 text-white  bg-pink-600 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg flex gap-5 mb-10 mt-5'  onClick={() => handleNav("../CustomerService")}>  <PhoneIcon />  <p>Contact Us Now</p> </div>
            </div>

            <div><img src={xpg} alt="warehouse" className='h-full hidden lg:block 2xl:rounded-2xl'/></div>


        </section>
        </>
    )
}

export function Section7() {
    return(
        <>
        <section className='grid lg:grid-cols-3 gap-4 px-4'>
       
       
       <div className="mx-auto shadow-lg rounded-2xl bg-white border border-gray-200 max-w-md hover:shadow-pink-200 transition-shadow duration-300">
  <img src={xph} alt="Parcel delivery" className="h-72 w-full object-cover rounded-t-2xl"/>
  <div className="px-4 py-5"><h1 className="text-2xl font-bold text-pink-600 mb-3 2xl:text-4xl">Sustainability </h1>
    <p className="text-gray-600 text-sm 2xl:text-xl leading-relaxed">Sustainable business begins with sustainable supply chains. Find out what 2GO has to offer, why we're committed to sustainability, and how our industry is helping deliver an even better world.</p>
  </div>
</div>

         
         <div className="mx-auto shadow-lg rounded-2xl bg-white border border-gray-200 max-w-md hover:shadow-pink-200 transition-shadow duration-300">
  <img
    src={xpi}
    alt="Parcel delivery"
    className="h-72 w-full object-cover rounded-t-2xl"
  />
  <div className="px-4 py-5">
    <h1 className="text-2xl font-bold text-pink-600 mb-3 2xl:text-4xl">
      Innovation
    </h1>
    <p className="text-gray-600 text-sm 2xl:text-xl leading-relaxed">
      Discover the future of logistics through customer-centric innovation,
      industry-leading trend research and next generation solutions.
    </p>
  </div>
</div>

         
      <div className="mx-auto shadow-lg rounded-2xl bg-white border border-gray-200 max-w-md hover:shadow-pink-200 transition-shadow duration-300">
  <img
    src={xpj}
    alt="Parcel delivery"
    className="h-72 w-full object-cover rounded-t-2xl"
  />
  <div className="px-4 py-5">
    <h1 className="text-2xl font-bold text-pink-600 mb-3 2xl:text-4xl">
      Trade Atlas 2025
    </h1>
    <p className="text-gray-600 text-sm 2xl:text-xl leading-relaxed">
      Global trade recovered in 2025 and is forecast to grow faster over the
      next five years than during the preceding decade.
    </p>
  </div>
</div>

         
        </section>
        </>
    )
}

export function Section8() {
    return(
        <>
    
        <section className='' id="director_Page">
            <hr className='h-1 w-4/5 mx-auto bg-gray-300 border border-gray-300 mb-10 ' />
        
        <div className="px-5 lg:w-1/2 2xl:w-1/3 mx-auto">
  <div className="shadow-lg rounded-2xl overflow-hidden border border-gray-200">
    <img src={directorPic} alt="Director Picture" className="w-full h-auto object-cover" />
    <div className="bg-pink-600 pt-5 pb-10 px-5 space-y-2 text-white">
      <h1 className="font-bold text-xl">2GO's Founder</h1>
      <p className="text-sm">Mr. Cam Odie</p>
      <p className="flex gap-2 items-center text-sm">
        <MailIcon size={16} /> 
        <span>2GO-deliverycompany@gmail.com</span>
      </p>
    </div>
  </div>
</div>

          

        </section>

        </>
    )
}

export function CustomerService() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    const countries = [
        { value: 'Canada', label: 'Canada' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'United States', label: 'United States' },
      ];

      const PurposeOfContact = [
        {value:"General Enquiry", label:"General Enquiry"},
        {value:"Payment of Clearance Fee", label:"Payment of Clearance Fee"},
        {value:"Tracking Issues", label:"Tracking Issues"},
      ]
    


const AgentINforGhana = 
   { imageID: TaxAgentImg,
        name:"Dickson Amankona",
        country:"Ghana",
        number:"+233504372398",
        admin:"English, twi & French",

    };


    const agentFromotherCuntry = {
        imageID: ManagerImg,
        name:"Daniel Lark",
        country:"USA & Canada",
        Email:"2godeliverycompany@gmail.com",
        Admin:"English, Spanish , French & German"
    }


    const [AgentData, setAgentData] = useState({
        imageID:"",
        name:"",
        country:"",
        number:"",
        Email:"",
        admin:"",

    })

    const [selectValue1, setSelectValue1 ] = useState({});
    const [selectValue2, setSelectValue2] = useState({});
    const [hideFilter, setHideFilter] = useState("");
    const [showNumberBar, setShownumberbar]= useState('hidden');

    const [showDetails, setShowDetails] = useState("hidden")
   



const handleChange1 = (e) => { setSelectValue1(e)}

const handleChange2= (e) => {setSelectValue2(e)}



const GetAgent = () => {
    
    if(selectValue1.value && selectValue2.value){
        
        if(selectValue1.value === "Ghana"){
            AgentData.imageID = AgentINforGhana.imageID;
            AgentData.name = AgentINforGhana.name;
            AgentData.number = AgentINforGhana.number;
            AgentData.admin = AgentINforGhana.admin;
            AgentData.country = AgentINforGhana.country;
            setShowDetails("block");
            setHideFilter("hidden");
            
    }else{

        AgentData.imageID = agentFromotherCuntry.imageID;
            AgentData.name = agentFromotherCuntry.name;
            AgentData.Email = agentFromotherCuntry.Email;
            AgentData.admin = agentFromotherCuntry.Admin;
            AgentData.country = agentFromotherCuntry.country;
            setShowDetails("block");
            setHideFilter("hidden");

    }



    } else{
        alert("Please Complete Filter Detail")
    }
    


}



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






    useEffect(() => {
        window.scrollTo(0,0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
       
  <>
  <HeaderPage />

  <div className="relative min-h-screen bg-pink-50">
    <section className="py-10 lg:py-20">
      <h1 className="text-3xl lg:text-5xl 2xl:text-7xl uppercase font-extrabold text-center text-pink-700 tracking-widest mt-10">
        Customer Service
      </h1>
      <p className="text-sm lg:text-lg mt-4 px-6 text-center mx-auto max-w-4xl text-gray-700">
        Talk to Our Agent Representative Now! They are available 24/7 for your convenience. Response is usually immediate or within the hour.
      </p>

      <div className={`px-8 py-6 mt-10 bg-white rounded-2xl shadow-xl w-11/12 lg:w-1/2 mx-auto space-y-5 text-gray-800 ${hideFilter}`}>
        <h2 className="font-bold text-center uppercase text-pink-700 text-lg">Agent Search Filter</h2>

        <div>
          <p className="my-1 text-sm">Select Country of Service</p>
          <Select
            options={countries}
            onChange={handleChange1}
            value={selectValue1}
            isSearchable={false}
            placeholder="Choose Country"
            className="outline-none text-black"
          />
        </div>

        <div>
          <p className="my-1 text-sm">Purpose of Contact</p>
          <Select
            onChange={handleChange2}
            value={selectValue2}
            options={PurposeOfContact}
            isSearchable={false}
            className="outline-none text-black"
          />
        </div>

        <div
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold w-fit px-6 py-2 rounded-md shadow-md cursor-pointer uppercase text-sm mx-auto"
          onClick={GetAgent}
        >
          Confirm
        </div>
      </div>

      <span className={`${showDetails}`}>
        <div className="px-7 mt-10">
          <div className="lg:w-[40rem] mx-auto">
            <div className="rounded-xl overflow-hidden border-4 border-pink-400">
              <img src={AgentData.imageID} alt="Agent" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="px-5 lg:w-[40rem] mx-auto">
          <div className="shadow-xl my-10 rounded-lg p-6 text-sm bg-white space-y-4 text-gray-800">
            <p className="text-xl font-semibold text-center text-pink-700">Agent Details</p>
            <div className="flex justify-between">
              <h1 className="font-medium uppercase">Agent Name:</h1>
              <p>{AgentData.name}</p>
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium uppercase">Country of Operation:</h1>
              <p>{AgentData.country}</p>
            </div>
            {AgentData.number && (
              <div
                className="flex justify-between p-2 rounded border border-pink-400 cursor-pointer"
                onClick={() => Copytext("numberAgent")}
              >
                <h1 className="font-bold uppercase">Contact:</h1>
                <p id="numberAgent">{AgentData.number}</p>
              </div>
            )}
            {AgentData.Email && (
              <div
                className="flex justify-between p-2 rounded border border-pink-400 cursor-pointer"
                onClick={() => Copytext("EmailAgent")}
              >
                <h1 className="font-medium uppercase">Email:</h1>
                <p id="EmailAgent">{AgentData.Email}</p>
              </div>
            )}
            <div className="flex justify-between">
              <h1 className="font-medium uppercase">Languages:</h1>
              <p>{AgentData.admin}</p>
            </div>
            <div className="flex justify-between">
              <h1 className="font-medium uppercase">Working Hours:</h1>
              <p>8:00 AM - 8:00 PM GMT</p>
            </div>
          </div>

          {AgentData.number && (
            <div
              onClick={() => window.location.href = `tel:${AgentData.number}`}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm text-center py-3 rounded shadow-md flex justify-center gap-2 cursor-pointer"
            >
              <Phone size={16} /> <span>Talk to Available Agent</span>
            </div>
          )}

          {AgentData.Email && (
            <div
              onClick={() => window.location.href = `mailto:${AgentData.Email}`}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm text-center mt-4 py-3 rounded shadow-md flex justify-center gap-2 cursor-pointer"
            >
              <MailIcon size={16} /> <span>Mail Available Agent</span>
            </div>
          )}
        </div>
      </span>
    </section>

    {/* Feature Cards */}
    <section className="grid lg:grid-cols-2 gap-5 px-5 bg-pink-50 pb-20">
      <div className="shadow-md bg-white border-l-4 border-pink-500 p-5 rounded-lg">
        <h1 className="text-sm lg:text-lg font-bold text-pink-700 flex gap-2">
          <PackageCheck size={20} /> <span>Clearance</span>
        </h1>
        <p className="text-gray-600 text-xs lg:text-sm mt-2">
          We provide swift payment methods and fast clearance processing.
        </p>
      </div>

      <div className="shadow-md bg-white border-l-4 border-pink-500 p-5 rounded-lg">
        <h1 className="text-sm lg:text-lg font-bold text-pink-700 flex gap-2">
          <Truck size={20} /> <span>Delivery to Doorstep</span>
        </h1>
        <p className="text-gray-600 text-xs lg:text-sm mt-2">
          We guarantee 24-hour delivery max time. Our agents are always available to help.
        </p>
      </div>

      <div className="shadow-md bg-white border-l-4 border-pink-500 p-5 rounded-lg hidden lg:block">
        <h1 className="text-sm lg:text-lg font-bold text-pink-700 flex gap-2">
          <Truck size={20} /> <span>Quick Response</span>
        </h1>
        <p className="text-gray-600 text-xs lg:text-sm mt-2">
          We respond quickly, and our agents are always available to guide you.
        </p>
      </div>

      <div className="shadow-md bg-white border-l-4 border-pink-500 p-5 rounded-lg hidden lg:block">
        <h1 className="text-sm lg:text-lg font-bold text-pink-700 flex gap-2">
          <Truck size={20} /> <span>World Wide Service</span>
        </h1>
        <p className="text-gray-600 text-xs lg:text-sm mt-2">
          Our service is available worldwide with real-time agent support.
        </p>
      </div>
    </section>

    <Footer />
  </div>
</>

    )
}

export function HeaderPage(){
    const navigate = useNavigate()
   
   const handleNav = (path) => {
    navigate(path);
    window.location.reload()
   }

    

    const [showDashBoard, setshowDashBoard] = useState(false);
    const [flipMenu, setFlipMenu] = useState("text-white");
    const [movetodirector, setMovetodirector] = useState("")


    const showDash = () => {
        setshowDashBoard(!showDashBoard);
       if(!showDashBoard){
        setFlipMenu("rotate-90 text-white");
        
       }
       else{
        setFlipMenu("rotate-0 text-white");
       
       }
    }

    const openDirector = () =>{
        window.scrollBy
        
        navigate("/", "#director_Page");
        //navigate("#director_Page")
        

    }
 



    return(
      <>
       <section className=' fixed top-0 w-full z-50 lg:hidden'>

                <div className='flex bg-pink-600 ' >
                  <div className={` py-5 px-5  ${flipMenu}`} onClick={showDash} >  <MenuIcon/></div>
                    <div className='grid items-center w-full ' >
                    






   <div className="flex items-center justify-center bg-pink-600  " onClick={() => handleNav('/')} >
      <div className="">
        {/* SVG version of "2GO" with stylized G */}
        <svg
          width="200"
          height="35"
          viewBox="240 0 100 100"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto "
        >
          <text x="0" y="70" fontSize="70" fontFamily="Arial Black">2</text>
          <text x="60" y="70" fontSize="70" fontFamily="Arial Black">C</text>
          <rect x="92" y="42" width="30" height="12" fill="white" />
          <rect x="110" y="50" width="12" height="30" />
          <text x="140" y="70" fontSize="70" fontFamily="Arial Black">O</text>
        </svg>
        <p className='text-[10px] text-white -mt-3 ' >We Serve You </p>

      </div>
    </div>




                    </div>
                   <div className='flex items-center gap-3 px-5' > 
                   <span onClick={() => handleNav("../TrackPage")}><Truck color='white' className='h-5 w-5' /></span>
                   <span onClick={() => handleNav("../CustomerService")}><Phone color='white' className='h-5 w-5' /></span>

              
                   </div>
                </div>


                
               <AnimatePresence>
               {showDashBoard && ( 
                <motion.div 
                initial={{ opacity: 0, x: -100 }}
                 animate={{ opacity: 1, x: 0, }}
                  exit={{ opacity: 0, x: -100 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                >

                
                  <div className='flex'>

<div className="bg-gray-50 h-screen w-full py-5 px-4 shadow-md border-r-4 border-pink-600">

  <p className="text-gray-800 mb-5 text-center uppercase font-extrabold text-xl tracking-wide">
    Dashboard
  </p>

  {[ 
    { label: 'Home', icon: HomeIcon, path: '/' },
    { label: 'Track Package', icon: TruckIcon, path: '../TrackPage' },
    { label: 'Blog', icon: NewspaperIcon, path: '../Blog' },
    { label: 'About Us', icon: QuoteIcon, path: '../About_Us' },
    { label: 'Contact Us', icon: PhoneCallIcon, path: '../CustomerService' },
    { label: 'For Business', icon: BookCheck, path: '../CreateShipment' },
    {label:"Payment", icon: Wallet, path:'../PaymentPage'}
  ].map(({ label, icon: Icon, path }) => (
    <div
      key={label}
      onClick={() => handleNav(path)}
      className="flex items-center gap-4 px-5 py-3 mb-3 rounded-lg cursor-pointer
                 text-pink-600 font-semibold text-lg tracking-wide
                 border border-transparent hover:border-pink-600
                 hover:bg-pink-100
                 shadow-sm hover:shadow-pink-300
                 transition-all duration-300
                 relative"
    >
      <div className="text-pink-600">
        <Icon size={24} />
      </div>

      <p className="select-none">{label}</p>

      {/* Accent bar on left on hover */}
      <span className="absolute left-0 top-0 h-full w-1 bg-transparent rounded-l-lg
                       hover:bg-pink-600 transition-colors duration-300"></span>
    </div>
  ))}

</div>



                    <div className='w-2/5' onClick={() => showDash()}></div>
                  </div>




               </motion.div>)}
               </AnimatePresence>
      
              </section>




              <section className="bg-[#ec147c]  lg:flex w-full  fixed top-0 z-70 hidden justify-between ">
       

       <div>
        


   <div className="flex items-center justify-center bg-pink-600  ">
      <div className="text-center">
        {/* SVG version of "2GO" with stylized G */}
        <svg
          width="200"
          height="60"
          viewBox="10 0 100 100"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <text x="0" y="70" fontSize="70" fontFamily="Arial Black">2</text>
          <text x="60" y="70" fontSize="70" fontFamily="Arial Black">C</text>
          <rect x="92" y="42" width="30" height="12" fill="white" />
          <rect x="110" y="50" width="12" height="30" />
          <text x="140" y="70" fontSize="70" fontFamily="Arial Black">O</text>
        </svg>
        <p className='text-[10px] text-white -mt-4 mb-2' >We Serve You </p>

      </div>
    </div>



       </div>
   
        
        <div className='grid grid-cols-5 items-center gap-10 px-5 text-sm  '> 
      <Link to="/" >  <div className='flex gap-2'> <span><HomeIcon color='white' size={18}/></span>  <h1 className='text-white' >Home</h1> </div></Link>
      <Link to="../CustomerService">   <div className='flex gap-2'> <span><Phone color='white' size={18}/></span>  <h1 className='text-white '>Contact us</h1>   </div> </Link>
      
      <Link to="../Blog" > <div className='flex gap-2'> <span><Newspaper color='white' size={18}/></span>       <h1 className='text-white '>Blog</h1> </div>  </Link>  
       <Link to="../About_Us" > <div className='flex gap-2'> <span><User color='white' size={18}/></span>            <h1 className='text-white  '>About us</h1></div>  </Link> 
   
        </div>
         
         </section>











      </>
    )
  }

export function Blog() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("Package.json").then((res) => res.json()).then((data) => setBlogData(data))
    })

    return (
        <>
      <section
  id="sandwitch"
  className="scroll-mt-30 border border-transparent bg-gray-50 min-h-screen"
>
  <HeaderPage />

  <img
    src={asusas}
    alt="map iMage"
    className="mt-20 lg:mt-20 mx-auto max-w-full bg-gray-50"
  />

  <div className="text-center my-10 px-5">
    <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-pink-600 libre-baskerville-regular-italic">
      Our Latest Insights
    </h1>
    <p className="text-gray-600 text-lg max-w-xl mx-auto">
      Explore expert articles, industry updates, and valuable tips to stay informed and inspired.
    </p>
  </div>

  <section className="gap-5 py-5 px-5 mx-auto flex  lg:grid lg:grid-cols-2 2xl:grid-cols-5 overflow-x-auto">
    {blogData.map((data, index) => (
      <Blog_Card key={index} blog={data} />
    ))}
  </section>

  <Footer />
</section>

        </>
    )
}

export function Blog_Card({blog}) {
   
     const navigate = useNavigate()

    const handleNav = (path) => {
      navigate(path);
      window.location.reload();
    }
  

    return(
        <>
   <section className="py-5">
  <div className="rounded-2xl shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out w-70 lg:w-90 mx-auto h-125 border border-gray-200">
    <img
      src={blog.image}
      alt={blog.title}
      className="h-50 w-full rounded-t-2xl object-cover"
    />
    <div className="flex justify-between p-4 items-center text-xs text-gray-500">
      <span>By {blog.author}</span>
      <span>{new Date(blog.date).toLocaleDateString()}</span>
    </div>
    <div className="px-5 pb-5">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        {blog.title}
      </h2>
      <p className="text-sm text-gray-600">{blog.summary}</p>
      <div
        className="inline-block mt-4 text-pink-600 hover:text-pink-700 font-semibold text-sm cursor-pointer transition duration-200"
        onClick={() => handleNav(blog.slug)}
      >
        Read More →
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export function About_Us() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return(
        <>
        <section className='h-screen' >
        <HeaderPage/>
            <section className='text-sm lg:text-lg  '>
            <section className={`max-w-4xl mx-auto px-5 pb-20 pt-10 text-gray-800 leading-relaxed bg-gray-50 `}>
          
  <h1 className="text-3xl lg:py-10 lg:text-4xl font-medium mb-4 text-gray-900 mt-15 libre-baskerville-regular-italic">
    <span className='font-bold italic ' >2GO</span>: A Global Leader in Logistics and Delivery
  </h1>


  <div className='my-10 shadow-2xl rounded-sm '>
    <img src={CoronaImage} alt="cruise Image" className='h-40 lg:h-70 w-full'  />
  </div>
      
  <p>2GO is a multinational logistics brand, founded in the United States and now headquartered in Bonn, Germany. With a reputation for excellence and efficiency, 2GO has emerged as one of the world’s foremost logistics companies, delivering over 1.7 billion parcels annually and serving millions of customers across the globe. This article explores the expansive reach, history, operations, and future of 2GO, offering an in-depth understanding of what makes the company a cornerstone of modern global delivery systems.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">1. Origins and Evolution</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Founded in the early 1980s in the United States, 2GO started as a small courier company with a vision of making international shipping seamless and reliable. As global commerce grew in the late 20th century, so did 2GO’s ambitions. By the mid-1990s, the company had expanded to major cities in Europe and Asia, establishing itself as a key player in cross-border logistics. The decision to move its headquarters to Bonn, Germany, reflected its commitment to serving European markets and optimizing its presence in the heart of the EU and the World.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">2. Global Reach and Infrastructure</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >2GO operates in over 220 countries and territories, with more than 600 logistics hubs worldwide. These facilities include sorting centers, distribution warehouses, regional depots, and last-mile delivery stations. With a fleet of over 40,000 vehicles and partnerships with local couriers in remote regions, 2GO ensures packages are delivered efficiently, even in the most hard-to-reach areas.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">3. Technology and Tracking</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >One of 2GO’s core strengths is its investment in technology. The company offers real-time tracking for all parcels, allowing customers to follow their package from dispatch to delivery. Its systems integrate GPS, barcode scanning, RFID, and cloud-based logistics data, enabling transparency and operational efficiency. The 2GO tracking app is a customer favorite, offering updates, delivery customization, and chat support all in one place.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">4. Services Offered</h2>
  <ul className="list-disc lg:px-12 px-6 text-[12px] lg:text-[14px]">
    <li>Standard and Express Parcel Delivery</li>
    <li>International Freight Forwarding</li>
    <li>Customs Brokerage and Documentation</li>
    <li>Business Fulfillment and Warehousing Solutions</li>
    <li>Subscription-Based eCommerce Delivery Services</li>
  </ul>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20  libre-baskerville-regular-italic">5. Commitment to Sustainability</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Environmental sustainability is a key part of 2GO’s mission. The company has introduced electric delivery vans, invested in carbon-neutral shipping options, and implemented green logistics strategies across its supply chain. Packaging materials are recyclable, and their newer facilities meet LEED standards for energy efficiency.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">6. Customer Experience</h2>
  <img src={Happyrating} alt="happy rating Image"  className='my-5 shadow-xl border-l-4 border-blue-500 rounded-sm' />
  <p className='text-[12px] lg:text-[14px] mt-1' >2GO courier places a premium on customer satisfaction. It offers flexible delivery slots, secure drop-off options, and 24/7 customer service. In high-demand regions, 2GO has even piloted drone and autonomous robot deliveries to reduce congestion and improve delivery speed.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">7. Competitive Position</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >In a market crowded with giants like FedEx, DHL, UPS, and regional players, 2GO courier stands out for its balance of reliability, pricing, and technology. By focusing on efficiency and customer satisfaction, 2GO has cultivated strong loyalty among businesses and individual customers alike.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">8. Challenges and Resilience</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >The logistics industry faces constant challenges: global pandemics, trade regulations, political instability, and rising costs. 2GO’s decentralized model and agile operations allow it to adapt quickly. During the COVID-19 pandemic, the company rapidly scaled up contactless delivery options and ensured uninterrupted service globally.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">9. Innovation and the Future</h2>
  <img src={InnovationImage} alt="iconImage" className='my-5 shadow-xl mx-auto lg:h-100 rounded-sm' />
  <p className='text-[12px] lg:text-[14px] mt-1' >Looking ahead, 2GO plans to expand its autonomous vehicle fleet, invest further in AI-based logistics planning, and explore new markets in Sub-Saharan Africa and Southeast Asia. Blockchain technology is also on the roadmap for securing cross-border transactions and improving parcel traceability.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 uppercase text-center">Conclusion</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >2GO’s journey from a small U.S. courier to a global logistics powerhouse is a testament to innovation, resilience, and strategic vision. With its strong foothold in Europe and a growing global presence, 2GO continues to redefine delivery standards, making the world smaller one package at a time.</p>
</section>

            </section>
            <Footer/>
        </section>
        
        </>
    )
}
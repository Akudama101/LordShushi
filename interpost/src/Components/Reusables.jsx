
import xpa from '/images/woman-box.jpg'
import xpc from '/images/parcel-shipping-.jpg'
import xpd from '/images/plane.svg'
import xpe from '/images/fast-bus.svg'

import xpg from "/images/Warehouse.jpg"
import xph from "/images/parcel-delivery.jpg"
import xpi from "/images/New-innovations.jpg"
import xpj from "/images/seaship.jpg"
import ibm from "/images/cheerful-woman-with-box.jpg"
import ibn from '/images/360_F_603227348_Hpid47cSby44NH5CEYXu1Io2F94utpu5.jpg'
import { Newspaper, Headset, User, Phone, Contact, Mail, ChevronUp, PackageCheck, Truck } from 'lucide-react'
import cb1 from "/images/what-is-a-courier-driver-HERO.webp"
import cb2 from "/images/driver.webp"
import cb3 from "/images/lady driver.jpeg"
import cb4 from "/images/Delivery-Driver5.jpeg"
import cb5 from "/images/delivery man.jpg"
import { useState, useEffect } from 'react'
import bb1 from "/images/Cathay-Pacific.jpg"
import bb2 from "/images/Airbus-Wing-.webp"
import bb3 from "/images/plane6.webp"
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from './MainHomePage'
import directorPic from "/images/cfpb_s-bessent-close-up_2025-02.original.jpg"
import agentPic from "/images/2go_logo_main.png"

import { MenuIcon, HomeIcon, PhoneCallIcon , UserIcon, NewspaperIcon, QuoteIcon, BookCheck, TruckIcon, X , PhoneIcon, MailIcon} from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'
import asusas from '/images/World_blank_map_countries.png'

import Select from "react-select"
import TaxAgentImg from "/images/Tax-Agents.jpg"
import ManagerImg from "/images/cfpb_s-bessent-close-up_2025-02.original.jpg"
import CoronaImage from "/images/cruise_coronavirus.1200x800.jpg"
import Happyrating from "/images/happyRating.png"
import InnovationImage from "/images/logo-fpi.jpg"







const images = [ xpa, ibn, ibm]

const images2 = [cb1, cb2, cb3, cb4, cb5]

const images3 = [bb1, bb2, bb3]
//bg-[#41134E]

export function Section1() {
    return(
        <>
         <div  ><HeaderPage/></div>
     


        <section className='bg-[url("/images/unsplash-image-oCsQLKENz34.jpg")] lg:bg-[url("/images/types-of-shipping-containers6527d77f86bfc.jpg")] h-screen bg-cover bg-center grid items-center bg-no-repeat bg-fixed '>
         
        
<span>
    <div className='rounded-sm  bg-slate-900 w-2/3 space-y-20 p-5 lg:hidden ml-5 shadow-lg' >
    <p className='font-bold text-white text-2xl ' > <span className='text-blue-500 ' >2-GO</span> Delivery Service is here to serve you.</p>
    <div className='bg-blue-500 mx-auto w-fit  px-5 py-2 text-white shadow-lg' ><Link to="../TrackPage" > <span className='flex gap-2' ><Truck/><p>Track Package</p></span></Link> </div>
    </div>


    <div className='hidden lg:block w-100  mx-20 bg-slate-900 rounded-sm py-10 shadow-2xl' >
    <p className='font-bold text-white text-5xl px-10' > <span className='text-blue-500 ' >2GO</span> Delivery is here to serve you.</p>

       <Link to="../TrackPage"> <div className='bg-blue-500 mx-auto w-fit  px-5 py-2 text-white shadow-lg flex gap-2 mt-30'  > <Truck/> <p>Track Package</p></div></Link>


    </div>
</span>
       
          


         
        
        </section>
        </>
    )
}

export function Section2() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 4000);
        return () => clearInterval(interval)
    }, [])

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
               <Link to="../CustomerService" >  <div className='py-5  w-fit  px-10 mx-auto my-15 text-white  bg-pink-900 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg '><p>Explore More Options</p></div></Link>
            </div>
        </section>
        </>
    )
}

export function Section3() {

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
    




 
    return(
        <>
        <section className='grid lg:grid-cols-2 px-5'>

            <div className=' lg:w-4/5 lg:ml-10   2xl:w-5/8 2xl:ml-40 py-5 mb-10 text-slate-800'>
                <h1 className='text-3xl font-bold 2xl:text-6xl 2xl:mt-5'>Document and Parcel Shipping</h1>
                <h1 className='text-xl  my-5 2xl:text-4xl'>For All Shippers</h1>
                <hr className='bg-black h-1' />
                <p className='text-lg my-5  2xl:text-2xl'>Learn about Interpost Express - the undisputed global leader in international experss shipping</p>
               
                <div  className=' py-5 space-y-10 border-l-4 p-4 shadow-xl border-blue-500 bg-white mb-10 rounded-sm' >
                    <h1 className='font-bold text-center text-2xl uppercase underline mb-10' > Services</h1>
                    <div className='space-y-5' >
                       

                       <div className='grid grid-cols-12' >
                       <div className='col-span-11' ><p>Invoice Clearity</p>   </div>
                       <p className={`${invoiceClear === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showInvoiceClear} ><ChevronUp/> </p> 
                        <span className={`${invoiceClear} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} > We believe in full transparency. Every invoice you receive is clear, detailed, and easy to understand—no hidden fees or confusing charges. You’ll always know exactly what you’re paying for, with a complete breakdown of services and costs.  </span>
                        
                       </div>



                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >100% Assurance safety Package</p> 
                            <p className={`${assurancePackage === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showAssurancePackage} ><ChevronUp/></p> 
                        <span className={`${assurancePackage} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} >Your package’s safety is our top priority. We use secure packaging, trusted handling procedures, and reliable tracking systems to ensure your item arrives in perfect condition. With our 100% Assurance Safety Package, you can ship with total confidence.</span>
                        </div>
                        
                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >24H delivery Guarantee</p> 
                            <p className={`${deliveryGuarantee === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showDeliveryGuarantee} ><ChevronUp/></p>
                        <span className={`${deliveryGuarantee} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} >We don’t just promise fast delivery—we guarantee it. Our 24-Hour Delivery Guarantee means your package will be delivered within 24 hours, or you get your money back. It’s our commitment to speed, reliability, and customer satisfaction.</span>
                        </div>


                        <div className='grid grid-cols-12' >
                            <p className="col-span-11" >Payment Before Delivery</p> 
                            <p className={`${PaymentDelivery === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showPaymentDelivery} ><ChevronUp/> </p>
                        <span className={`${PaymentDelivery} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} >For efficiency and mutual trust, we operate on a Payment Before Delivery policy. This ensures smooth processing, secure handling, and timely dispatch of your items. Once payment is confirmed, we take care of the rest—fast and professionally.</span>
                        </div>

                    </div>
                </div>

                <Link to="../CustomerService" >  <div className='py-5  w-fit  px-5 mx-auto my-15 text-white  bg-blue-500 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg flex gap-5 '>  <PhoneIcon />  <p>Contact Us Now</p> </div></Link>
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
                <h1 className='text-3xl px-4 font-bold mt-3 2xl:text-6xl 2xl:pr-30'>Retailer or Volume Shipping</h1>
                <h1 className='text-2xl ml-4 my-3 2xl:text-4xl 2xl:my-10'>Business Only</h1>
                <hr className='bg-blue-500 border-blue-500 h-1 my-5' />
                <p className='text-lg ml-4 2xl:text-2xl 2xl:pr-20 2xl:mt-15'>We have two divisions the offer reliable business shipping for e-commerce, supplier or manufacturing companies</p>

                <div className='flex h-30 text-black border-l-4 border-blue-500 shadow-xl bg-white my-5 lg:my-10 2xl:mt-17'>
                    <img src={xpd} alt="plane" className='h-20 w-27 mt-6 ml-2'/>
                   <div className='flex ml-2'>
                   <div className=' h-10 my-10 w-5 bg-blue-500'></div>
                   <p className='text-sm lg:text-lg grid items-center ml-5 mt-1'>Fast, door-to-door, courier delivered. Time definite delivery to 220+ countries.</p>
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
            <p className='text-xl px-3 ml-1 2xl:text-3xl 2xl:mt-10'>Discover Shipping and logistics Service Options from Interpost Global Forwarding</p>
            <div className='h-50 2xl:h-65 bg-[#DBD7D7] my-8 border border-[#DBD7D7]'>
                <p className='font-bold text-xl mt-5 ml-5 2xl:text-3xl'>Services Available</p>
                <div className='grid grid-cols-2 mt-5 gap-8 ml-5 2xl:text-2xl'>
                    <p>Air Freight</p>
                    <p>Ocean Freight</p>
                    <p>Road Freight</p>
                    <p>Rail Freight</p>
                </div>
            </div>
            <button className='h-15 bg-red-600 text-white text-xl w-4/5 ml-10 rounded-2xl mb-8 lg:mt-10 2xl:text-2xl lg:font-bold'>Explore Interpost Global Forwarding</button>
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
   
    const [hideClearing, setHideClearing] = useState("hidden") ;
    const [hideSameDayDelivery, setHideSameDayDelivery] = useState("hidden");
    const [hide24Hinternationa, setHide24International] = useState("hidden");
    const [DoortoDoor, setdoorToDoor] = useState("hidden")
    const showClearing = () => {  if(hideClearing === "hidden"){ setHideClearing("block") ; setHideSameDayDelivery("hidden"); setHide24International("hidden") ;   setdoorToDoor("hidden") } else { setHideClearing("hidden") } };
    const ShowSameDayClearing = () => { if(hideSameDayDelivery === "hidden"){setHideSameDayDelivery("block"); setHideClearing("hidden"); setHide24International("hidden") ;   setdoorToDoor("hidden") } else { setHideSameDayDelivery("hidden")  } };
    const showInternational = () => {  if(hide24Hinternationa === "hidden"){   setHide24International("block");   setHideClearing("hidden");  setHideSameDayDelivery("hidden") ;   setdoorToDoor("hidden") } else { setHide24International("hidden")  } };
    const ShowDoorToDoor = () => { if(DoortoDoor === "hidden"){   setdoorToDoor("block");   setHideClearing("hidden"); setHideSameDayDelivery("hidden");  setHide24International("hidden");   } else {  setdoorToDoor("hidden")  }   }






    return (
        <>
        <section className='lg:grid-cols-2 lg:h-140 grid 2xl:h-200 2xl:px-15 text-slate-800'>
           
            <div className='border border-white h-full 2xl:w-4/5 2xl:ml-20 2xl:shadow 2xl:shadow-black 2xl:rounded-2xl px-5'>
                <h1 className='text-3xl  font-bold mt-5 lg:mt-10 2xl:text-6xl'>Enterprise Logistics Services</h1>
                <h1 className=' text-2xl my-3 2xl:text-4xl 2xl:my-8'>Business Only</h1>

                <hr className='bg-blue-500 border-blue-500 h-1' />
                
                <p className='text-lg my-4 2xl:text-2xl 2xl:mt-10'>Find out how Interpost supply chain can revolutionize your business as 3PL Provider.</p>


                <div className=' py-5 space-y-10 border-l-4 p-4 shadow-xl border-blue-500 bg-white mb-5'>
                    <h1 className='text-xl font-bold 2xl:text-3xl uppercase text-center underline'>Services</h1>
                    <div className='space-y-5'>

                     <div className='grid grid-cols-12' >  
                        <h1 className='col-span-11'>Quick Clearing</h1> 
                        <p className={`${hideClearing === "hidden"? "": "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showClearing}><ChevronUp/> </p>   
                        <span  className={`${hideClearing} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} > We offer comprehensive customs clearing services to make international shipping hassle-free. Our team takes care of all the necessary paperwork, duties, and compliance checks to ensure your goods move smoothly through ports and borders—saving you time and avoiding unnecessary delays or penalties.</span>
                     </div> 


                     <div className='grid grid-cols-12' >
                        <h1 className='2xl:text-3xl col-span-11'>Same Day Delivery</h1>
                         <p className={`${hideSameDayDelivery === "hidden" ? "" : "rotate-180" } bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={ShowSameDayClearing} ><ChevronUp/> </p> 
                     <span className={` ${hideSameDayDelivery} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2 `} > Need it there today? Our Same Day Delivery service guarantees that your package reaches its destination within hours. Ideal for urgent business documents, perishable items, or last-minute gifts, we prioritize speed, reliability, and secure handling—so your delivery gets there exactly when it needs to. </span>   
                     </div>




                     <div className='grid grid-cols-12' >
                         <h1 className='2xl:text-3xl col-span-11'>24H international Delivery</h1> 
                         <p className={`${hide24Hinternationa === "hidden" ? "" : "rotate-180"}  bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full`} onClick={showInternational} ><ChevronUp/> </p>
                     <span className={`px-5 ${hide24Hinternationa} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} >Reach across borders in record time. With our 24-Hour International Delivery, we ensure that your shipment is picked up, processed, and delivered to most major global cities within just one day. Powered by trusted global logistics partners, we make urgent international shipping fast, safe, and efficient. </span> 

                     </div>  


                     <div className='grid grid-cols-12' > 
                        <h1 className='2xl:text-3xl col-span-11'>Door to Door Delivery</h1>
                         <p className={`${DoortoDoor === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow-inner shadow-blue-500 border-none rounded-full `} onClick={ShowDoorToDoor}><ChevronUp/></p>  
                    <span className={`px-5 ${DoortoDoor} bg-white p-5 col-span-12 text-xs shadow shadow-blue-500 border-none rounded-xl mt-2`} > From sender to recipient, we manage the entire journey. Our Door to Door Delivery service includes pickup from your location and delivery right to the recipient’s doorstep—no drop-off points or extra effort required. It's a convenient, full-service option designed for individuals and businesses alike. </span>
                    </div>  
                    </div>
                </div>


                <Link to="../CustomerService" >  <div className='py-5  w-fit  px-5 mx-auto my-15 text-white  bg-blue-500 font-bold 2xl:text-3xl  lg:text-xl lg:mt-30 rounded-sm shadow-lg flex gap-5 '>  <PhoneIcon />  <p>Contact Us Now</p> </div></Link>
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
         <div className='mx-auto shadow-black shadow rounded-2xl lg:h-130'>
            <img src={xph} alt="Parcel delivery" className='h-70 rounded-t-2xl w-full'/>
            <h1 className='text-2xl font-bold my-2 px-3 2xl:text-4xl 2xl:my-5'>Sustainability</h1>
            <p className='text-sm mb-10 px-3 2xl:text-2xl'>Sustainable business begins with sustainable supply chains. Find out what we have to offer, Why we're committed to sustainability, and how our industry is helping deliver an even better world</p>
         </div>
         
         <div className='mx-auto shadow shadow-black  rounded-2xl lg:h-130'>
            <img src={xpi} alt="Parcel delivery" className='h-70 rounded-t-2xl w-full'/>
            <h1 className='text-2xl font-bold my-5 px-3 2xl:text-4xl 2xl:my-5'>Innovation</h1>
            <p className='text-sm mb-10 px-3 2xl:text-2xl'>Discover the future of logistics through customer-centric innovation, industry-leading trend research and next generation solutions</p>
         </div>
         
         <div className='mx-auto shadow shadow-black rounded-2xl lg:h-130'>
            <img src={xpj} alt="Parcel delivery" className='h-70 rounded-t-2xl w-full'/>
            <h1 className='text-2xl font-bold my-5 px-3 2xl:text-4xl 2xl:my-5'>Trade Atlas 2025</h1>
            <p className='text-sm mb-10 px-3 2xl:text-2xl'>Global trade recovered in 2024 and is forecast to grow faster over the next five years the during the preceding decade.</p>
         </div>
         
        </section>
        </>
    )
}

export function Section8() {
    return(
        <>
    
        <section className='' id="director_Page">
            <hr className='h-1 w-4/5 mx-auto bg-black mb-10 ' />
            <div className='px-5 lg:w-1/2 2xl:w-1/3 mx-auto' >
                <div className='shadow-lg' >
                <img src={directorPic} alt="director Picture" />
                <div className='bg-gray-700 pt-5 pb-20 px-5 space-y-2 text-white shadow-lg' >
                    <h1 className='font-bold' >Interpost Director</h1>
                    <p className='text-xs' >Mr Cam Odie</p>
                 
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
        number:"+2332015559541",
        admin:"English, twi & French",

    };


    const agentFromotherCuntry = {
        imageID: ManagerImg,
        name:"Daniel Lark",
        country:"USA & Canada",
        Email:"customerService@gmail.com",
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
            setHideFilter("hidden")
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
        <HeaderPage/>

<div className='relative h-screen '>
    

    
             
         
            
             
    
             <section className='py-10 lg:py-20 bg-slate-100 '>
           
                <h1 className='text-2xl uppercase font-bold text-red-600 ml-4 mt-10 text-center lg:text-5xl 2xl:text-8xl'>Customer Service</h1>
                
                <p className='text-sm lg:text-xl my-4 px-5 text-center mx-auto lg:w-150'>Talk to Our Agent Representative Now!! , They are Available 24/7 for you the customers convinience. responce is usually immidiately or within the hour. </p>
    
    
    
    
    <div className={`px-10 space-y-5 bg-white py-5 ${hideFilter} text-slate-800 w-11/12 lg:w-1/2 mx-auto shadow-2xl shadow-gray-300 rounded-xl mt-10`} >
    
        <h2 className='font-bold uppercase text-center' >Agent Search Filter</h2>
        



        <div>
             <p className='my-1'>Select Country  of Service</p>
            <Select options={countries} onChange={handleChange1} value={selectValue1 } isSearchable={false} placeholder="Choose Country of Service"  className='outline-none text-black'/>
        </div>
    


    <div>
    <p className='my-1'>Purpose of Contact</p>
    <Select onChange={handleChange2} value={selectValue2} options={PurposeOfContact} isSearchable={false}  className='outline-none text-black'/>

    </div>
    
    
    
                    
    
                    <div className='bg-red-700 w-fit px-5 text-white  py-2 uppercase text-xs shadow shadow-gray-400'  onClick={GetAgent} >Confirm</div>
    
    </div>
    
    
    
    
    
    
    
    
         <span className={`${showDetails} `} >
         <div className='px-7 mt-10' >
    
    
    <div className='lg:w-150 mx-auto' >
      <div className='outline-10 rounded outline-blue-500' > <img src={AgentData.imageID} alt="icon" /></div>
      </div>
    
    </div>
       <div className='px-5 lg:w-150 mx-auto ' >
           <div className='shadow shadow-blue-500 my-10 rounded-sm p-5 text-xs bg-white space-y-5'>
            <p className='text-lg text-center ' >Agent Details</p>
               <span className='flex  justify-between' ><h1 className='font-medium uppercase '>Agent Name:</h1> <p>{AgentData.name}</p></span>
               <span className='flex  justify-between' ><h1 className='font-medium uppercase  '>Country of Operation:</h1> <p>{AgentData.country}</p></span>
               <span className={`flex justify-between ${AgentData.number === "" ? "hidden" : "block "}   shadow shadow-blue-500 p-2`} onClick={() => {Copytext("numberAgent")}} ><h1 className='font-bold uppercase '>Contact:</h1> <p id='numberAgent' >{AgentData.number}</p></span>
               <span className={`flex justify-between  ${AgentData.Email === "" ? "hidden" : "block"} shadow shadow-blue-500 p-2`} onClick={() => {Copytext("EmailAgent")}} > <h1 className='font-medium uppercase'>Email: </h1> <p id="EmailAgent" >{AgentData.Email}</p> </span>
               <span className='flex  justify-between' ><h1 className='font-medium uppercase  '>Languages:</h1> <p>{AgentData.admin}</p></span>
               <span className='flex  justify-between' ><h1 className='font-medium uppercase  '>Working Hours</h1> <p>8:am - 8pm GMT </p></span>
    
           </div>
          <span className={`${AgentData.number === "" ? "hidden" : "block"}`}   onClick={() => {window.location.href = `tel:${AgentData.number}`}} > <div className={`text-center px-10 py-2 mx-auto bg-red-700 text-sm text-white flex gap-2 justify-center lg:py-5`}> <Phone size={15} className='mt-0.5'/> <p>Talk To Available Agent Now</p> </div></span>
           <span className={`${AgentData.Email === "" ? "hidden" : "block"}`} onClick={() => window.location.href = `mailto:${AgentData.Email}`} ><div className=' text-center px-10 py-2 mx-auto bg-red-700 text-sm text-white flex gap-2 justify-center lg:py-5'> <MailIcon size={15} className='mt-0.5'/> <p>Mail Available Agent Now</p> </div></span>
       </div>
    
    
    
    
         </span>
    
    
    
    
    
                
             </section>
             
             <section className=' grid lg:grid-cols-2  mx-auto lg:gap-5 gap-5 bg-slate-100 px-5  ' >

            

             <div className='shadow border-blue-500  bg-white border-l-4  shadow-blue-500 p-5 h-30 '>
                <h1 className=' text-sm lg:text-lg font-bold text-red-700 flex gap-2'><PackageCheck size={20} className='lg:mt-1' /> <p>Clearance</p></h1>
                <p className='my-2 text-xs lg:text-sm'>We Privide Swift Payment Methods and Fast Processing of Clearance Payment</p>
              </div>
    
              <div className=' shadow border-blue-500  bg-white border-l-4  shadow-blue-500 p-5 h-30 mb-20 lg:mb-0'>
                <h1 className=' text-sm lg:text-lg font-bold text-red-700 flex gap-2 '> <Truck size={20} className='lg:mt-1' /> Delivery to Door-Step</h1>
                <p className=' my-2 text-xs lg:text-sm'>We Guarantee 24 hours Max time for Delivery , and Put Agent are always Available to Walk you through it</p>
              </div>
    
    
              <div className=' shadow border-blue-500  bg-white border-l-4  shadow-blue-500 p-5 h-30 hidden lg:block mb-20'>
                <h1 className=' text-sm lg:text-lg font-bold text-red-700 flex gap-2 '> <Truck size={20} className='lg:mt-1' /> Quick Response</h1>
                <p className=' my-2 text-xs lg:text-sm'>We are Quick to respond , and Put Agent are always Available to Walk you through it</p>
              </div>
    
    
              <div className=' shadow border-blue-500  bg-white border-l-4  shadow-blue-500 p-5 h-30  hidden lg:block mb-20'>
                <h1 className=' text-sm lg:text-lg font-bold text-red-700 flex gap-2 '> <Truck size={20} className='lg:mt-1' /> World Wide Service</h1>
                <p className=' my-2 text-xs lg:text-sm'>Our Service works world wide , and Put Agent are always Available to Walk you through it</p>
              </div>
    
        
    
    
    
    
    
    
    
              
             </section>
    

        

      <Footer/>
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

                <div className='flex bg-slate-900 ' >
                  <div className={` py-5 px-5  ${flipMenu}`} onClick={showDash} >  <MenuIcon/></div>
                    <div className='grid items-center w-full ' >
                    <img src={agentPic} alt="icon" className='h-12 ' onClick={() => handleNav('/')}/>
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
                    <div className={`bg-slate-900 h-screen w-3/5 py-10 shadow shadow-black space-y-5 `} >
                    <p className='text-white -mt-10 text-center uppercase' >DashBoard</p>



                    <div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto' onClick={() => handleNav('/')}>
    <HomeIcon size={20} className='mt-1 text-pink-500'/>
    
    <p>Home</p>
  
</div>




<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto' onClick={() => handleNav('../CustomerService')}>
    <PhoneCallIcon size={20} className='mt-1 text-pink-500'/>
    
    <p>Contact us</p>

</div>


<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto' onClick={() => handleNav('../Blog')}>
    <NewspaperIcon size={20} className='mt-1 text-pink-500' />
<p>Blog</p>
</div>


<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto'   onClick={() => handleNav('../About_Us')} >
    <QuoteIcon size={20} className='mt-1 text-pink-500'/>
    <p>About Us</p>
</div>

<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto' >
    <UserIcon size={20} className='mt-1 text-pink-500' />
    <p onClick={openDirector} > Manager</p>
</div>



<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto' onClick={() => handleNav('../CreateShipment')}>
<BookCheck size={20} className='mt-1 text-pink-500'/>
    <p>Create Shipment</p>
</div>



<div className='bg-slate-700 text-white p-2 flex rounded-xl  gap-5 shadow shadow-slate-500 w-11/12  mx-auto mt-5' onClick={() => handleNav('../TrackPage')}> 
    <TruckIcon size={20} className='mt-1 text-pink-500' />
    <p>Track Package</p>
    
</div>



                    </div>
                    <div className='w-2/5' onClick={() => showDash()}></div>
                  </div>




               </motion.div>)}
               </AnimatePresence>
      
              </section>




              <section className="bg-slate-900  lg:flex w-full  fixed top-0 z-70 hidden justify-between ">
       

       <div  >
       <img src={agentPic} alt="logo"  className='h-20 mx-50'/>
       </div>
   
        
        <div className='grid grid-cols-5 items-center px-5'> 
      <Link to="/" >  <div className='flex gap-2'> <span><HomeIcon color='white' size={25}/></span>  <h1 className='text-white' >Home</h1> </div></Link>
      <Link to="../CustomerService">   <div className='flex gap-2'> <span><Phone color='white' size={25}/></span>  <h1 className='text-white '>Contact us</h1>   </div> </Link>
     <Link to="../About_Us" > <div className='flex gap-2'> <span><User color='white' size={25}/></span>            <h1 className='text-white  '>About us</h1></div>  </Link>   
      <Link to="../Blog" > <div className='flex gap-2'> <span><Newspaper color='white' size={25}/></span>       <h1 className='text-white '>Blog</h1> </div>  </Link>  
    <Link to="../CreateShipment" >  <div className='flex gap-2'> <span><BookCheck color="white" size={25} /></span> <h1 className='text-white' >Create Shipment</h1> </div> </Link>   
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
        <section id='sandwitch' className='scroll-mt-30 border border-transparent h-screen '>
            <HeaderPage/>
            <img src={asusas} alt="" className='mt-20 lg:mt-20 mx-auto'/>
            <div class="text-center my-8 px-5">
  <h1 class="text-4xl font-bold mb-2 libre-baskerville-regular-italic lg:text-6xl lg:my-5">Our Latest Insights</h1>
  <p class="text-gray-600 text-lg max-w-xl mx-auto">
    Explore expert articles, industry updates, and valuable tips to stay informed and inspired.
  </p>
</div>
        <section className='gap-5 py-5 mx-auto flex lg:grid lg:grid-cols-2 2xl:grid-cols-5 overflow-auto px-5 pb-20'>
            {blogData.map((data, index) => (
          <Blog_Card key={index} blog={data}/>
            ))}
            
        </section>

        




        <Footer/>
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
        <section className=''>
        <div className=" rounded-2xl shadow-2xl bg-white  hover:shadow-xl w-70  lg:w-90 mx-auto h-125">
            <img src={blog.image} alt={blog.title}  className='h-50 w-full rounded-t-2xl'/>
            <div className="flex justify-between p-5 items-center text-xs text-gray-500">
          <span>By {blog.author}</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>
      <div className="px-5">
        <h2 className="text-xl font-semibold mb-5 text-gray-800">{blog.title}</h2>
        <p className="text-sm text-gray-600">{blog.summary}</p>
     
       <div className="inline-block my-4 text-blue-600 hover:underline font-medium" onClick={() => handleNav(blog.slug)}><p> Read More →</p></div>
         
       
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
            <section className='text-sm lg:text-lg libre-baskerville-regular '>
            <section className={`max-w-4xl mx-auto px-5 pb-20 pt-10 text-gray-800 leading-relaxed bg-slate-100 bg-[url('/images/2go_logo_main.png')] bg-contain lg:bg-auto bg-fixed bg-center bg-no-repeat `}>
          
  <h1 className="text-3xl lg:py-10 lg:text-4xl font-medium mb-4 text-gray-900 mt-15 libre-baskerville-regular-italic">
    <span className='font-bold italic ' >2GO</span>: A Global Leader in Logistics and Delivery
  </h1>


  <div className='my-10 shadow-2xl rounded-sm '>
    <img src={CoronaImage} alt="cruise Image" className='h-40 lg:h-70 w-full'  />
  </div>
      
  <p>Interpost is a multinational logistics brand, founded in the United States and now headquartered in Bonn, Germany. With a reputation for excellence and efficiency, Interpost has emerged as one of the world’s foremost logistics companies, delivering over 1.7 billion parcels annually and serving millions of customers across the globe. This article explores the expansive reach, history, operations, and future of Interpost, offering an in-depth understanding of what makes the company a cornerstone of modern global delivery systems.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">1. Origins and Evolution</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Founded in the early 1980s in the United States, Interpost started as a small courier company with a vision of making international shipping seamless and reliable. As global commerce grew in the late 20th century, so did Interpost’s ambitions. By the mid-1990s, the company had expanded to major cities in Europe and Asia, establishing itself as a key player in cross-border logistics. The decision to move its headquarters to Bonn, Germany, reflected its commitment to serving European markets and optimizing its presence in the heart of the EU.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">2. Global Reach and Infrastructure</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Interpost operates in over 220 countries and territories, with more than 600 logistics hubs worldwide. These facilities include sorting centers, distribution warehouses, regional depots, and last-mile delivery stations. With a fleet of over 40,000 vehicles and partnerships with local couriers in remote regions, Interpost ensures packages are delivered efficiently, even in the most hard-to-reach areas.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">3. Technology and Tracking</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >One of Interpost’s core strengths is its investment in technology. The company offers real-time tracking for all parcels, allowing customers to follow their package from dispatch to delivery. Its systems integrate GPS, barcode scanning, RFID, and cloud-based logistics data, enabling transparency and operational efficiency. The Interpost tracking app is a customer favorite, offering updates, delivery customization, and chat support all in one place.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 libre-baskerville-regular-italic">4. Services Offered</h2>
  <ul className="list-disc lg:px-12 px-6 text-[12px] lg:text-[14px]">
    <li>Standard and Express Parcel Delivery</li>
    <li>International Freight Forwarding</li>
    <li>Customs Brokerage and Documentation</li>
    <li>Business Fulfillment and Warehousing Solutions</li>
    <li>Subscription-Based eCommerce Delivery Services</li>
  </ul>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20  libre-baskerville-regular-italic">5. Commitment to Sustainability</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Environmental sustainability is a key part of Interpost’s mission. The company has introduced electric delivery vans, invested in carbon-neutral shipping options, and implemented green logistics strategies across its supply chain. Packaging materials are recyclable, and their newer facilities meet LEED standards for energy efficiency.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">6. Customer Experience</h2>
  <img src={Happyrating} alt="happy rating Image"  className='my-5 shadow-xl border-l-4 border-blue-500 rounded-sm' />
  <p className='text-[12px] lg:text-[14px] mt-1' >Interpost places a premium on customer satisfaction. It offers flexible delivery slots, secure drop-off options, and 24/7 customer service. In high-demand regions, the company has even piloted drone and autonomous robot deliveries to reduce congestion and improve delivery speed.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">7. Competitive Position</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >In a market crowded with giants like FedEx, DHL, UPS, and regional players, Interpost stands out for its balance of reliability, pricing, and technology. By focusing on efficiency and customer satisfaction, Interpost has cultivated strong loyalty among businesses and individual customers alike.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">8. Challenges and Resilience</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >The logistics industry faces constant challenges: global pandemics, trade regulations, political instability, and rising costs. Interpost’s decentralized model and agile operations allow it to adapt quickly. During the COVID-19 pandemic, the company rapidly scaled up contactless delivery options and ensured uninterrupted service globally.</p>

  <h2 className="text-xl lg:text-2xl  font-semibold mt-10 lg:mt-20 text-gray-800 libre-baskerville-regular-italic">9. Innovation and the Future</h2>
  <img src={InnovationImage} alt="iconImage" className='my-5 shadow-xl mx-auto lg:h-100 rounded-sm' />
  <p className='text-[12px] lg:text-[14px] mt-1' >Looking ahead, Interpost plans to expand its autonomous vehicle fleet, invest further in AI-based logistics planning, and explore new markets in Sub-Saharan Africa and Southeast Asia. Blockchain technology is also on the roadmap for securing cross-border transactions and improving parcel traceability.</p>

  <h2 className="text-xl lg:text-2xl font-semibold mt-10 lg:mt-20 text-slate-800 uppercase text-center">Conclusion</h2>
  <p className='text-[12px] lg:text-[14px] mt-1' >Interpost’s journey from a small U.S. courier to a global logistics powerhouse is a testament to innovation, resilience, and strategic vision. With its strong foothold in Europe and a growing global presence, the company continues to redefine delivery standards, making the world smaller one package at a time.</p>
</section>

            </section>
            <Footer/>
        </section>
        
        </>
    )
}
import logo from '/src/assets/images/cartoon-delivery-man-.svg'
import ship from '/src/assets/images/ship-now.svg'
import building from '/src/assets/images/building.svg'
import quote from "/src/assets/images/quote.svg"
import xpa from '/src/assets/images/woman-box.jpg'
import xpc from '/src/assets/images/parcel-shipping-.jpg'
import xpd from '/src/assets/images/plane.svg'
import xpe from '/src/assets/images/fast-bus.svg'

import xpg from "/src/assets/images/Warehouse.jpg"
import xph from "/src/assets/images/parcel-delivery.jpg"
import xpi from "/src/assets/images/New-innovations.jpg"
import xpj from "/src/assets/images/seaship.jpg"
import ibm from "/src/assets/images/cheerful-woman-with-box.jpg"
import ibn from '/src/assets/images/360_F_603227348_Hpid47cSby44NH5CEYXu1Io2F94utpu5.jpg'
import { Newspaper, Headset, User, Phone, Contact, Mail, ChevronUp, PackageCheck, Truck } from 'lucide-react'
import cb1 from "/src/assets/images/what-is-a-courier-driver-HERO.webp"
import cb2 from "/src/assets/images/driver.webp"
import cb3 from "/src/assets/images/lady driver.jpeg"
import cb4 from "/src/assets/images/Delivery-Driver5.jpeg"
import cb5 from "/src/assets/images/delivery man.jpg"
import { useState, useEffect } from 'react'
import bb1 from "/src/assets/images/Cathay-Pacific.jpg"
import bb2 from "/src/assets/images/Airbus-Wing-.webp"
import bb3 from "/src/assets/images/plane6.webp"
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from './MainHomePage'
import directorPic from "/src/assets/images/cfpb_s-bessent-close-up_2025-02.original.jpg"
import agentPic from "/src/assets/images/interpost_logo.png"
import agentRealPic  from "/src/assets/images/Tax-Agents.jpg"
import { MenuIcon, HomeIcon, PhoneCallIcon , UserIcon, NewspaperIcon, QuoteIcon, BookCheck, TruckIcon } from 'lucide-react'
import {AnimatePresence, motion} from 'framer-motion'
import asusas from '/src/assets/images/Countrkkokok.jpg'







const images = [ xpa, ibn, ibm]

const images2 = [cb1, cb2, cb3, cb4, cb5]

const images3 = [bb1, bb2, bb3]
//bg-[#41134E]

export function Section1() {
    return(
        <>
         <div  ><HeaderPage/></div>
     


        <section className='bg-[url("/src/assets/images/pickLopaju.webp")] h-screen bg-cover bg-center grid items-center'>
         
        
<span>
    <p className='font-bold text-white text-5xl px-5' > <span className='text-red-700' >Interpost</span> Delivery is here to serve you.</p>
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
          
                 <div className=" w-full h-full overflow-hidden">
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
            <div className='bg-[#41134E] border border-[#41134E]'>
                <h1 className='text-2xl text-white font-bold text-center my-5 2xl:mt-30 2xl:text-6xl lg:text-4xl lg:my-15'>For Your Business</h1>
                <p className='text-xl text-white text-center 2xl:text-3xl 2xl:px-5 2xl:my-15 lg:px-4 lg:text-2xl px-5'>Power your small and medium-sized business sucess with world-class shipping and logistics. Our team of experts can help you address the ever changing need of your customers</p>
               <Link to="../CustomerService" >  <button className='h-15 w-4/5 ml-10 my-15 text-white  bg-red-700 font-bold 2xl:text-3xl 2xl:ml-25 lg:text-xl lg:mt-30'>Explore Our Business Solutions</button></Link>
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

            <div className=' lg:w-4/5 lg:ml-10  bg-white 2xl:w-5/8 2xl:ml-40 py-5 mb-10'>
                <h1 className='text-3xl font-bold 2xl:text-6xl 2xl:mt-5'>Document and Parcel Shipping</h1>
                <h1 className='text-xl  my-5 2xl:text-4xl'>For All Shippers</h1>
                <hr className='bg-black h-1' />
                <p className='text-xl my-5  2xl:text-3xl'>Learn about Interpost Express - the undisputed global leader in international experss shipping</p>
               
                <div className=' py-5' >
                    <h1 className='font-bold text-center text-2xl uppercase underline mb-10' > Services</h1>
                    <div className='space-y-5' >
                       

                       <div className='grid grid-cols-12' >
                       <div className='col-span-11' ><p>Invoice Clearity</p>   </div>
                       <p className={`${invoiceClear === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showInvoiceClear} ><ChevronUp/> </p> 
                        <span className={`${invoiceClear} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} > We believe in full transparency. Every invoice you receive is clear, detailed, and easy to understand—no hidden fees or confusing charges. You’ll always know exactly what you’re paying for, with a complete breakdown of services and costs.  </span>
                        
                       </div>



                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >100% Assurance safety Package</p> 
                            <p className={`${assurancePackage === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showAssurancePackage} ><ChevronUp/></p> 
                        <span className={`${assurancePackage} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} >Your package’s safety is our top priority. We use secure packaging, trusted handling procedures, and reliable tracking systems to ensure your item arrives in perfect condition. With our 100% Assurance Safety Package, you can ship with total confidence.</span>
                        </div>
                        
                        <div className='grid grid-cols-12' >
                            <p className='col-span-11' >24H delivery Guarantee</p> 
                            <p className={`${deliveryGuarantee === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showDeliveryGuarantee} ><ChevronUp/></p>
                        <span className={`${deliveryGuarantee} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} >We don’t just promise fast delivery—we guarantee it. Our 24-Hour Delivery Guarantee means your package will be delivered within 24 hours, or you get your money back. It’s our commitment to speed, reliability, and customer satisfaction.</span>
                        </div>


                        <div className='grid grid-cols-12' >
                            <p className="col-span-11" >Payment Before Delivery</p> 
                            <p className={`${PaymentDelivery === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showPaymentDelivery} ><ChevronUp/> </p>
                        <span className={`${PaymentDelivery} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} >For efficiency and mutual trust, we operate on a Payment Before Delivery policy. This ensures smooth processing, secure handling, and timely dispatch of your items. Once payment is confirmed, we take care of the rest—fast and professionally.</span>
                        </div>

                    </div>
                </div>

                <div className=' text-center py-5 w-fit mx-auto px-20 my-8 bg-red-700 text-xs text-white 2xl:text-3xl uppercase'> <Link to="../CustomerService" > Contact Us now</Link> </div>
            </div>
            <div className="w-full overflow-hidden 2xl:h-200 lg:h-full">
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
                <hr className='bg-black h-1 my-5' />
                <p className='text-xl ml-4 2xl:text-3xl 2xl:pr-20 2xl:mt-15'>We have two divisions the offer reliable business shipping for e-commerce, supplier or manufacturing companies</p>

                <div className='flex h-30 text-white bg-[#41134E] my-10 2xl:mt-17'>
                    <img src={xpd} alt="plane" className='h-20 mt-5 ml-2'/>
                   <div className='flex ml-2'>
                   <div className='h-25 mt-2 border w-0 shadow shadow-black'></div>
                   <p className='text-sm lg:text-lg grid items-center ml-5 mt-1'>Fast, door-to-door, courier delivered. Time definite delivery to 220+ countries</p>
                   </div>
                </div>

                <div className='flex h-30 text-white bg-[#41134E] 2xl:mt-15'>
                  <img src={xpe} alt="bus" className='h-15 w-27 mt-6 ml-2'/>
                 <div className='flex ml-2'>
                 <div className='border w-0 h-25 mt-2 shadow shadow-black'></div>
                 <p className='text-sm lg:text-lg grid items-center ml-5 mt-1'>Fast, door-to-door, courier delivered. Time definite delivery to 220+ countries</p>
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

           <div className='overflow-hidden w-full h-full'>
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
        <section className='lg:grid-cols-2 lg:h-140 grid 2xl:h-200 2xl:px-15'>
           
            <div className='border border-white h-full 2xl:w-4/5 2xl:ml-20 2xl:shadow 2xl:shadow-black 2xl:rounded-2xl px-5'>
                <h1 className='text-3xl  font-bold mt-5 2xl:text-6xl'>Enterprise Logistics Services</h1>
                <h1 className=' text-2xl my-3 2xl:text-4xl 2xl:my-8'>Business Only</h1>

                <hr className='bg-black h-1' />
                
                <p className='text-xl my-4 2xl:text-3xl 2xl:mt-10'>Find out how Interpost supply chain can revolutionize your business as 3PL Provider.</p>


                <div className=' py-10 space-y-10'>
                    <h1 className='text-xl font-bold 2xl:text-3xl uppercase text-center underline'>Services</h1>
                    <div className='space-y-5'>

                     <div className='grid grid-cols-12' >  
                        <h1 className='col-span-11'>Quick Clearing</h1> 
                        <p className={`${hideClearing === "hidden"? "": "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showClearing}><ChevronUp/> </p>   
                        <span  className={`${hideClearing} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} > We offer comprehensive customs clearing services to make international shipping hassle-free. Our team takes care of all the necessary paperwork, duties, and compliance checks to ensure your goods move smoothly through ports and borders—saving you time and avoiding unnecessary delays or penalties.</span>
                     </div> 


                     <div className='grid grid-cols-12' >
                        <h1 className='2xl:text-3xl col-span-11'>Same Day Delivery</h1>
                         <p className={`${hideSameDayDelivery === "hidden" ? "" : "rotate-180" } bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={ShowSameDayClearing} ><ChevronUp/> </p> 
                     <span className={` ${hideSameDayDelivery} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl `} > Need it there today? Our Same Day Delivery service guarantees that your package reaches its destination within hours. Ideal for urgent business documents, perishable items, or last-minute gifts, we prioritize speed, reliability, and secure handling—so your delivery gets there exactly when it needs to. </span>   
                     </div>




                     <div className='grid grid-cols-12' >
                         <h1 className='2xl:text-3xl col-span-11'>24H international Delivery</h1> 
                         <p className={`${hide24Hinternationa === "hidden" ? "" : "rotate-180"}  bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full`} onClick={showInternational} ><ChevronUp/> </p>
                     <span className={`px-5 ${hide24Hinternationa} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} >Reach across borders in record time. With our 24-Hour International Delivery, we ensure that your shipment is picked up, processed, and delivered to most major global cities within just one day. Powered by trusted global logistics partners, we make urgent international shipping fast, safe, and efficient. </span> 

                     </div>  


                     <div className='grid grid-cols-12' > 
                        <h1 className='2xl:text-3xl col-span-11'>Door to Door Delivery</h1>
                         <p className={`${DoortoDoor === "hidden" ? "" : "rotate-180"} bg-white  w-fit h-fit col-span-1 shadow shadow-black border-none rounded-full `} onClick={ShowDoorToDoor}><ChevronUp/></p>  
                    <span className={`px-5 ${DoortoDoor} bg-white p-5 col-span-12 text-xs shadow shadow-black border-none rounded-xl`} > From sender to recipient, we manage the entire journey. Our Door to Door Delivery service includes pickup from your location and delivery right to the recipient’s doorstep—no drop-off points or extra effort required. It's a convenient, full-service option designed for individuals and businesses alike. </span>
                    </div>  
                    </div>
                </div>


                <div className=' bg-red-700 text-white  w-fit px-20 py-5  mx-auto uppercase text-xs'> <Link to="../CustomerService" >contact Us Now</Link> </div>
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
            <hr className='h-1 w-4/5 mx-auto bg-black mb-10' />
            <div className='px-5' >
                <img src={directorPic} alt="director Picture" />
                <div className='bg-gray-700 pt-5 pb-20 px-5 space-y-2 text-white' >
                    <h1 className='font-bold' >Interpost Director</h1>
                    <p className='text-xs' >Mr Cam Odie</p>
                    <span className='flex  gap-2 text-xs' ><Mail size={15} className='mt-0.5'/> <p>director@email.com</p> </span>
                </div>
            </div>
          

        </section>

        </>
    )
}


export function CustomerService() {

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
   { imageID:"/src/assets/images/Tax-Agents.jpg",
        name:"Felix Owusu",
        country:"Ghana",
        number:"002015559541",
        Email:"customerService",
        admin:"same Name",

    };


    const agentFromotherCuntry = {
        imageID:"/src/assets/images/Warehouse.jpg",
        name:"Daniel Lark",
        country:"USA",
        Email:"customerService",
        Admin:"Same Name"
    }


    const [AgentData, setAgentData] = useState({
        imageID:"",
        name:"",
        country:"",
        number:"",
        Email:"",
        admin:"",

    })

    const [selectValue1, setSelectValue1 ] = useState('');
    const [selectValue2, setSelectValue2] = useState('');
    const [hideFilter, setHideFilter] = useState("");
    const [showNumberBar, setShownumberbar]= useState('hidden');

    const [showDetails, setShowDetails] = useState("hidden")



const handleChange1 = (e) => { const  value = e.target.value;setSelectValue1(value);}

const handleChange2= (e) => {const value = e.target.value; setSelectValue2(value);}



const GetAgent = () => {
    
    if(selectValue1 && selectValue2){
        
        if(selectValue1 === "Ghana"){
            AgentData.imageID = AgentINforGhana.imageID;
            AgentData.name = AgentINforGhana.name;
            AgentData.Email = AgentINforGhana.Email;
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
        alert("complete Detail")
    }


}

const showNumberBar32 = () =>{
    if(showNumberBar === "hidden"){
        setShownumberbar("block")
    }
    else {
        setShownumberbar("hidden")
    }
   

}














    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return (
        <>
        <HeaderPage/>

<div className='relative '>
    
<div className={`h-full bg-white absolute w-full overflow-auto ${showNumberBar}`}>
    
    <div className={`fixed p-5 bg-gray-700 top-1/4 w-4/5 left-1/2 -translate-x-1/2 space-y-5 text-white  shadow shadow-black rounded-2xl`} >
          <div className='w-full relative mb-10' > <X color="red" className='absolute right-0 bg-white rounded-full shadow-black shadow-2xl p-1' onClick={showNumberBar32} /></div>
            <span className='flex justify-between' >
                <p>Number :</p>
            <p>{AgentData.number}</p></span>
            <span className='flex justify-between' >
                <p>Email :</p>
                <p>{AgentData.Email}</p>
            </span>
            <p className='bg-blue-700 w-fit text-white  px-4 text-[10px] py-2  uppercase font-bold' >Copy Number</p>
           </div>
    </div>
    
             
         
            
             
    
             <section className='py-10 lg:py-20'>
           
                <h1 className='text-3xl font-bold text-red-600 ml-4 mt-10 text-center'>Customer Service</h1>
                
                <p className=' my-4 px-5'>Talk to Our Agent Representative Now!! , They are Available 24/7 for you the customers convinience. responce is usually immidiately or within the hour. </p>
    
    
    
    
    <div className={`px-10 space-y-5 bg-gray-700 py-5 ${hideFilter} text-white w-11/12 mx-auto shadow-2xl shadow-gray-300 rounded-xl`} >
    
        <h2 className='font-bold uppercase text-center' >Agent Search Filter</h2>
        
    
    
    <div>
                        <p className='my-1'>Select Country  of Service</p>
                       <select name="" id="" placeholder="" className='w-full border py-2 px-5 outline-none  ' onChange={handleChange1}>
                        <option  className='text-black' >Select Country</option>
                        <option  className='text-black' value="Ghana" >Ghana</option>
                        <option  className='text-black' value="USA" >United States</option>
                        <option  className='text-black' value="Canada" >Canada</option>
                       </select>
                    </div>
    
                    <div>
                        <p className='my-1'>Purpose of Contact</p>
                        <select name="" id="" className='w-full border py-2 px-5 outline-none 'onChange={handleChange2} >
                            <option className='text-black' >Purpose Of Contact</option>
                            <option className='text-black' value="General">General Enquiry</option>
                            <option className='text-black' value="clearance">Payment Of Clearance Fee</option>
                            <option className='text-black' value="Tracking">Tracking Issues</option>
                        </select>
                    </div>
    
                    <div className='bg-red-700 w-fit px-5 text-white  py-2 uppercase text-xs shadow shadow-gray-400'  onClick={GetAgent} >Confirm</div>
    
    </div>
    
    
    
    
    
    
    
    
         <span className={`${showDetails}`} >
         <div className='px-7 mt-10' >
    
    
    <div className='' >
      <div className='outline-10 rounded outline-red-700' > <img src={AgentData.imageID} alt="icon" /></div>
      </div>
    
    </div>
       <div className='px-5' >
           <div className='shadow shadow-red-700 my-10 space-y-2 p-2'>
               <span className='flex  justify-between' ><h1 className='font-bold uppercase '>Name:</h1> <p>{AgentData.name}</p></span>
               <span className='flex  justify-between' ><h1 className='font-bold uppercase  '>Country:</h1> <p>{AgentData.country}</p></span>
               <span className='flex  justify-between' ><h1 className='font-bold uppercase '>Number:</h1> <p>{AgentData.number}</p></span>
               <span className='flex  justify-between' ><h1 className='font-bold uppercase  '>Administrator:</h1> <p>{AgentData.admin}</p></span>
               <span className='flex  justify-between' ><h1 className='font-bold uppercase  '>Working Hours</h1> <p>8:am - 8pm GMT </p></span>
    
           </div>
           <div className=' text-center px-10 py-2 mx-auto bg-red-700 text-sm text-white flex gap-2 justify-center'onClick={showNumberBar32} > <Phone size={15} className='mt-0.5'/> <p>Talk To Available Agent Now</p> </div>
       </div>
    
    
    
    
         </span>
    
    
    
    
    
                
             </section>
             
             <section className='mt-10 px-5 grid lg:grid-cols-2 w-11/12 mx-auto lg:gap-5 gap-2' >
              <div className='border border-white shadow shadow-red-700 p-5 '>
                <h1 className='text-xl font-bold text-red-700 flex gap-2'><PackageCheck size={20} className='mt-1' /> <p>Clearance</p></h1>
                <p className='my-2'>We Privide Swift Payment Methods and Fast Processing of Clearance Payment</p>
              </div>
    
              <div className=' shadow border border-white  shadow-red-700 p-5'>
                <h1 className='text-xl font-bold text-red-700 flex gap-2 '> <Truck size={20} className='mt-1' /> Delivery to Door-Step</h1>
                <p className=' my-2'>We Guarantee 24 hours Max time for Delivery , and Put Agent are always Available to Walk you through it</p>
              </div>
    
    
              <div className=' shadow border border-white  shadow-red-700 p-5'>
                <h1 className='text-xl font-bold text-red-700 flex gap-2 '> <Truck size={20} className='mt-1' /> Delivery to Door-Step</h1>
                <p className=' my-2'>We Guarantee 24 hours Max time for Delivery , and Put Agent are always Available to Walk you through it</p>
              </div>
    
    
              <div className=' shadow border border-white  shadow-red-700 p-5 mb-20'>
                <h1 className='text-xl font-bold text-red-700 flex gap-2 '> <Truck size={20} className='mt-1' /> Delivery to Door-Step</h1>
                <p className=' my-2'>We Guarantee 24 hours Max time for Delivery , and Put Agent are always Available to Walk you through it</p>
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
        setFlipMenu("rotate-90 bg-white text-black");
        
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

                <div className='flex bg-gray-700  justify-between' >
                  <div className={`border-r py-5 px-5  ${flipMenu}`} onClick={showDash} >  <MenuIcon/></div>
                    <div className='grid items-center w-full mx-auto' >
                    <img src={agentPic} alt="icon" className='h-10 mx-auto ' />
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
                    <div className={`bg-white h-screen w-3/5 py-10 shadow shadow-black space-y-5 `} >
                    <div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto' >
    <HomeIcon size={20} className='mt-1'/>
    <Link to="/" >
    <p>Home</p>
    </Link>
</div>




<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto' >
    <PhoneCallIcon size={20} className='mt-1'/>
    <Link to="../CustomerService">
    <p>Contact us</p>
    </Link>
</div>


<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto' onClick={() => handleNav('../Blog')}>
    <NewspaperIcon size={20} className='mt-1' />
<p>BLog</p>
</div>


<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto'>
    <QuoteIcon size={20} className='mt-1'/>
    <p>About Us</p>
</div>

<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto' >
    <UserIcon size={20} className='mt-1' />
    <p onClick={openDirector} > Manager</p>
</div>

<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto'>
<BookCheck size={20} className='mt-1'/>
    <p>Create Shipment</p>
</div>



<div className='bg-gray-600 text-white p-2 flex  gap-5 shadow shadow-black w-11/12  mx-auto' > 
    <TruckIcon size={20} className='mt-1' />
    <Link to="../TrackPage" > <p>Track Package</p> </Link>
    
</div>



                    </div>
                    <div className='w-2/5' onClick={() => showDash()}></div>
                  </div>




               </motion.div>)}
               </AnimatePresence>
      
              </section>




              <section className="bg-gray-700 py-5 lg:flex w-full  fixed top-0 z-70 hidden">
       

       <div className='flex justify-between' >
       <img src={agentPic} alt="logo"  className='h-10 mx-auto mt-3 2xl:h-30 lg:h-30 lg:absolute '/>
       </div>
   
        
        <div className='grid grid-cols-3 lg:w-200 md:ml-130 2xl:ml-290 '>
         <div className='lg:flex w-100 lg:w-50 ml-15 hidden '> <span className='mt-4 lg:mt-8 2xl:mt-7 '><Phone color='white' size={25}/></span>      <Link to="../CustomerService">  <h1 className='text-white mt-3 lg:ml-1 lg:text-2xl ml-1 2xl:mt-5 md:mt-6 '>Contact us</h1> </Link>  </div> 
         <div className='lg:flex w-100 lg:w-50 ml-10 hidden'><span className='mt-7 lg:mt-7 hidden lg:block  2xl:mt-7'><User color='white'/></span>  <h1 className='text-white mt-8 lg:ml-1 lg:text-2xl hidden lg:block 2xl:mt-5 md:mt-6'>About us</h1></div>  
        <div className='flex lg:ml-5'><h1 className='text-white mt-8 ml-5 lg:text-2xl hidden lg:mt-6 lg:block 2xl:mt-5'>Blog</h1> <span className='mt-10 ml-2 hidden lg:mt-9 lg:block 2xl:mt-7'><Newspaper color='white'/></span></div> 
        </div>
         
         </section>











      </>
    )
  }

export function Blog() {
    
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("Package.json").then((res) => res.json()).then((data) => setBlogData(data))
    })

    return (
        <>
        <section id='sandwitch' className='scroll-mt-30 border border-transparent'>
            <HeaderPage/>
            <img src={asusas} alt="" className='mt-15'/>
            <div class="text-center my-8">
  <h1 class="text-4xl font-bold mb-2">Our Latest Insights</h1>
  <p class="text-gray-600 text-lg max-w-xl mx-auto">
    Explore expert articles, industry updates, and valuable tips to stay informed and inspired.
  </p>
</div>
        <section className='gap-5 py-5 mx-auto flex overflow-auto px-3'>
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
        <div className=" rounded-2xl  shadow-2xl bg-white  hover:shadow-xl  w-90 mx-auto">
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
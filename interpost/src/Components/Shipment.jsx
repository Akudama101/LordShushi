import { HeaderPage } from "./Reusables"









export function TrackPage(){

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


        </div>
        
        
        
        </>
    )
}
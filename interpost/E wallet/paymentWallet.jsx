//Remainder Page 

export function Remainder(){


    return(
        <div>

      <div className="w-1/3 shadow-2xl mx-auto my-72 bg-gray-700 p-5">

            <p className="font-bold mb-3 text-2xl " >Remainder</p>
            <div className="flex gap-2 bg-gray-800 p-2" > <img src="\src\icons\info-circle-regular-24 (2).png" alt="" /> <p className="text-red-500 font-medium" > Please use MoMo pay or Vodaphone (Telecel Play Ghana) for payment</p></div>

            <div className="text-sm space-y-2" >
                <p class="p2" >After completing the repayment, please <span className="text-green-400" >backfill</span> your <span className="text-green-400" >Transaction ID (Txn ID 11 or 16 digits).</span></p>
                <p class="p3" ><span className="text-green-400" >If you do not backfill, your repayment will take a much longer time than usual .</span></p>
                <p class="p4" >Do not close the APP before backfill</p>
            </div>
           <button className="bg-green-400 w-full py-2 mt-5 uppercase font-medium" > <p> i know & continue to repay</p> </button>

 
        </div>


    </div>
    )
}

export function NumberPopup(){



    return(


        <div>
     <div className="w-80 mx-auto bg-black px-5 py-2 mt-52 h-full">
        <div id="count_down"></div>
        <div id="alert"></div>
        <div  >
            <p  >Please fill the <span className="text-red-600" >correct payment e-wallet number</span> to confirm your repayment. if you ask someone else to repay on your behalf, please confirm that the <span className="text-red-600" >payment e-wallet number is correct.</span></p>
            <select className="w-full my-5 py-2 px-2 outline-none text-sm border-none" >
                <option>Account type</option>
                <option>AIRTEL / TIGO</option>
                <option>MTN</option>
                <option>TELECEL</option>
            </select>
            <input type="number" placeholder="E-Wallet Number" required maxlength="10" className="w-full py-2 px-2 mb-5 text-sm " />
    <button  id="result-Btn" className="w-full bg-green-500 text-sm py-1 rounded mb-5"  >CONFIRMED THEN SUBMIT</button>
        </div>
    </div>
   {/* <iframe src="\src\components\E wallet\img\scs.png" className="w-full h-screen absolute top-0 -z-10 border-none" > </iframe>*/}
        </div>
    )


}


export function MakePayment(){



    return(
        <div>

<div className="w-1/3 border mx-auto bg-green-300 p-5 rounded-lg my-5" >

        <div>

            <div className="bg-orange-900 text-orange-200 p-2 rounded-xl ">
                <span>
                    <p className="font-bold" >Important Reminder</p>
                    <p className="text-xs font-medium" >When you have completed the payment, please backfill the Txn ID (11 or 16) here from MoMo pay or Vodafone (Telecel Pay Ghana) Such as:</p>

                </span>
                <span>
                    
                        <div className="w-full mx-auto flex overflow-x-auto mt-2 " >
                            <img src="\src\components\E wallet\img\txn1.png" alt="" className="w-imgFull  h-20" />
                            <img src="\src\components\E wallet\img\txn1.png" alt="" className="w-imgFull  h-20" />
                            
                        </div>
               
                </span>

            </div>

            <div className="text-black bg-red-500 w-32 text-center rounded-r-xl my-5 text-xs font-medium py-1 ">
                <p>It is Important!</p>
            </div>

            <div className="flex" >
                <input type="text" placeholder="Transaction ID (Txn ID 11 or 16 digits)" className="bg-black w-full py-2 px-2 rounded text-sm block" />
                <img src="\src\icons\x-regular-24.png" alt="" className=" bg-gray-500 rounded-xl" />
            </div>

            <div className="bg-gray-800 text-white mt-2 rounded-xl px-3 py-2 ">
                
                <p className="text-xs my-2" >Please replay <span className="text-yellow-600" >Vodaphone (Telecel Play Ghana) </span> account: </p>
                <span className="flex gap-2" >
                    <img src="\src\components\E wallet\img\telecel logo.webp" alt="telecel icon" className="w-10 rounded" />
                    <div className="bg-black flex justify-between px-2 w-96 rounded py-2" > <p className="font-bold" >0500621641 </p> <p className="text-xs text-green-600 mt-1" >Copy</p></div>
                </span>
                <p className="text-xs mt-3 mb-2" >The amount you should replay is: </p>
                <span className="flex gap-2 mb-2" >
                    <img src="\src\components\E wallet\img\cedisyn.png" alt="icon" className="w-10 rounded" />
                    <div className="bg-black flex justify-between px-2 w-96 rounded py-2" > <p className="font-bold" > </p> <p className="text-xs text-green-600 mt-1" >Copy</p></div>
                </span>

            </div>

            <div className="text-white text-xs mt-5" ><p>If your payment completed, you can click the button to get the result , it may take a few minuets.</p></div>
            <button className="text-white font-bold bg-green-800 w-full py-2 rounded shadow-black" >Get the result</button>

        </div>

    </div>

             {/*display phone number the payment is being made from */}
             <div className="border-orange-600 border-2 w-2/3 flex justify-between rounded-xl mx-auto p-2 " > 
            <span>
                <p className="text-xs font-bold text-orange-600" >  Please check the correct payment e-wallet:</p>
                <p id="account_Number_Display"  > users number</p>
            
            </span>
            <span className="text-orange-500 text-xs align-baseline" ><p>_Modify</p></span>
        </div>



        </div>
    )
}



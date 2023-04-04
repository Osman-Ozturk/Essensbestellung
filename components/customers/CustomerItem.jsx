import Image from "next/image.js";
import React from "react";
import {CaretUpFilled} from "@ant-design/icons"
const CustomerItem = ({userName,kommentar}) => {
  return (
    <div className="mt-5">
      <div className="bg-secondary text-white flex flex-col p-6 rounded-[5px]">
        <p>{kommentar}</p>
        
       
        <span className="text-lg font-semibold mt-4"> {userName}</span>
        <span>magna aliqua</span>

      </div>
      <div className=" w-[150px] mt-4 flex flex-col justify-center items-center">
        <CaretUpFilled className=" text-primary text-4xl -mb-3"/>
        <Image src={"/images/client1.jpg"} alt="client1" width={150} height={150} className=" rounded-full border-primary border-[6px]"/>
      </div>
     
    </div>
  );
};

export default CustomerItem;

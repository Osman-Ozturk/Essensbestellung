import { Button } from "antd";
import Image from "next/image.js";
import React from "react";
import Title from "./Title.jsx";

const About = () => {
  return (
    <div className="bg-secondary w-screen h-screen flex md:flex-row flex-col mt-10">
      <div className="flex-1 flex justify-end items-center w-full" >
        <Image src={"/images/about-img.png"} alt="aboutImage"  width={400} height={200}/>
      </div>
      <div className="flex-1 text-white flex flex-col justify-center items-start gap-8 m-10" >
        <Title>Wir sind Feane</Title>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet labore saepe deserunt reiciendis libero, temporibus modi in laboriosam est inventore quaerat quis,</p>

        <div>
                <Button className="bg-primary rounded-full cursor-pointer hover:scale-105 transition-all text-xl flex justify-center items-center text-white">Weiterlesen</Button>
        </div>
      </div>
    </div>
  );
};

export default About;

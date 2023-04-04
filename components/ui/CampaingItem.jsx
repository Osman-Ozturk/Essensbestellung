import { Button } from "antd";
import Image from "next/image.js";
import Title from "./Title.jsx";

const CampaingItem = () => {
  return (
    <div className=" bg-secondary flex justify-center items-center p-4 rounded-md w-[450px]">
      <div className="border-[5px] border-primary rounded-full p-2 flex justify-center items-center">
        <Image
          src={"/images/f1.png"}
          alt="campaings image"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-4">
        <Title addClass={"text-white "}>Tosty Thursday</Title>
        <Title addClass={"text-white tex-3xl"}>20% off</Title>
        <Button className="bg-primary p-4 rounded-2xl flex justify-center items-center text-white">
          Jetzt bestellen
        </Button>
      </div>
    </div>
  );
};

export default CampaingItem;

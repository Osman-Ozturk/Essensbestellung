
import { Table } from "antd";
import Image from "next/image.js";
import { BankOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Order = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "BESTELLUNG ID",
      dataIndex: "product",
      key: "product",
      render:()=>(
        <div className="flex gap-2">
        <Image src={"/images/f1.png"} alt="OrderImage" width={30} height={30}/>
        <p>Gute Pizza</p>
        </div>
      )
    },
    {
      title: "KUNDE",
      dataIndex: "kunde",
      key: "kunde",
    },
    {
      title: "ADRESSE",
      dataIndex: "adresse",
      key: "adresse",
    },
    {
      title: "GESAMT",
      dataIndex: "gesamt",
      key: "gesamt",
    },
  ]

  return (
    <div className="flex h-[50vh]  flex-col">
      <div className="flex-1 flex justify-center items-center ">
        <Table dataSource={dataSource} columns={columns} className="w-[90%]"/>
      </div>
      <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className="relative flex flex-col">
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Bezahlen</span>
          </div>
          <div className="relative flex flex-col animate-pulse">
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Vorbereiten</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Auf dem Weg</span>
          </div>
          <div className="relative flex flex-col">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Zustellen</span>
          </div>
        </div>
      
        
    </div>
  );
};

export default Order;

import Title from "@/components/ui/Title.jsx";
import { Button, Table } from "antd";
import Image from "next/image.js";
const Cart = () => {
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
      title: "PRODUKT",
      dataIndex: "product",
      key: "product",
      render:()=>(
        <div className="flex gap-2">
        <Image src={"/images/f1.png"} alt="cartImage" width={30} height={30}/>
        <p>Gute Pizza</p>
        </div>
      )
    },
    {
      title: "EXTRA",
      dataIndex: "extra",
      key: "extra",
    },
    {
      title: "PREIS",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "ANZAHL",
      dataIndex: "quantity",
      key: "quantity",
    },
  ]

  return (
    <div className="flex h-[50vh] -mb-6 md:flex-row flex-col">
      <div className="flex-1 flex justify-center items-center ">
        <Table dataSource={dataSource} columns={columns} className="w-[90%]"/>
      </div>
        <div className="flex-2 flex justify-center items-center h-full flex-col  bg-secondary text-white gap-4">
        <Title>KARTEN GESAMT</Title>
        <div >
                <p><span className="text-bold ">Vorläufig Gesamt: </span>20€</p>
                <p><span className="text-bold ">Rabatt: </span>0€</p>
                <p><span className="text-bold ">Gesamt: </span>20€</p>
        </div>
        <Button className={"bg-primary rounded-xl "}>jetzt zur Kasse gehen </Button>

      </div>
    </div>
  );
};

export default Cart;

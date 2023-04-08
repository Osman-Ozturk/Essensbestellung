import Title from "@/components/ui/Title.jsx";
import { Button, Table } from "antd";
import Image from "next/image.js";
import { useDispatch, useSelector } from "react-redux";
import { resetProduct } from "@/redux/cartSlice.js";
const Cart = () => {
  const {products} = useSelector(state => state.cart)
  const dataSource = products;
  const dispatch =useDispatch()


  const columns = [
    {
      title: "PRODUKT",
      dataIndex: "name",
      key: "name",
      render:(text)=>(
        <div className="flex gap-2">
        <Image src={"/images/f1.png"} alt="cartImage" width={30} height={30}/>
        <p>{text}</p>
        </div>
      )
    },
    {
      title: "EXTRA",
      dataIndex: "extras",
      key: "extras",
      render:(text)=>{
        return <p>{text.map(a=>a.name)+","}</p>
        
      }
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
      <div className="flex-1 flex flex-col justify-center items-center ">
        <Table pagination={{pageSize: 4}} dataSource={dataSource} columns={columns} className="w-[90%]"/>
        
      </div>
        <div className="flex-2 flex justify-center items-center h-full flex-col  bg-secondary text-white gap-4 p-4">
        <Title>KARTEN GESAMT</Title>
        <div >
                <p><span className="text-bold ">Vorläufig Gesamt: </span>20€</p>
                <p><span className="text-bold ">Rabatt: </span>0€</p>
                <p><span className="text-bold ">Gesamt: </span>20€</p>
        </div>
        <Button className={"bg-primary rounded-xl "} onClick={()=>dispatch(resetProduct())}>jetzt zur Kasse gehen </Button>
      </div>
    </div>
  );
};

export default Cart;

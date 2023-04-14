
import Account from "../../components/profile/Account";
import Image from "next/image";
import Password from "@/components/profile/Password.jsx";
import Order from "@/components/admin/Order.jsx";
import Products from "@/components/admin/Products.jsx";
import Category from "@/components/admin/Category.jsx";
import Footer from "@/components/admin/Footer.jsx";
import axios from "axios";
import { useRouter } from "next/router.js";
import { toast } from "react-toastify";
import AddProduct from "@/components/admin/AddProduct.jsx";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState ,useEffect} from "react";

const Profile = ({products}) => {
  const [tabs, setTabs] = useState(0);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const {push} =useRouter()
  
  const closeAdminAccount =async ()=>{
    try {
      
      if (confirm("Sind Sie sich sicher, ob Sie ihre Admin Account abmelden möchten ? ")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin")
          toast.success("Admin Account wurde geschlossen")
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
       
  return (
    <div className="relativ flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col">
    <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className="text-center font-semibold">
        <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-cutlery"></i>
            <button className="ml-1 ">Products</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
              
            }`}
            onClick={() => setTabs(1)}
          >
            
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Bestellungs</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
                        <i className="fa fa-ellipsis-h"></i>
            <button className="ml-1">Kategorien</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Footer</button>
          </li>
          
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(4)}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1" onClick={closeAdminAccount}>Abmelden</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products products={products}/>}
      {tabs === 2 && <Category />}
      {tabs === 1 && <Order />}
      {tabs === 3 && <Footer />}
      <AddProduct isProductOpen={isProductOpen} setIsProductOpen={setIsProductOpen}/>
      <div className="absolute top-24 right-4">
      <Button className="bg-primary rounded-full flex justify-center items-center text-white h-[50px] shadow-lg" onClick={()=>setIsProductOpen(true)}><PlusOutlined /> Produkt hinzufügen</Button>

      </div>
    </div>
  );
};
export const getServerSideProps =async (context)=> {
  const myCookie =context.req?.cookies || "";
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect :{
        destination :"/admin",
        permanent:false
      }
    }
  }
  return {
    props: {
      products: res.data ? res.data : [],
    },
  };
}


export default Profile;
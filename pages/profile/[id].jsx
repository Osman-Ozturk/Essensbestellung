
import { useState,useEffect } from "react";
import Account from "../../components/profile/Account";
import Image from "next/image";
import Password from "@/components/profile/Password.jsx";
import Order from "@/components/profile/Order.jsx";
import { signOut ,useSession,getSession} from "next-auth/react";
import { useRouter } from "next/router.js";
import axios from "axios";

const Profile = ({user}) => {
  const { data: session } = useSession();
  const [tabs, setTabs] = useState(0);
  const {push} =useRouter()
  const handleSignOut =()=>{
    if (confirm("Sind Sie sich sicher,ob Sie abmelden möchten?")) {
      signOut({redirect:false})
      push("/login")
    }
  }
   useEffect(() => {
    if (session === null) {
      push("/login")
    }
  }, [session,push])     
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col">
    <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/admin.png" priority
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">{user.fullName}</b>
        </div>
        <ul className="text-center font-semibold">
        <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1 ">Account</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Bestellungs</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out" ></i>
            <button className="ml-1" >Abmelden</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user}/>}
      {tabs === 2 && <Order user={user}/>}
    </div>
  );
};
export const getServerSideProps = async({req,params})=>{

  const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)
  return {
    props:{
      user:user ? user.data : null
    }
  }
}
export default Profile;
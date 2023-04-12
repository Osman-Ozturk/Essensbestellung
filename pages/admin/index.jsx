import Input from "@/components/form/Input.jsx";
import Title from "@/components/ui/Title.jsx";
import {  useFormik } from 'formik';
import { Button } from "antd";
import Link from "next/link.js";
import { adminSchema } from "@/Schema/adminSchema.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router.js";
const Admin = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res =await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`,values)
      
      if (res.status === 200) {
        toast.success("Login war erfolgreich")
        router.push("admin/profile")
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { touched, errors, values, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        username: "",
        password:"",
      },
      validationSchema: adminSchema,
    });
  const inputs = [

    {
      id: 1,
      name: "username",
      type: "username",
      placeholder: "Ihre username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Ihr Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    
  ];
  return (
    <div className="w-[450px] m-auto mt-16 mb-32 flex flex-col justify-center items-center" >
        <Title addClass={"text-4xl"} >Admin Login</Title>
        <form className="lg:flex-1 w-full mt-12" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-3">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="mt-2">
        <button className=" w-[450px] btn-primary mt-4 mb-4" type="submit" >
          ANMELDEN
        </button>
        
        <Link href={"/"} >Haupt Seite</Link>

        </div>
      </form>
    </div>
  )
}
export const getServerSideProps = (context)=> {
  const myCookie =context.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect :{
        destination :"/admin/profile",
        permanent:false
      }
    }
  }
  return {
    props:{}
  }
}

export default Admin
import {useState} from "react";
import Input from "../form/Input.jsx";
import Title from "../ui/Title";
import { useFormik } from "formik";
import Link from "next/link.js";
import { registerSchema } from "@/Schema/registerSchema.js";
import { useSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router.js";
import axios from "axios";

const Login = () => {
  const { data: session } = useSession();
  const {push} =useRouter()
  const handleSubmit =async (e) => {
    e.preventDefault()
     try {
      const {email,password}=values
      const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      const user = users.data.find(user => user.email === email)
      let options = {redirect:false,email,password}
      const res = await signIn("credentials",options)
      console.log(res);
      if (res.status === 200) {
        toast.success("Login ist erfolgreich")
        push(`/profile/${user._id}`)
      }
      
    } catch (error) {
      toast.error("Es gibt eine Problem")
      console.log(error);
    } 
  }

  
  const { touched, errors, values, handleBlur, handleChange } =
  useFormik({
    initialValues: {
        email: "",
        password:""
      },
      validationSchema: registerSchema,
    });
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Ihre Email Address",
        value: values.email,
        errorMessage: errors.email,
        touched: touched.email,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Ihr Password",
        value: values.password,
        errorMessage: errors.password,
        touched: touched.password,
      },
    ];
    const handlerGithub = () => {
      signIn("github")
      push(`/`)
    }
    console.log(session);
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Anmelden</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            ANMELDEN
          </button>
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={handlerGithub}
          >
            <i className="fa fa-github mr-2 text-lg"></i>
            GITHUB
          </button>
          <Link href="/register">
            <span className="text-sm underline cursor-pointer text-secondary">
              Haben Sie keine Account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

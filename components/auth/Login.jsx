import React from "react";
import Input from "../form/Input.jsx";
import Title from "../ui/Title";
import {  useFormik } from 'formik';
import { Button } from "antd";
import Link from "next/link.js";
import { registerSchema } from "@/Schema/registerSchema.js";
import {GithubOutlined} from "@ant-design/icons"

const Login = () => {
  const onSubmit = async (value, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    actions.resetForm();
  };
  const { touched, errors, values, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
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
      type: "text",
      placeholder: "Ihr Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    
  ];
  return (
    <div className="w-[450px] m-auto mt-28 mb-32 flex flex-col justify-center items-center" >
        <Title addClass={"text-4xl"} >Login</Title>
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
        <Button className=" w-[450px] btn-primary mt-4" type="submit" onSubmit={onSubmit}>
          LOGIN
        </Button>
        <Button className="mb-4 w-[450px] bg-secondary mt-4 rounded-xl text-white flex justify-center items-center" type="submit" onSubmit={onSubmit}>
        <GithubOutlined /> GITHUB
        </Button>
        <Link href={"/register"} >Haben Sie schon keine Konto ?</Link>

        </div>
      </form>
    </div>
  )
}

export default Login
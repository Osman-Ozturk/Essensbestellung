import React from "react";
import Input from "../form/Input.jsx";
import Title from "../ui/Title";
import {  useFormik } from 'formik';
import { Button } from "antd";
import Link from "next/link.js";
import { adminSchema } from "@/Schema/adminSchema.js";

const Admin = () => {
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
        <Button className=" w-[450px] btn-primary mt-4 mb-4" type="submit" onSubmit={onSubmit}>
          LOGIN
        </Button>
        
        <Link href={"/"} >Haupt Seite</Link>

        </div>
      </form>
    </div>
  )
}

export default Admin
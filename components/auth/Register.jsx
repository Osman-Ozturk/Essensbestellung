import React from "react";
import Input from "../form/Input.jsx";
import Title from "../ui/Title";
import {  useFormik } from 'formik';
import { Button } from "antd";
import Link from "next/link.js";
import { registerSchema } from "@/Schema/registerSchema.js";
const Register = () => {
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
      name: "fullName",
      type: "text",
      placeholder: "Ihre Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Ihre Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Ihr Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "passwordWieder",
      type: "text",
      placeholder: "Ihr Bestätigungspasswort",
      value: values.password,
      errorMessage: errors.passwordWieder,
      touched: touched.passwordWieder,
    },
  ];
  return (
    <div className="w-[450px] m-auto mt-28 flex flex-col justify-center items-center" >
      <Title addClass={"text-4xl"}>Register</Title>
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
        <div className="mb-8">
        <Button className="mb-2 w-[450px] btn-primary mt-4" type="submit" onSubmit={onSubmit}>
          REGISTER
        </Button>
        
        <Link href={"/login"} >Haben Sie schon eine Konto ?</Link>

        </div>
      </form>
    </div>
  );
};

export default Register;

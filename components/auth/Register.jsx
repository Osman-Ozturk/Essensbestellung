import React from "react";
import Input from "../form/Input.jsx";
import Title from "../ui/Title";
import {  useFormik } from 'formik';
import Link from "next/link.js";
import { registerSchema } from "@/Schema/registerSchema.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/router'
const Register = () => {
  const router =useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      console.log(res);
      if (res.status === 201) {
        toast.success("User created successfully");
        router.push("/login")
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const { values, errors, touched, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
 
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[40px] mb-6">Register</Title>
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
            REGISTER
          </button>
          <Link href="/login">
            <span className="text-sm underline cursor-pointer text-secondary">
              Haben Sie schon einen Konto?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;

import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { Formik, useFormik } from 'formik';
import { Button } from "antd";
import { rezervationSchema } from "@/Schema/rezervationSchema.js";

const Reservation = () => {
  const onSubmit =async (value,actions) =>{
    await new Promise((resolve)=>setTimeout(resolve,400))
    actions.resetForm()
  }
  const formik = useFormik({
    initialValues:{
      fullName:"",
      phoneNumber:"",
       email:"",
      persons:"",
      date:""
    },
    onSubmit,
    validationSchema: rezervationSchema,
  })
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Ihre Full Name",
      value:formik.values.fullName,
      errorMessage :formik.errors.fullName
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Ihre Telefonnummer",
      value:formik.values.phoneNumber,
      errorMessage:formik.errors.phoneNumber
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Ihre Email Address",
      value:formik.values.email,
      errorMessage:formik.errors.email

    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "Wie viele Personen?",
      value:formik.values.persons,
      errorMessage:formik.errors.persons
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value:formik.values.date,
      errorMessage:formik.errors.date
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Einen Tisch reservieren</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <form className="lg:flex-1 w-full" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-y-3">
          {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={formik.handleChange}/>
            ))}
          </div>
          <Button className="btn-primary mt-4" type="submit" onSubmit={onSubmit}>BUCHEN SIE JETZT</Button>
        </form>
        <div className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
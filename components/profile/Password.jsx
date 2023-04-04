import React from "react";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
import { registerSchema } from "@/Schema/registerSchema.js";
const Password = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password:"",
        passwordWieder:""
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Ihre Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "passwordWieder",
      type: "password",
      placeholder: "Bestätige das Passwort",
      value: values.passwordWieder,
      errorMessage: errors.passwordWieder,
      touched: touched.passwordWieder,
    }
  ];
  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Password </Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key="input.id"
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn-primary mt-4">Aktualizieren</button>
    </form>
  );
};

export default Password;
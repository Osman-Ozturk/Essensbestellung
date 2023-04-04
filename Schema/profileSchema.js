import * as Yup from "yup";

export const profileSchema = Yup.object({
  address: Yup.string().required("Address ist erforderlich."),
  job: Yup.string().required("Job ist erforderlich."),
  bio: Yup.string().required("Bio ist erforderlich."),
  fullName:Yup.string().required("Fullname ist erforderlich").min(3,"Fullname muss mindestern 3 Zeichen lang sein"),
        phoneNumber:Yup.string().required("Phonenumber ist erforderlich").min(10,"Phonenumber ist mindesterns 10 Zeichen sein"),
        email:Yup.string().email("Email is ungültig").required("Email ist erforderlich"),
        persons:Yup.string().required("Persons ist erforderlich"),
        date:Yup.string().required("Date ist erforderlich"),
});
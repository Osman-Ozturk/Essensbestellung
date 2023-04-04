import * as Yup from "yup";
export const registerSchema = Yup.object({
  fullName: Yup.string()
    .required("Fullname ist erforderlich")
    .min(3, "Fullname muss mindestern 3 Zeichen lang sein"),
  password: Yup.string()
    .required("Kein Passwort angegeben.")
    .min(8, "Das Passwort ist zu kurz - sollte mindestens 8 Zeichen lang sein.")
    .matches(/[a-zA-Z]/, "Das Passwort darf nur lateinische Buchstaben enthalten."),
    passwordWieder: Yup.string()
    .required("Kein Passwort angegeben.")
    .min(8, "Das Passwort ist zu kurz - sollte mindestens 8 Zeichen lang sein.")
    .matches(/[a-zA-Z]/, "Das Passwort darf nur lateinische Buchstaben enthalten."),
  email: Yup.string()
    .email("Email is ungültig")
    .required("Email ist erforderlich"),
  persons: Yup.string().required("Persons ist erforderlich"),
  date: Yup.string().required("Date ist erforderlich"),
});

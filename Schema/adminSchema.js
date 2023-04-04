import * as Yup from "yup";
export const adminSchema = Yup.object({
  username: Yup.string()
    .required("username ist erforderlich")
    .min(3, "Username muss mindestern 3 Zeichen lang sein"),
  password: Yup.string()
    .required("Kein Passwort angegeben.")
    .min(8, "Das Passwort ist zu kurz - sollte mindestens 8 Zeichen lang sein.")
    .matches(/[a-zA-Z]/, "Das Passwort darf nur lateinische Buchstaben enthalten."),
   
});

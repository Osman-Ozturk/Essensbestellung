import * as Yup from 'yup';
export const rezervationSchema = Yup.object({
        fullName:Yup.string().required("Fullname ist erforderlich").min(3,"Fullname muss mindestern 3 Zeichen lang sein")
})
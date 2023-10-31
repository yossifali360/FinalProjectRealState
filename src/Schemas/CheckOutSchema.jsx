import * as Yup from "yup"
export const CheckOutSchema = Yup.object().shape({
    fName : Yup.string().required("First Name is required").min(3,"First Name Must be at lest 3 characters"),
    lName : Yup.string().required("Last Name is required").min(3,"Last Name Must be at lest 3 characters"),
    Address : Yup.string().required("Address is required").min(3,"Address Must be at lest 3 characters"),
    Country : Yup.string().required("Country is required").min(3,"Country Must be at lest 3 characters"),
    City : Yup.string().required("City is required").min(3,"City Must be at lest 3 characters"),
    phoneNumber : Yup.number().required("Phone Number is required"),
    State : Yup.string().required("State is required").min(3,"State Must be at lest 3 characters"),
    zipCode : Yup.number().required("ZipCode is required"),
})
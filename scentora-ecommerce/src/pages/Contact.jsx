
import Breadcrumb from "../components/Breadcrumb";
import './Contact.css';
import Button from "../components/Button";



export default function Contact() {

    const contactDetails = [
        {
            type: "Email",
            icon: "fa-regular fa-envelope",
            info: "scentorafragrance@gmail.com",
            link: "mailto:johnson11ameyaw@gmail.com"
        }, 

        {
            type: "Phone",
            icon: "fa-solid fa-phone",
            info: "0242142297",
            link: "tel:+233242142297"
        }, 

        {
            type: "WhatsApp",
            icon: "fa-brands fa-whatsapp",
            info: "Chat on WhatsApp",
            link: "https://wa.me/233242142297"
        }, 

        {
            type: "Location",
            icon: "fa-solid fa-map-marker-alt",
            info: "KNUST, Kumasi, Ghana",
            link: null
        }, 
    ]

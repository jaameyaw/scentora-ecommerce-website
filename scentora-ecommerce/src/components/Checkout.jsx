import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Checkout.css';
import PaystackCheckoutButton from "./PaystackCheckoutButton";

export default function Checkout () {
    const {cartTotal} = useContext(CartContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
        validateform();
    }

    const validateform = (e)=> {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        const phoneRegex = /^(?:0|\+233)\d{9}$/;

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone (0xxxxxxxxx)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const isFormValid = Object.keys(errors).length === 0 
    && formData.name && formData.email && formData.phone;
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h1 className="checkout-title">Checkout</h1>
                <p className="checkout-total">
                     GHS {Number(cartTotal || 0).toFixed(2)}
                </p>   
            </div>

            <div className="checkout-content">
                <form action="" className="checkout-form">
                    <div className="form-control">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.name && errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-control">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.email && errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-control">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                </form>

                <PaystackCheckoutButton
                    name={formData.name}
                    email={formData.email}
                    phone={formData.phone}
                    disabled={!isFormValid}
                />                
            </div>


        </div>
    )
}
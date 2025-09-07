
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
    return (
        <section className="contact-us">
            <Breadcrumb links={[
                {to:'/', label:'Home'},
                {to: '/About', label: 'Contact'}
            ]} /> 

            <div className="contact-heading">
                <h2>Get in touch</h2>
                <p>Have a question about our fragrances or need help with an order? We’d love to hear from you.</p>
            </div>

            <div className="contact-wrapper">

                <div className="contact-information">
                    <small>how can we help you?</small>
                    <h3>Contact information</h3>

                    {contactDetails.map ((contact, index) =>(
                        <div className="contact-about" key={index}>
                            <div className="contact-icon">
                                <i className={contact.icon}></i>
                            </div>

                            <div className="contact-info">
                                <h5>{contact.type}</h5>
                                {contact.link ?( <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                    {contact.info}
                                </a> ): (
                                    <h4 className="location-info">{contact.info}</h4>
                                )
                            }
                            </div>
                        </div>
                    ))}


                    <div className=" contact-socials">
                        <h3>Follow us</h3>

                        <div className="contact-social">
                            <a href="" target="_blank"><img src="images/contact-icons/twitter.png" alt="logo of twitter" /></a>
                            <a href="" target="_blank"><img src="/images/contact-icons/instagram.png" alt="logo of instagram" /></a>
                            <a href="" target="_blank"><img src="/images/contact-icons/tik-tok.png" alt="logo of tik-tok" /></a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h3>Send us a message</h3>

                    <form action="">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstName" placeholder="Your first name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstname">Last Name</label>
                                <input type="text" id="LastName" placeholder="Your last name" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
                        </div>

                        <Button className='button button-gold'> Send Message <i class="fa-solid fa-paper-plane"></i></Button>
                    </form>

                </div>
            </div>

        </section>
       
    )
}
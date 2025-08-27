
import "./Newsletter.css";
import Button from './Button';

const Newsletter = () => {
  return (
    <div className="newsletter-content">
        <div className="newsletter-info">
            <h2> Sign up for the <span>latest Deals &gt;</span></h2>
            <p>
                Get <strong>$5 off</strong> your first order of <strong>$100+</strong>{" "}
                by signing up for our Newsletter. Be the first to receive exclusive
                news and offers.
            </p>
        </div>

        <div>
            <form className="newsletter-form">
                <input
                    type="email"
                    placeholder="Your email address"
                    required
                />
                <Button className='button button-black'>Subscribe</Button>
            </form>
        </div>
    </div>
  );
};

export default Newsletter;

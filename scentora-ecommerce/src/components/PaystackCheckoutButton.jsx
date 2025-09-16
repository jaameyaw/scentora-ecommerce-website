import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function PaystackCheckoutButton({ email, name, phone, disabled }) {
  const navigate = useNavigate()
  const { cartTotal, clearCart } = useContext(CartContext);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amountInPesewas = Math.round(Number(cartTotal || 0) * 100);

  const payWithPaystack = () => {
    if (disabled) return; 

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email || "customer@example.com",
      amount: amountInPesewas,
      currency: "GHS",
      ref: String(Date.now()), // unique reference
      metadata: {
        custom_fields: [
          {
            display_name: name || "Customer",
            variable_name: "phone",
            value: phone || "",
          },
        ],
      },
      callback: function () {
        clearCart();
        navigate('/success')
      },
      onClose: function () {
        alert("❌ Payment window closed.");
      },
    });

    handler.openIframe();
  };

  const buttonDisabled = {
    opacity: "0.5",
    cursor: "not-allowed"
  }

  return (
    <Button
      onClick={payWithPaystack}
      className={`button button-gold width ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      style={buttonDisabled}
    >
      Pay GHS {Number(cartTotal || 0).toFixed(2)}
    </Button>
  );
}

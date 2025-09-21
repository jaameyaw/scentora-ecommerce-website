import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; 
import Button from './Button';
import SuccessModal from './SuccessModal';

export default function PaystackCheckoutButton({ email, name, phone, disabled }) {
  const { cartTotal, clearCart } = useContext(CartContext);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [transactionRef, setTransactionRef] = useState(null);


  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amountInPesewas = Math.round(Number(cartTotal || 0) * 100);

  const payWithPaystack = () => {
    if (disabled) return; 

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email || "customer@example.com",
      amount: amountInPesewas,
      currency: "GHS",
      ref: String(Date.now()), 
      metadata: {
        custom_fields: [
          {
            display_name: name || "Customer",
            variable_name: "phone",
            value: phone || "",
          },
        ],
      },
      callback: function (response) {
        setTransactionRef(response.reference);
        clearCart();
        setOpenSuccess(true)
      },
      onClose: function () {
        alert("❌ Payment window closed.");
      },
    });

    handler.openIframe();
  };


  return (
    <>
      <Button
        onClick={payWithPaystack}
        className={`button button-gold width ${disabled ? "disabled" : ""}`}
        disabled={disabled}
        style={disabled? { opacity: 0.5, cursor: "not-allowed" } : {}}
      >
        Pay GHS {Number(cartTotal || 0).toFixed(2)}
      </Button>

      <SuccessModal open={openSuccess} transactionRef={transactionRef}/>
    </>
  );
}

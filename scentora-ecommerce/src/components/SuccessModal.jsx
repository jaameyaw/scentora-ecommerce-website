import { Modal, Box, Typography, Button, Fade, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SuccessModal({ open, transactionRef }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Modal
      open={open}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
      }}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: { xs: 2, sm: 4 },
            width: { xs: "90%", sm: "400px" },
            maxWidth: "95vw",
            textAlign: "center",
            fontFamily: "var(--font-body)"
          }}
        >
          <Typography
            id="success-modal-title"
            variant="h5"
            component="h2"
            gutterBottom
          >
            ✅ Payment Successful!
          </Typography>

          <Typography
            id="success-modal-description"
            sx={{ mb: 3 }}
          >
            Thank you for shopping with <strong>Scentora</strong>. <br />
            Your order is being processed. You’ll receive an update soon.
          </Typography>

          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
            Ref: {transactionRef}
          </p>

          <Button
            variant="contained"
            color="success"
            onClick={handleGoHome}
            sx={{ mt: 2 }}
          >
            Go Back Home
          </Button>
        </Box>
    </Modal>
}

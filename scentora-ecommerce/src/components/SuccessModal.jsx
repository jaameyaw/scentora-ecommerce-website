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
    </Modal>
}

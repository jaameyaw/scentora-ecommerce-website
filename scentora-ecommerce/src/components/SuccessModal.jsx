import { Modal, Box, Typography, Button, Fade, Backdrop } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SuccessModal({ open, transactionRef }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

}

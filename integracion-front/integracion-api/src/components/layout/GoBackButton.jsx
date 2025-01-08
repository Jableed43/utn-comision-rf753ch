/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoBackButton = ({ label = "Go Back", sx = {} }) => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <Button
      onClick={handleGoBack}
      sx={{ textTransform: "capitalize", color: "black", ...sx }}
    >
      <ArrowBackIcon sx={{ mr: 1 }} />
      {label}
    </Button>
  );
};

export default GoBackButton;

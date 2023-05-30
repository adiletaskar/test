import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ModalContent = ({ rowData, onClose }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>
        Row Details
      </Typography>
      <Typography>ID: {rowData.id}</Typography>
      <Typography>Name: {rowData.name}</Typography>
      <Typography>Calories: {rowData.calories}</Typography>
      <Typography>Fat: {rowData.fat}</Typography>
      <Typography>Carbs: {rowData.carbs}</Typography>
      <Typography>Protein: {rowData.protein}</Typography>
      <Button variant="contained" onClick={onClose} mt={2}>
        Close
      </Button>
    </Box>
  );
};

export default ModalContent;

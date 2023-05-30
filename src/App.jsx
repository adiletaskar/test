import { Box, Grid, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import ModalContent from "./ModalContent";

const rows = [
  {
    id: 1,
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 2,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  {
    id: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "calories", headerName: "Calories", width: 130 },
  { field: "fat", headerName: "Fat", width: 90 },
  { field: "carbs", headerName: "Carbs", width: 110 },
  { field: "protein", headerName: "Protein", width: 120 },
];

const App = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          onRowClick={handleRowClick}
        />
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedRow && (
            <ModalContent rowData={selectedRow} onClose={handleCloseModal} />
          )}
        </Box>
      </Modal>
    </Grid>
  );
};

export default App;

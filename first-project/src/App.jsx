import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
import CardGrid from "./cardGrid";
import teas from "./teas.json";
import CustomButton from "./CustomButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log("searchTerm:", searchTerm);

  let filteredTeas = teas.filter((tea) =>
    tea.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Boba Shop with React & Vite!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Why isn't the CSS working?
        </Typography>
      </Container>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Search for a tea"
          value={searchTerm}
          onChange={(event) => {
            console.log("Event:", event.target.value);
            setSearchTerm(event.target.value);
          }}
        />
      </Box>

      <CustomButton />

      <CardGrid jsondata={filteredTeas} />
    </>
  );
}

export default App;


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";

import CardGrid from "./cardGrid";
import teas from "./teas.json";
import CustomButton from "./CustomButton";

function App() {
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
      
      <CustomButton />

      <CardGrid jsondata={teas}/>
    </>
  );
}

export default App;

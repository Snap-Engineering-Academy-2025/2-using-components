import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./App.css";
import Grid from "@mui/material/Grid";
import DataCard from "./DataCard";

// import characters from './protagonists.json'

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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <DataCard 
            TeaName= "Tie Guan Yin"
            TeaURL= "https://www.teadealers.com/cdn/shop/products/IMG-5168copy.jpg?v=1664066888"
            text = "Floral, light, and airy - Often thought of as similar to an orchid."
            description={["one", "two", "three"]}
          />
        </Grid>
        <Grid size={3}>
          <DataCard 
            TeaName = "Jin Xuan"
            TeaURL={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jin_Xuan_oolong_tea.jpg/1200px-Jin_Xuan_oolong_tea.jpg"}
            text = "Naturally milky, creamy, and buttery."
            description={["one", "two", "three"]}
          />
        </Grid>
        <Grid size={3}>
          <DataCard 
            TeaName = "Dan Cong"
            TeaURL={"https://www.jingteashop.com/cdn/shop/products/oolong-dancong-szdc1.jpg?v=1641104848"}
            text = "Natural flavors and aroma - Full-bodied, rich, and fragrant."
            description={["one", "two", "three"]}
          />
        </Grid>
        <Grid size={3}>
          <DataCard 
            TeaName= "Matcha"
            TeaURL={"https://oldbarreltea.com/cdn/shop/products/Matcha_1200x1200.jpg?v=1605636985"}
            text = "A fine powdered tea with a bright, emerald green color and a rich, vegetal taste."
            description={["one", "two", "three"]}
          />
        </Grid>
        <Grid size={3}>
          <DataCard 
            TeaName= "Jasmine"
            TeaURL={"https://oldbarreltea.com/cdn/shop/products/JasmineLooseLeaf_1200x1200.jpg?v=1624483058"}
            text = "Delicate, floral, and slightly sweet flavor, often enjoyed for its aromatic fragrance and refreshing taste."
            description={["one", "two", "three"]}
          />
        </Grid>
        <Grid size={3}>
          <DataCard 
            TeaName="Hojicha"
            TeaURL={"https://www.nannuoshan.org/cdn/shop/files/T376_IMG_6337_1200x1200.jpg?v=1711989098"}
            text = "Roasted green tea with a unique, earthy aroma and a distinct flavor profile."
            description={["one", "two", "three"]}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

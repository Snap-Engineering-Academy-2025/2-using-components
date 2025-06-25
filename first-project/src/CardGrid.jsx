import Grid from "@mui/material/Grid";
import DataCard from "./DataCard";

export default function CardGrid({jsondata}) {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {jsondata.map((element, index) => (
        <Grid size={3}>
          <DataCard
            key={index}
            TeaName={element.name}
            TeaURL={element.url}
            text={element.text}
            description={element.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}

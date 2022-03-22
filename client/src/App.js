import { Container, Grid } from "@mui/material";
import "./App.css";
import Appbar from "./components/Appbar";
import TourCard from "./components/TourCard";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={3}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;

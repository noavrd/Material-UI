import {
  Box,
  Grid,
  Rating,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { AccessTime } from "@mui/icons-material";

// Customize the typography
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        // If the varian = body2 than make the font size 11
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },

        // If the varian = body3 than make the font size 9
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
export default function TourCard() {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={5}>
          <img
            src="https://i.insider.com/5ad8e2b9bd967120008b4656?width=600&format=jpeg&auto=webp"
            alt="falls"
            className="img"
          />
          {/* variant makes it look like h4, and component set the element as h2 */}
          <Box padding={1}>
            <Typography variant="subtitle" component="h2">
              Immerse into the falls{" "}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 Hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              {/* precision enables the half star */}
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginLeft={0}>
                From C $135
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

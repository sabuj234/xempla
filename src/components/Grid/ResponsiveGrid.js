import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

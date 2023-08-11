import React from "react";

import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

export const Geography = () => {
  return (
    <Box m="20px">
      <Header
        title="Geography Chart"
        subtitle="Simple Geography Chart"
      ></Header>
      <Box height="75vh">
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  );
};

import React from "react";

import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import LineChart from "../../components/LineChart";

export const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart"></Header>
      <Box height="75vh">
        <LineChart isDashboard={false} isCustomLineColors={false} />
      </Box>
    </Box>
  );
};

import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

 const GraphView =()=>{
  return (
      <Box
        variant="outlined"
        sx={{ height: '300px', width: '300px', border: '1px solid grey' }}
      >
        <Typography variant='h1'>graph here</Typography>

      </Box>
  );
}

export default GraphView;
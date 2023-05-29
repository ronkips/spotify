import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function Volume() {
  const [value, setValue] = React.useState(40);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 4 }} alignItems="center">
        <VolumeUp />

        <Slider
          aria-label="Volume"
          color="secondary"
          value={value}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}

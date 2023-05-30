import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function Volume() {
  const [value, setValue] = useState(40);

  const volumeRef = useRef();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const audio = volumeRef.current;
    audio.Volume = newValue / 100;
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 4 }} alignItems="center">
        <VolumeUp />

        <Slider
          aria-label="Volume"
          color="secondary"
          value={value} mkuti
          
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
}

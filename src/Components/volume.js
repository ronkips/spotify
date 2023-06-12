import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function Volume() {
  const [value, setValue] = useState(50);

  const volumeRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newValue / 100;
    }
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
      {/* <audio ref={audioRef} src="/volume.js" /> */}
    </Box>
  );
}

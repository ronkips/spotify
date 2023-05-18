import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";

import { Stack } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  return (
    <Paper
      sx={{
        paddingTop: 2,
        marginTop: 23,
        marginLeft: 4,
        maxWidth: 1300,
        maxHeight: 140,
        flexGrow: 1
        // backgroundColor: "#"npm run
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 49, height: 49, padding: "10" }}>
            <Image src="/face.svg" alt="album" width={49} height={49} />
          </Box>
        </Grid>
        <Grid item xs={20} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item sx>
              <Typography variant="subtitle1" component="div">
                Seasons in
              </Typography>

              <Typography variant="body2" color="text.secondary">
                James
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={20} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item sx={3}>
              <Typography variant="body2" color="text.secondary">
                James
              </Typography>
              <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                  color:
                    theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
                  height: 4,
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: 8,
                    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                    "&:before": {
                      boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)"
                    },
                    "&:hover, &.Mui-focusVisible": {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === "dark"
                          ? "rgb(255 255 255 / 16%)"
                          : "rgb(0 0 0 / 16%)"
                      }`
                    },
                    "&.Mui-active": {
                      width: 10,
                      height: 10
                    }
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.28
                  }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <VolumeUpRounded htmlColor={lightIconColor} />

          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none"
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)"
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none"
                }
              }
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;

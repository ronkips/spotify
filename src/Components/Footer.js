import React, { useState } from "react";
// import { styled, useTheme } from "@mui/material";
// import { Box } from "@mui/material/Box";
// import { Typography } from "@mui/material/Typography";
// import { Slider } from "@mui/material/Slider";
// import { IconButton } from "@mui/material/IconButton";
// import { Stack } from "@mui/material/Stack";
// import { PauseRounded } from "@mui/icons-material/PauseRounded";
// import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
// import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
// import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
// import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
// import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
// import { Style } from "@mui/icons-material";

// const background = styled("div")({
//   position: "absolute",
//   width: "100%",
//   height: "125px",
//   bottom: "0px",
//   left: "0px",
//   background: " #1E1E1E"
// });

// const Widget = styled("div")(({ theme }) => ({
//   padding: 1,
//   borderRadius: 16,
//   width: "95%",
//   maxWidth: "100%",
//   margin: "auto",
//   position: "relative",
//   zIndex: 1,
//   backgroundColor:
//     theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
//   backdropFilter: "blur(40px)"
// }));
// const CoverImage = styled("div")({
//   width: 100,
//   height: 100,
//   objectFit: "cover",
//   overflow: "hidden",
//   flexShrink: 0,
//   borderRadius: 8,
//   backgroundColor: "rgba(0,0,0,0.08)",
//   "& > img": {
//     width: "100%"
//   }
// });
// const TinyText = styled(Typography)({
//   fontSize: "0.75rem",
//   opacity: 0.38,
//   fontWeight: 500,
//   letterSpacing: 0.2
// });

// const Footer = () => {
//   const theme = useTheme();
//   const duration = 200; // seconds
//   const [position, setPosition] = useState(32);
//   const [paused, setPaused] = useState(false);

//   function formatDuration(value) {
//     const minute = Math.floor(value / 60);
//     const secondLeft = value - minute * 60;
//     return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
//   }

//   const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
//   const lightIconColor =
//     theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

//   return <Box sx={{ width: "100%", overflow: "hidden" }}></Box>;
// };

export default Footer;

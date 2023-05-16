// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { blue, red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { FavoriteOutlined } from "@mui/icons-material";
// import { useState } from "react";
// import { ExpandMore } from "./expand";
// // import HomeIcon from "@mui/icons-material/Home";

// export default function MyCard() {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   return (
//     <Card sx={{ maxWidth: 500 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
//             H
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//             {/* <HomeIcon /> */}
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="public"
//         height="100"
//         image="/aimage.png"
//         alt="myimage"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text-secondary">
//           This is the most perfect dish liked by the chines and more fun by
//           their guest. Add 1 cup of frozen peas along with the mussels if you
//           likr it.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//             over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//             stirring occasionally until lightly browned, 6 to 8 minutes.
//             Transfer shrimp to a large plate and set aside, leaving chicken and
//             chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
//             onion, salt and pepper, and cook, stirring often until thickened and
//             fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
//             cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is
//             absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
//             shrimp and mussels, tucking them down into the rice, and cook again
//             without stirring, until mussels have opened and rice is just tender,
//             5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  paddingTop: 50,
  paddingfLeft: 30,
  width: "100%",
  maxWidth: 500,
  bgcolor: "white"
};

const Card = () => {
  return (
    <Box sx={style}>
      <Divider orientation="vertical" flexItem>
        hello
      </Divider>
    </Box>
  );
};
export default Card;

import {
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { PostCategory } from "./PostCategory";
import { PostDetails } from "./PostDetails";

export function Post( {color, image, title, number_of_hours, details}) {
  return (
    <Paper
      sx={{
        background: color,
        textAlign: "end",
        borderRadius: "15px 15px 15px 15px",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        padding: "45px 0 0 0",
      }}
    >
      <Paper
        sx={{ background: "#1c1f4a", borderRadius: "15px 15px 15px 15px" }}
      >
        <PostCategory title={title} />
        <PostDetails number_of_hours={number_of_hours} details={details} />
      </Paper>
    </Paper>
  );
}

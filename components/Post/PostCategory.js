import {
    Grid,
    Box,
    Paper,
    Typography,
    Button,
    IconButton,
  } from "@mui/material";
  import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export function PostCategory({title}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0 10px 0 10px",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          alignSelf: "center",
          color: "#FFFFFF",
          padding: "10px 10px 0 10px",
        }}
      >
       {title}
      </Typography>
      <IconButton>
        <MoreHorizIcon sx={{ color: "#FFFFFF" }} />
      </IconButton>
    </Box>
  );
}

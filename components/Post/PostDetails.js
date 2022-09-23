import {
  Grid,
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

export function PostDetails({number_of_hours, details}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#FFFFFF",
          margin: "5px 10px 10px 10px",
          padding: "0 10px 10px 10px",
        }}
      >
        {number_of_hours}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: "#bdc1ff",
          margin: "5px 10px 10px 10px",
          padding: "0 10px 10px 10px",
        }}
      >
        {details}
      </Typography>
    </Box>
  );
}

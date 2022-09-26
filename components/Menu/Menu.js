import {
  Grid,
  Box,
  Paper,
  Typography,
  Avatar,
  ButtonGroup,
  Button,
} from "@mui/material";
import { CardMessage } from "../Post/PostDetails";

export function Menu() {
  return (
    <Paper
      sx={{
        background: "#1c1f4a",
        // padding: "0 0 10px 0",
        borderRadius: "15px 15px 15px 15px",
        margin: "0 10px 0 10px",
      }}
    >
      <Paper
        sx={{
          background: "#5847eb",
          borderRadius: "15px 15px 15px 15px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ margin: "3px 1px 3px 3px" }}>
          <Avatar src="/images/image-jeremy.png" />
        </Box>
        <Box sx={{ margin: 3 }}>
          <Typography variant="caption" sx={{ color: "#bdc1ff" }}>
            Report for
          </Typography>
          <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
            Jeremy Robson
          </Typography>
        </Box>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={12}>
          <Typography sx={{ color: "#FFFFFF", margin: "20px 0 5px 30px" }}>
            Daily
          </Typography>
        </Grid>
        <Grid item xs={4} sm={12}>
          <Typography sx={{ color: "#FFFFFF", margin: "15px 0 5px 30px" }}>
            Weekly
          </Typography>
        </Grid>
        <Grid item xs={4} sm={12}>
          <Typography sx={{ color: "#FFFFFF", margin: "15px 0 20px 30px" }}>
            Monthly
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

import { Container, Grid } from "@mui/material";
import { Menu } from "../components/Menu/Menu";
import Posts from "../components/Posts/Posts";

export default function Home() {
  return (
    // <Container
    //   maxWidth
    //   sx={{ display: "flex", padding: 10 }}
    // >
    //   <Menu />
    //   <Posts posts={POSTS} />
    // </Container>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
        <Menu />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Posts posts={POSTS} />
      </Grid>
    </Grid>
  );
}

const POSTS = [
  {
    category: "Work",
    color: "#ff8c66",
    image: "/images/icon-work.svg",
    number_of_hours: "32hrs",
    details: "Last Week - 36hrs",
  },
  {
    category: "Play",
    color: "#56c2e6",
    image: "/images/icon-play.svg",
    number_of_hours: "10hrs",
    details: "Last Week - 8hrs",
  },
  {
    category: "Study",
    color: "#ff5c7c",
    image: "/images/icon-study.svg",
    number_of_hours: "4hrs",
    details: "Last Week - 7hrs",
  },
  {
    category: "Seft Care",
    color: "#f1c65b",
    image: "/images/icon-self-care.svg",
    number_of_hours: "2hrs",
    details: "Last Week - 2hrs",
  },
  {
    category: "Exercise",
    color: "#4acf81",
    image: "/images/icon-exercise.svg",
    number_of_hours: "4hrs",
    details: "Last Week - 5hrs",
  },
  {
    category: "Social",
    color: "#7536d3",
    image: "/images/icon-social.svg",
    number_of_hours: "5hrs",
    details: "Last Week - 10hrs",
  },
];

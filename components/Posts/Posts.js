import { Grid } from "@mui/material";
import React from "react";
import { Post } from "../Post/Post";

export default function Posts({ posts }) {
  return (
    <Grid container spacing={3}>
      {posts.map((post) => {
        return (
          <Grid item key={post.category} xs={12} sm={4}>
            <Post
              color={post.color}
              image={post.image}
              title={post.category}
              number_of_hours={post.number_of_hours}
              details={post.details}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ForumGet() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      let posts;
      let token = sessionStorage.getItem("token");
      try {
        let response = await fetch(
          "https://hacknova2.pythonanywhere.com/feed/posts/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log("Error" + error);
        posts = [];
      }
      setCard(posts);
    })();
  }, []);

  return (
    <>
      <Grid
        container
        className="display"
        // alignItems="center"
        // justifyContent="center"
      >
        <Box ml={5} mr={5} mt={3} pt={3} mb={1} pb={1}>
          <Grid
            container
            spacing={3}
            alignContent="flex-start"
            justify="center"
            // display="flex"
            // flexDirection="column"
          >
            {card.map((post, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{
                      width: "50vh",
                      backgroundColor: "#49ab9480",
                      marginLeft: "170px",
                    }}
                    // data-aos="fade-up"
                    // data-aos-anchor-placement="bottom-bottom"
                  >
                    <CardMedia
                      component="img"
                      alt="img"
                      height="140"
                      src={post.images_post}
                    />
                    <CardContent>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.owner.username}
                      </Typography>
                      <h2>Title</h2>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.title}
                      </Typography>
                      <h2>Content</h2>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.body}
                      </Typography>
                      <h2>Likes</h2>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.like_on_post_count}
                      </Typography>
                      <h2>Comments</h2>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.comment_on_post_count}
                      </Typography>
                      <h2>Votes</h2>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.votes_on_post}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

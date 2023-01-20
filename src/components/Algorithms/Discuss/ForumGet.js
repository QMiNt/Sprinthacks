import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import CommentPost from "./CommentPost";
import { Link } from "react-router-dom";

export default function ForumGet() {
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = useState([]);
  let userid = sessionStorage.getItem("user_id");
  const [values, setValues] = useState({
    owner: userid,
    group_post: 1,
    body: "",
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      body: data.get("body"),
    });
    createcomment();
  };

  async function createcomment() {
    try {
      let token = sessionStorage.getItem("token");
      let result = await fetch(
        "https://hacknova2.pythonanywhere.com/feed/comments/",
        {
          method: "POST",
          body: JSON.stringify({
            owner: values.owner,
            body: values.body,
            group_post: values.group_post,
          }),
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
    } catch (error) {
      console.log("Error" + error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h2>Posted by:&nbsp;</h2>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.owner.username}
                        </Typography>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h2>Title:&nbsp;</h2>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.title}
                        </Typography>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h2>Content:&nbsp;</h2>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.body}
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          <Button>
                            <FavoriteIcon />
                          </Button>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.like_on_post_count}
                          </Typography>
                        </div>
                        <div>
                          <Link to="/comments">
                            <CommentIcon />
                            </Link>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.comment_on_post_count}
                          </Typography>
                        </div>
                        <div>
                          <Button>
                            <ThumbUpIcon />
                          </Button>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.votes_on_post}
                          </Typography>
                        </div>
                      </div>
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

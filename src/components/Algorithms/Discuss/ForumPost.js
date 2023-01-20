import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
// import * as axios from 'axios';

export default function ForumPost() {
  let userid = sessionStorage.getItem("user_id");
  let token = sessionStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
    const [images_post, setImages_post] = React.useState(null);
  const [values, setValues] = useState({
    title: "",
    body: "",
    owner: userid,
    youtube_link: "",
    // images_post: null,
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleImageChange = (e) => {
    setValues({
      ...values,
      image: e.target.files[0],
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var axios = require("axios");

  const handleSubmit = (event) => {
    event.preventDefault();
    // var FormData = require("form-data");
    // var fs = require("fs");
    // var data = new FormData();
    // data.append("title", "dsa");
    // data.append("body", "hello");
    // data.append("owner", "2");
    // data.append(
    //   "images_post",
    //   fs.createReadStream("/C:/Users/ACER/Downloads/dmw etl2.jpeg")
    // );

    // var config = {
    //   method: "post",
    //   url: "https://hacknova2.pythonanywhere.com/feed/posts/",
    //   headers: {
    //     Authorization: `Token ${token}`,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   title: data.get("title"),
    //   content: data.get("content"),
    // });
    // createpost();
    var FormData = require("form-data");
    var data = new FormData();
    data.append("title", values.title);
    data.append("body", values.body);
    data.append("owner", userid);
    data.append("images_post", images_post, images_post.name);
    let url = "https://hacknova2.pythonanywhere.com/feed/posts/";
    axios
      .post(url, FormData, {
        headers: {
          Authorization: `Token ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  async function createpost() {
    // console.log("hello");
    try {
      let token = sessionStorage.getItem("token");
      let result = await fetch(
        "https://hacknova2.pythonanywhere.com/feed/posts/",
        {
          method: "POST",
          body: JSON.stringify({
            title: values.title,
            body: values.body,
            owner: values.owner,
            images_post: values.images_post,
            youtube_link: values.youtube_link,
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
      //   setPosted_by(userId);
      //   if(result){
      //     alert("Signed in Successfully! Please verify your email");
      //   }
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create new post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogTitle>Create New Post</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  onChange={handleChanges}
                  multiline
                />
              </div>
              <div style={{ paddingTop: "1rem" }}>
                <TextField
                  id="body"
                  name="body"
                  label="Content"
                  multiline
                  rows={4}
                  onChange={handleChanges}
                />
              </div>
              <Button
                variant="contained"
                component="label"
                style={{ marginTop: "1rem" }}
              >
                Choose image
                <input
                  id="images_post"
                  name="images_post"
                  type="file"
                  hidden
                  onChange={(e)=>{setImages_post(e.target.files[0])}}
                />
              </Button>
              {/* <div style={{ paddingTop: "1rem" }}>
                <TextField
                  id="title"
                  name="title"
                  label="Youtube link"
                  type="url"
                  multiline
                />
              </div> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Post
              </Button>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

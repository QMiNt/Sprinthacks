import React from "react";
import TextField from '@material-ui/core/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ForumPost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      content: data.get("content"),
    });
    // createacc();
  };
  return (
    <>
      <div>ForumPost</div>
      <Grid container display="flex" flexDirection="column">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField id="title" name="title" label="Title" multiline />
          <TextField
            id="content"
            name="content"
            label="Content"
            multiline
            rows={4}
          />
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
    </>
  );
};

export default ForumPost;

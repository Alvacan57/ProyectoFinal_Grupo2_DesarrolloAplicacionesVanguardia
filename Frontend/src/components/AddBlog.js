import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={2}
          margin={"auto"}
          marginTop={1}
          display="flex"
          flexDirection={"column"}
          width={"40%"}
        >
          <Typography
            className={classes.font}
            fontWeight={"bold"}
            padding={2}
            color="grey"
            variant="h2"
            textAlign={"center"}
            marginTop={-1}
            
          >
            Agrega tu Historia
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Titulo
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
            sx={{ borderRadius: 3, marginTop: 1, fontSize: 20, width:"auto" }}
            multiline

          />


          <InputLabel className={classes.font} sx={labelStyles}>
            Descripcion
          </InputLabel>
          <TextField
            className={classes.font}
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="auto"
            variant="outlined"
            multiline
            rows={6}
          />



          <InputLabel className={classes.font} sx={labelStyles}>
            URL Imagen
          </InputLabel>
          <TextField
            className={classes.font}
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="auto"
            variant="outlined"
            sx={{ borderRadius: 3, marginTop: 1, fontSize: 20, width:"auto" }}
          />
          <Button
            sx={{ mt: 2, borderRadius: 4, borderRadius: 3, marginTop: 4, fontSize: 20, width:"auto"}}
            variant="contained"
            color="info"
            type="submit"
            margin="center"
          >
            Publicar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
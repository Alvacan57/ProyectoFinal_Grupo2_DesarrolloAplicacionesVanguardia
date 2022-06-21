import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const naviagte = useNavigate();
  const dispath = useDispatch();  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({ 
      ...prevState,
      [e.target.name]: e.target.value,
    })); //Funcion 
  };
  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`http://localhost:5000/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={550}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={10}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Registrarse" : "Iniciar Sesión"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Nombre"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            sx={{ borderRadius: 3, marginTop: 3, fontSize: 20, width:300 }}
            type={"email"}
            placeholder="E-mail"
            margin="normal"
            size="normal"
          />
          <TextField
            name="password"
            sx={{ borderRadius: 3, marginTop: 3, fontSize: 20, width:300 }}
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
            size="large"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3, fontSize: 20, width:200 }}
            color="info"
            size="large"

          >
            Ingresar
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3, fontSize: 20, width:200 }}
          >
            Ir a  {isSignup ? "Iniciar Sesion" : "Registro"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
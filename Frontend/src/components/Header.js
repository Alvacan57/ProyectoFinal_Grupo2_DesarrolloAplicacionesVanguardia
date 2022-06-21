import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "33AFFF",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h3">
          Writ Art
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="PUBLICACIONES"
                sx={{ fontSize:15, width:"auto" }}
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="MIS HISTORIAS"
                sx={{ fontSize:15, width:"auto" }}
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="AGREGAR HISTORIA"
                sx={{ fontSize:15, width:"auto" }}
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10, width:150, height:35, fontSize:15}}
                color="primary"
              >
                Iniciar Sesion
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10, width:150, height:35, fontSize:15 }}
                color="primary"
              >
                Registrarse
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10, width:150, height:35, fontSize:15}}
              
              color="info"
            >
              Cerrar Sesion
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
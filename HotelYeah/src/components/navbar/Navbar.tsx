import React from "react";
import { AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Links from "./Links";
import NonAuthLinks from "./NonAuthLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [authorized, setAuthorized] = React.useState(true);

  const useStyles = makeStyles({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
    },
  });

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link to="/">
              <Home fontSize="large" />
            </Link>
          </IconButton>
        </Container>

        <Container className={classes.navbarDisplayFlex}>
          <Links />
        </Container>
        <Container className={classes.navbarDisplayFlex}>
          {authorized === true ? <NonAuthLinks /> : ""}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

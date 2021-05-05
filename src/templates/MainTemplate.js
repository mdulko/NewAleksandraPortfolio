import React from "react";
import PropTypes from "prop-types";
import { Box, CssBaseline, NoSsr, StylesProvider } from "@material-ui/core";
import Nav from "../components/medium/Nav/Nav";
import MainTheme from "../theme/MainTheme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "46px",
    },
  },
}));

const MainTemplate = ({ children }) => {
  const classes = useStyles();
  return (
    <NoSsr>
      <MainTheme>
        <StylesProvider>
          <CssBaseline />
          <Nav />
          <Box mb={8} className={classes.mainBox}>
            {children}
          </Box>
          {/* <Footer /> */}
        </StylesProvider>
      </MainTheme>
    </NoSsr>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;

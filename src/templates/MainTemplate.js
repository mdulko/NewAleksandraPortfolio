import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, CssBaseline, NoSsr, StylesProvider } from "@material-ui/core";
import Nav from "../components/medium/Nav/Nav";
import MainTheme from "../theme/MainTheme";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../components/medium/Footer/Footer";
import pl from "../translations/pl.json";
import en from "../translations/en.json";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    minHeight: "313px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "46px",
    },
  },
}));

const MainTemplate = ({ children }) => {
  const classes = useStyles();
  const [ln, setLanguage] = useState(pl);

  const PL = () => {
    setLanguage(pl);
  };
  const ENG = () => {
    setLanguage(en);
  };
  return (
    <NoSsr>
      <MainTheme>
        <StylesProvider>
          <CssBaseline />
          <Nav ln={ln} PL={PL} ENG={ENG} />
          <Box mb={8} ln={ln} className={classes.mainBox}>
            {children}
          </Box>
          <Footer />
        </StylesProvider>
      </MainTheme>
    </NoSsr>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;

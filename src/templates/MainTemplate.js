import React from "react";
import PropTypes from "prop-types";
import { Box, CssBaseline, NoSsr, StylesProvider } from "@material-ui/core";
import Nav from "../components/medium/Nav/Nav";
import MainTheme from "../theme/MainTheme";

const MainTemplate = ({ children }) => (
  <NoSsr>
    <MainTheme>
      <StylesProvider>
        <CssBaseline />
        <Nav />
        <Box mb={8}>{children}</Box>
        {/* <Footer /> */}
      </StylesProvider>
    </MainTheme>
  </NoSsr>
);

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;

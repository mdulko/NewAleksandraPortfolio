import React from "react";
import { ThemeProvider } from "styled-components";
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import BasicTheme from "./theme";

const MainTheme = ({ ...props }) => {
  const theme = responsiveFontSizes(createMuiTheme(BasicTheme));

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme} {...props} />
    </ThemeProvider>
  );
};

export default MainTheme;

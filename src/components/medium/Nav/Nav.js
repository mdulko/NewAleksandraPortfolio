import React from "react";
import { AppBar, Grid, makeStyles } from "@material-ui/core";
import styled, { css } from "styled-components";
import Text from "../../small/Text/Text";
import themes from "../../../theme/theme";

const AppBarStyled = styled(AppBar)`
  ${() => css`
    padding: 10px 22px;
    background-color: ${themes.palette.white};
    color: ${themes.palette.black};
    font-variant: small-caps;
  `}
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBarStyled position="static">
        <Grid container className={classes.container}>
          <Grid item xs={8}>
            <Text variant="h4" fontWeight={500}>
              Aleksandra Klińska
            </Text>
          </Grid>
          <Grid item xs={1}>
            <Text variant="h6">O mnie</Text>
          </Grid>
          <Grid item xs={1}>
            <Text variant="h6">O mnie</Text>
          </Grid>
          <Grid item xs={1}>
            <Text variant="h6">O mnie</Text>
          </Grid>
          <Grid item xs={1}>
            <Text variant="h6">O mnie</Text>
          </Grid>
        </Grid>
      </AppBarStyled>
    </>
  );
};

export default Nav;

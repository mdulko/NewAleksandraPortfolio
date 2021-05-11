import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainBox: {
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return <Box className={classes.mainBox}></Box>;
};

export default Home;

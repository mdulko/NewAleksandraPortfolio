import React from "react";
import Box from "@material-ui/core/Box/Box";
import Text from "../../components/small/Text/Text";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    minHeight: "200vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Text>Home Page</Text>
    </Box>
  );
};

export default Home;

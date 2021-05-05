import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../../components/large/Carousel/Carousel";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    minHeight: "200vh",
    justifyContent: "center",
  },
}));

const images = [
  "../img/BlueHouse/1.jpg",
  "../img/BlueHouse/2.jpg",
  "../img/BlueHouse/3.jpg",
  "../img/BlueHouse/4.jpg",
  "../img/BlueHouse/5.jpg",
  "../img/BlueHouse/11.jpg",
  "../img/BlueHouse/7.jpg",
  "../img/BlueHouse/8.jpg",
  "../img/BlueHouse/9.jpg",
];

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Carousel imgArray={images} list />
    </Box>
  );
};

export default Home;

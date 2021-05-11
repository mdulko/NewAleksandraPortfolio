import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Carousel from "../../components/large/Carousel/Carousel";
import Title from "../../components/small/Title/Title";
// import Chessboard from "../../components/large/Chessboard/Cheesboard";

const useStyles = makeStyles((theme) => ({
  mainBox: {
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

const Home = ({ ln }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Title>Title</Title>
      <Carousel imgArray={images} ln={ln} />
    </Box>
  );
};

export default Home;

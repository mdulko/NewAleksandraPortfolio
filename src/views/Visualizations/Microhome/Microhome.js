import { Container } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/large/Carousel/Carousel";
import Text from "../../../components/small/Text/Text";
import Title from "../../../components/small/Title/Title";
import {useSelector} from "react-redux";

const Microhome = () => {
  const ln = useSelector(state => state.languageReducer)
  const images = [
    "../../img/BlueHouse/1.jpg",
    "../../img/BlueHouse/2.jpg",
    "../../img/BlueHouse/3.jpg",
    "../../img/BlueHouse/4.jpg",
    "../../img/BlueHouse/5.jpg",
    "../../img/BlueHouse/11.jpg",
    "../../img/BlueHouse/7.jpg",
    "../../img/BlueHouse/8.jpg",
    "../../img/BlueHouse/9.jpg",
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Title>{ln.projects[0][0].title}</Title>
        <Text align="justify"> {ln.projects[0][0].description} </Text>
      </Container>
      <Carousel imgArray={images} ln={ln} list />
    </>
  );
};

export default Microhome;

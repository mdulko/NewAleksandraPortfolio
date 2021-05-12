import { Container } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/large/Carousel/Carousel";
import Text from "../../../components/small/Text/Text";
import Title from "../../../components/small/Title/Title";

const CoffeeTable = ({ ln }) => {
  const images = [
    "../../img/Stolik/1.jpg",
    "../../img/Stolik/2.jpg",
    "../../img/Stolik/3.jpg",
    "../../img/Stolik/4.jpg",
    "../../img/Stolik/5.jpg",
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Title>{ln.projects[1][0].title}</Title>
        <Text align="justify"> {ln.projects[1][0].description} </Text>
      </Container>
      <Carousel imgArray={images} ln={ln} list />
    </>
  );
};

export default CoffeeTable;

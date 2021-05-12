import { Container } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/large/Carousel/Carousel";
import Description from "../../../components/small/Description/Description";
import Title from "../../../components/small/Title/Title";

const ReadingRoom = ({ ln }) => {
  const images = [
    "../../img/Czytelnia/1.jpg",
    "../../img/Czytelnia/2.jpg",
    "../../img/Czytelnia/3.jpg",
    "../../img/Czytelnia/4.jpg",
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Title>{ln.projects[3][0].name}</Title>
        <Description align="justify">
          {ln.projects[3][0].description}
        </Description>
      </Container>
      <Carousel imgArray={images} ln={ln} list />
    </>
  );
};

export default ReadingRoom;

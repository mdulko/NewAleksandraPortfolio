import { Container } from "@material-ui/core";
import React from "react";
import ImagesInColumn from "../../../components/large/ImagesInColumn/ImagesInColumn";
import Description from "../../../components/small/Description/Description";
import Title from "../../../components/small/Title/Title";

const SimpleSeat = ({ ln }) => {
  const content = [
    {
      img: "../../img/Siedzisko1/1.jpg",
    },
    {
      img: "../../img/Siedzisko1/2.jpg",
    },
  ];

  return (
    <Container Container maxWidth="xl">
      <Title>{ln.projects[1][1].name}</Title>
      <Description> {ln.projects[1][1].description}</Description>
      <ImagesInColumn boxArray={content} ln={ln} />
    </Container>
  );
};

export default SimpleSeat;

import { Container } from "@material-ui/core";
import React from "react";
import ImagesInColumn from "../../../components/large/ImagesInColumn/ImagesInColumn";
import Description from "../../../components/small/Description/Description";
import Title from "../../../components/small/Title/Title";

const TearSeat = ({ ln }) => {
  const content = [
    // {
    //   img: "../../img/Siedzisko2/1.jpg",
    // },
    // {
    //   img: "../../img/Siedzisko2/2.jpg",
    // },
    // {
    //   img: "../../img/Siedzisko2/3.jpg",
    // },
    {
      img: "../../img/Siedzisko2/4.jpg",
    },
    {
      img: "../../img/Siedzisko2/5.jpg",
    },
    {
      img: "../../img/Siedzisko2/6.jpg",
    },
  ];

  return (
    <Container Container maxWidth="xl">
      <Title>{ln.projects[1][2].name}</Title>
      <Description> {ln.projects[1][2].description}</Description>
      <Description> {ln.projects[1][2].subDescription}</Description>
      <ImagesInColumn boxArray={content} ln={ln} />
    </Container>
  );
};

export default TearSeat;

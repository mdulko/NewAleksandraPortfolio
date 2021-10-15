import { Container } from "@material-ui/core";
import React from "react";
import ImagesInColumn from "../../../components/large/ImagesInColumn/ImagesInColumn";
import Description from "../../../components/small/Description/Description";
import Title from "../../../components/small/Title/Title";
import {useSelector} from "react-redux";

const TearSeat = () => {
    const ln = useSelector(state => state.languageReducer)
  const content = [
    {
      img: "../../img/SalonFryzjerski/1.jpg",
    },
    {
      img: "../../img/SalonFryzjerski/3.jpg",
    },
  ];

  return (
    <Container Container maxWidth="xl">
      <Title>{ln.projects[2][0].name}</Title>
      <Description> {ln.projects[2][0].description}</Description>
      <ImagesInColumn boxArray={content} ln={ln} />
    </Container>
  );
};

export default TearSeat;

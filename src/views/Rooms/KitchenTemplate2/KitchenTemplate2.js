import { Container } from "@material-ui/core";
import React from "react";
import ImagesInColumn from "../../../components/large/ImagesInColumn/ImagesInColumn";
import Title from "../../../components/small/Title/Title";

const KitchenTemplate2 = ({ ln }) => {
  const content = [
    {
      img: "../../img/Kuchnia2/1.jpg",
    },
    {
      img: "../../img/Kuchnia2/2.jpg",
    },
    {
      img: "../../img/Kuchnia2/3.jpg",
    },
    {
      img: "../../img/Kuchnia2/4.jpg",
    },
    {
      img: "../../img/Kuchnia2/5.jpg",
    },
    // {
    //   img: "../../img/Kuchnia2/6.jpg",
    //   title: "Rzuty Techniczne",
    //   titleEng: "Technical section",
    // },
    // {
    //   img: "../../img/Kuchnia2/7.jpg",
    // },
    // {
    //   img: "../../img/Kuchnia2/8.jpg",
    // },
  ];

  return (
    <Container maxWidth="xl">
      <Title>{ln.projects[3][2].name}</Title>
      <ImagesInColumn boxArray={content} ln={ln} />
    </Container>
  );
};

export default KitchenTemplate2;

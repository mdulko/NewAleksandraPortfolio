import React from "react";
import { Container } from "@material-ui/core";
import CarouselLinks from "../../components/large/CarouselLinks/CarouselLinks";

const Home = ({ ln }) => {
  const images = [
    {
      src: "../../img/BlueHouse/1.jpg",
      to: "/projects/visualizations/microhome-2020",
    },
    {
      src: "../../img/Karuzela/2.jpg",
      to: "/projects/visualizations/minilab",
    },
    {
      src: "../../img/Zukowo/1.jpg",
      to: "/projects/visualizations/zukowo",
    },
    {
      src: "../../img/Stolik/1.jpg",
      to: "/projects/furnitures/coffee-table",
    },
    {
      src: "../../img/Siedzisko2/5.jpg",
      to: "/projects/furnitures/tear-seat",
    },
    {
      src: "../../img/Kuchnia1/2.jpg",
      to: "/projects/rooms/kitchen-design-1",
    },
    {
      src: "../../img/Kuchnia2/1.jpg",
      to: "/projects/rooms/kitchen-design-2",
    },
  ];

  return (
    <>
      <Container maxWidth="xl"></Container>
      <CarouselLinks imgArray={images} ln={ln} />
    </>
  );
};

export default Home;

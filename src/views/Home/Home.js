import React from "react";
import { Box, Container, Grid, Link, makeStyles } from "@material-ui/core";
import Description from "../../components/small/Description/Description";
import ImgComp from "../../components/small/ImgComp/ImgComp";
import Title from "../../components/small/Title/Title";
import Text from "../../components/small/Text/Text";
import themes from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    padding: theme.spacing(5, 0),
  },
  itemGrid: {
    paddingTop: theme.spacing(5),
  },
  mainBox: {
    display: "flex",
    flexFlow: "column wrap",
  },
  block: {
    display: "flex",
    borderBottom: "2px solid black",
    width: "50%",
    "& img": {
      width: "60% !important",
    },
    "&:nth-child(2n-1)": {
      alignSelf: "flex-end",
      flexDirection: "row-reverse",
    },
    "&:hover": {
      textDecoration: "none",
    },
    "&:hover h6::after": {
      transform: "translate(-50%, 5px) scale(1)",
    },
    "&:hover img": {
      filter: "blur(2px)",
    },
  },
  blockText: {
    alignSelf: "center",
    width: "40%",
    textAlign: "center",
    textDecoration: "none",
    color: [themes.palette.black],
    "&::after": {
      content: `""`,
      position: "relative",
      bottom: "0px",
      left: "50%",
      display: "block",
      width: "60%",
      height: "2px",
      backgroundColor: [themes.palette.black],
      transition: "transform 0.15s linear 0s",
      transform: "translate(-50%, 5px) scale(0)",
    },
  },
}));

const Home = ({ ln }) => {
  const classes = useStyles();
  const images = [
    {
      src: "../../img/BlueHouse/1.jpg",
      to: "/projects/visualizations/microhome-2020",
      name: "Microhome-2020",
    },
    {
      src: "../../img/Karuzela/2.jpg",
      to: "/projects/visualizations/minilab",
      name: "miniLAB",
    },
    {
      src: "../../img/Zukowo/1.jpg",
      to: "/projects/visualizations/zukowo",
      name: "Apartment realization",
    },
    {
      src: "../../img/Stolik/1.jpg",
      to: "/projects/furnitures/coffee-table",
      name: "Coffee table",
    },
    {
      src: "../../img/Siedzisko2/5.jpg",
      to: "/projects/furnitures/tear-seat",
      name: "Tear seat",
    },
    {
      src: "../../img/Kuchnia1/2.jpg",
      to: "/projects/rooms/kitchen-design-1",
      name: "Kitchen - design 1.",
    },
    {
      src: "../../img/Kuchnia2/1.jpg",
      to: "/projects/rooms/kitchen-design-2",
      name: "Kitchen - design 2.",
    },
  ];

  return (
    <>
      <Container maxWidth="xl">
        <Title style={{ margin: 0 }}>{ln.about.name}</Title>
        <Text variant="h5" style={{ color: themes.palette.red }} align="center">
          {ln.about.position}
        </Text>

        <Grid container justify="space-around" className={classes.mainGrid}>
          <Grid item xs={5} md={3}>
            <ImgComp src="../../img/profilePhoto.png" />
          </Grid>
          <Grid item xs={12} md={7} className={classes.itemGrid}>
            <Description>{ln.about.shortDesc}</Description>
          </Grid>
        </Grid>
        <Box className={classes.mainBox}>
          {images.map((item, index) => (
            <Link key={index} href={item.to} className={classes.block}>
              <ImgComp src={item.src} />
              <Text variant="h6" className={classes.blockText}>
                {item.name}
              </Text>
            </Link>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;

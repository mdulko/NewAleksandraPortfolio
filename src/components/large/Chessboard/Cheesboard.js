import React from "react";
import PropTypes from "prop-types";
import { Box, Container, makeStyles } from "@material-ui/core";
import Text from "../../small/Text/Text";
import Title from "../../small/Title/Title";
import ImgComp from "../../small/ImgComp/ImgComp";

const useStyles = makeStyles((theme) => ({
  columnsBox: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    padding: theme.spacing(2, 20),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2, 14),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 6),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
    },
  },
  rowBox: {
    display: "flex",
    flexFlow: "column wrap",
  },
  imgBox: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
    "& img": {
      padding: theme.spacing(1, 2),
      width: "50%",
      maxHeight: "470px",
    },
  },
  topicLeft: {
    alignSelf: "flex-start",
    paddingLeft: theme.spacing(6),
    fontVariant: "small-caps",
  },
  topicRight: {
    alignSelf: "flex-end",
    paddingRight: theme.spacing(6),
    fontVariant: "small-caps",
  },
}));

const Chessboard = ({ boxArray, descripiton, ln }) => {
  const classes = useStyles();
  const stylesEven = {
    backgroundColor: "#21202670",
    boxShadow: " 350px 0 0 #21202670",
    justifyContent: "flex-start",
  };
  const stylesOdd = {
    backgroundColor: "#dfdfdf",
    boxShadow: " -350px 0 0 #dfdfdf",
  };
  // to show titles set title

  const splitArr = boxArray.reduce(function (box, key, index) {
    //  console.log(index);
    return (
      (index % 2 === 0 ? box.push([key]) : box[box.length - 1].push(key)) && box
    );
  }, []);
  const showImages = splitArr.map((item, index) => {
    // console.log(index % 2, item[1]);
    let n = 0;
    const ss = item.map((item2, index) => {
      return item2.src === undefined ? null : (
        <Box key={index} className={classes.imgBox}>
          <ImgComp src={item2.src} />
        </Box>
      );
    });

    const odd = index % 2 === 0 ? ss : null;
    const even = !(index % 2 === 0) ? ss : null;
    // console.log(`parzyste ${odd}`);
    // console.log(`nieparzyste ${even}`);
    // console.log(ss.item);
    return !(odd === null) ? (
      <Box className={classes.rowBox} key={index}>
        <Text variant="h4" className={classes.topicLeft}>
          {ln.language === "pl" ? item[n].title : item[n].titleEng}
        </Text>
        <Box key={index} className={classes.imgBox} style={stylesOdd}>
          {odd}
        </Box>
      </Box>
    ) : (
      <Box className={classes.rowBox} key={index}>
        <Text variant="h4" className={classes.topicRight}>
          {ln.language === "pl" ? item[n].title : item[n].titleEng}
        </Text>
        <Box key={index} className={classes.imgBox} style={stylesEven}>
          {even}
        </Box>
      </Box>
    );
  });
  return (
    <>
      <Container maxWidth="xl">
        <Title>mini LAB</Title>
        <div className="underline"></div>
        {descripiton.map((item, index) => (
          <Text align="justify" key={index}>
            {item}
          </Text>
        ))}
      </Container>
      <Box className={classes.columnsBox}>{showImages}</Box>
    </>
  );
};

Chessboard.propTypes = {
  boxArray: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string,
      titleEng: PropTypes.string,
    })
  ),
  descripiton: PropTypes.arrayOf(PropTypes.string),
};

export default Chessboard;

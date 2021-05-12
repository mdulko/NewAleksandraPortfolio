import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import ImgComp from "../../small/ImgComp/ImgComp";
import Title from "../../small/Title/Title";

const useStyles = makeStyles(() => ({
  mainBox: {
    padding: "10px 0",
  },
}));

const ImagesInColumn = ({ boxArray, ln }) => {
  const classes = useStyles();

  const displayImages = boxArray.map((item, index) => (
    <Box className={classes.mainBox} key={index}>
      {ln.language === "pl"
        ? item.title && <Title> {item.title} </Title>
        : item.title && <Title> {item.titleEng} </Title>}
      <ImgComp src={item.img} />
    </Box>
  ));

  return <>{displayImages}</>;
};

ImagesInColumn.propTypes = {
  boxArray: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string,
      titleEng: PropTypes.string,
    })
  ),
};

export default ImagesInColumn;

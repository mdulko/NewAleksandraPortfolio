import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImgComp from "../../small/ImgComp/ImgComp";
import { makeStyles, Box, Link } from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
  },
  slider: {
    display: "flex",
    maxWidth: "1200px",
    overflow: "hidden",
    margin: "0 auto",
    marginBottom: "20px",
    paddingTop: theme.spacing(2),
  },
  onlySlider: {
    maxWidth: "1400px",
  },
  singleSlide: {
    display: "flex",
    justifySelf: "center",
    minWidth: "100%",
    transition: "0.5s",
  },
  imagesInRow: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
  },
  smallImage: {
    display: "flex",
    margin: "0 5px",
    border: "1px solid hsl(0, 0%, 80%)",
  },
  goLeft: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "0 20px",
    zIndex: 10,
    cursor: "pointer",
  },
  link: {
    width: "100%",
  },
}));
const CarouselLinks = ({ imgArray, list }) => {
  const classes = useStyles();
  const [x, setX] = useState(0);
  const arrayLength = imgArray.length;
  const goLeft = () => {
    x === 0 ? setX(-100 * (arrayLength - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (arrayLength - 1) ? setX(0) : setX(x - 100);
  };
  const time = 3000;

  useEffect(() => {
    const changeSlide = () => {
      setX(x - 100);
      x === -100 * (arrayLength - 1) ? setX(0) : setX(x - 100);
    };
    const intervalChange = setInterval(() => {
      changeSlide();
    }, time);
    return () => clearInterval(intervalChange);
  });
  const takeId = document.querySelectorAll("#img");
  return (
    <Box className={classes.mainBox}>
      <Box
        className={
          list
            ? `${classes.slider} `
            : `${classes.slider}  ${classes.onlySlider} `
        }
      >
        {imgArray.map((item, index) => {
          return (
            <div
              key={index}
              className={
                list
                  ? `${classes.singleSlide} `
                  : `${classes.singleSlide}  ${classes.onlySlider} `
              }
              id={`img`}
              style={{ transform: `translateX(${x}%)` }}
            >
              <Link href={item.to} className={classes.link}>
                <ImgComp src={item.src} />
              </Link>
            </div>
          );
        })}
        <div
          className={classes.goLeft}
          style={{ left: `calc(-${arrayLength} * 100%` }}
          onClick={goLeft}
        >
          <ArrowBackIosOutlinedIcon fontSize="large"></ArrowBackIosOutlinedIcon>
        </div>
        <div
          className={classes.goLeft}
          style={{ right: `calc(${arrayLength - 1} * 100% + 150px` }}
          onClick={goRight}
        >
          <ArrowForwardIosOutlinedIcon fontSize="large"></ArrowForwardIosOutlinedIcon>
        </div>
      </Box>
      {list && (
        <Box className={classes.imagesInRow}>
          {imgArray.map((item, index) => {
            const transX = index * -100;
            const changeId = () => {
              takeId[index].style.transform = `translateX(${transX}%)`;
              setX(index * -100);
            };
            return (
              <div
                key={index}
                className={classes.smallImage}
                onClick={changeId}
              >
                <ImgComp src={item.src} />
              </div>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

CarouselLinks.propTypes = {
  imgArray: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  list: PropTypes.bool,
};

export default CarouselLinks;

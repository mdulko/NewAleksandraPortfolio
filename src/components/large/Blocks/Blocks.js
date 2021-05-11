import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Text from "../../small/Text/Text";
import { Box } from "@material-ui/core";
import ImgComp from "../../small/ImgComp/ImgComp";

const useStyles = makeStyles((theme) => ({
  blocks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainBox: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1400px",
    justifyContent: "space-around",
    margin: theme.spacing(4, 0),
  },
  element: {
    display: "flex",
    flexFlow: "column wrap",
    flexBasis: "33%",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexBasis: "49%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      flexBasis: "98%",
    },
  },
  topicItem: {
    fontVariant: "small-caps",
  },
}));

const Blocks = ({ arrBlocks, descripiton, ln }) => {
  const classes = useStyles();
  const displayBlocks = arrBlocks.map((item, index) => {
    return (
      <Box className={classes.element} key={index}>
        <div className="blocks_box-element--image">
          <ImgComp src={item.src} />
        </div>
        <Text className={classes.topicItem} align="center" variant="h6">
          {ln.language === "pl" ? item.name : item.nameEng}
        </Text>
      </Box>
    );
  });
  const displayDescription = descripiton.map((item, index) => (
    <Text key={index} variant="subtitle1" align="center">
      {ln.language === "pl" ? item.topic : item.topicEng}: {item.value}
    </Text>
  ));

  return (
    <div className={classes.blocks}>
      {displayDescription}

      <div className={classes.mainBox}>{displayBlocks}</div>
    </div>
  );
};

Blocks.propTypes = {
  boxArray: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string,
      nameEng: PropTypes.string,
    })
  ),
  descripiton: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string,
      topicEng: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};

export default Blocks;

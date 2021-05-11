import React, { useState } from "react";
import { AppBar, makeStyles, Box, Button } from "@material-ui/core";
import styled, { css } from "styled-components";
import Text from "../../small/Text/Text";
import themes from "../../../theme/theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LinkTo from "../../small/LinkTo/LinkTo";
import ImgComp from "../../small/ImgComp/ImgComp";
import lnPL from "../../../images/PL.png";
import lnENG from "../../../images/UK.png";

const AppBarStyled = styled(AppBar)`
  ${({ theme }) => css`
    background-color: ${themes.palette.white};
    color: ${themes.palette.black};
    font-variant: small-caps;
    text-align: center;
    box-shadow: none;
    border-top: 1px solid hsl(0, 0%, 85%);
    border-bottom: 1px solid hsl(0, 0%, 85%);
    ${theme.breakpoints.down("xs")} {
      padding: ${theme.spacing(5, 0, 5, 10)};
      position: fixed;
      transform: translateX(-100%);
      top: 46px;
    }
  `}
`;
const BoxStyled = styled(Box)`
  ${() => css`
    background-color: ${themes.palette.white};
    position: absolute;
    z-index: 100;
  `}
`;
const BoxStyledSecond = styled(Box)`
  ${({ theme }) => css`
    padding: 10px 20px;
    text-align: start;
    font-weight: 500;
    cursor: pointer;
    z-index: 100;
    :hover {
      color: ${themes.palette.red};
      background-color: ${themes.palette.onHover};
    }
    ${theme.breakpoints.down("xs")} {
      :hover {
        background-color: ${themes.palette.white};
      }
    }
  `}
`;
const BoxStyledLi = styled(Box)`
  ${({ theme }) => css`
    background-color: ${themes.palette.white};
    border-left: 1px solid black;
    position: absolute;
    text-align: start;
    right: 0;
    z-index: 100;
    transform: translate(100%, -42px);
    ${theme.breakpoints.down("xs")} {
      position: relative;
      right: auto;
      transform: none;
    }
  `}
`;

const ButtonStyled = styled(Button)`
  ${() => css`
    font-variant: small-caps;
    text-transform: none;
    font-size: 1rem;
    border-bottom: 1px solid black;
    border-radius: 0px;
    ::after {
      content: "";
      width: 60%;
      height: 1px;
      background-color: white;
      position: absolute;
      right: 0;
      bottom: -1px;
    }
    }
  `}
`;

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      height: "100vh",
    },
  },
  title: {
    fontVariant: "small-caps",
    textAlign: "center",
    padding: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid hsl(0, 0%, 85%)",
    },
  },
  navTitle: {
    padding: theme.spacing(0, 2),
    margin: theme.spacing(0, 6),

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 0),
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      position: "fixed",
      top: theme.spacing(0.6),
      left: theme.spacing(1),
    },
  },
  openMobileMenu: {
    transform: "translateX(-10%) !important",
  },
  boxFixed: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "hsl(0, 0%, 100%)",
      position: "fixed",
      width: "100%",
      zIndex: "100",
    },
  },
  language: {
    display: "flex",
    position: "absolute",
    right: 0,
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(5),
    },
  },
  lnItem: {
    width: "20px",
    height: "20px",
    marginRight: theme.spacing(1),
    cursor: "pointer",
    "& img": {
      border: "1px solid black",
      borderRadius: "50%",
      width: "100%",
    },
  },
}));

const Nav = ({ ln, PL, ENG }) => {
  const classes = useStyles();
  const [isTextSame, setIsTextSame] = useState("");
  const [openProjectList, setOpenProjectList] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const displayButton = (text) => {
    return (
      <ButtonStyled onClick={() => setIsTextSame(text)}>{text}</ButtonStyled>
    );
  };

  const projectList = ln.navProjetsTitles.map((item, index) => {
    const projectElement = ln.projects[index].map((element, index) => (
      <Text key={index}>
        {displayButton(<LinkTo to={element.url} label={element.name} />)}
      </Text>
    ));
    return (
      <BoxStyledSecond
        key={index}
        onClick={() => {
          setIsTextSame(item);
        }}
      >
        <Text variant="h6">{item}</Text>
        {isTextSame === item && (
          <BoxStyledLi
            onClick={() => {
              setOpenProjectList(false);
              setOpenMobileNav(false);
            }}
          >
            {projectElement}
          </BoxStyledLi>
        )}
      </BoxStyledSecond>
    );
  });

  return (
    <>
      <Box className={classes.boxFixed}>
        <Box
          className={classes.menuIcon}
          onClick={() => setOpenMobileNav((prevOpen) => !prevOpen)}
        >
          {openMobileNav ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </Box>
        <Text variant="h4" className={classes.title}>
          Aleksandra Klińska
        </Text>
      </Box>
      <AppBarStyled
        position="static"
        className={openMobileNav && classes.openMobileMenu}
      >
        <Box className={`${classes.mainBox} ${classes.title}`}>
          <Text variant="h6" className={classes.navTitle}>
            <LinkTo to={ln.navTopics.home.to} label={ln.navTopics.home.name} />
          </Text>
          <Box>
            <Text
              variant="h6"
              className={classes.navTitle}
              onClick={() => {
                setOpenProjectList((prevOpen) => !prevOpen);
                setIsTextSame("");
              }}
            >
              <LinkTo label={ln.navTopics.projects.name} />
            </Text>
            {openProjectList && <BoxStyled>{projectList}</BoxStyled>}
          </Box>
          <Text variant="h6" className={classes.navTitle}>
            <LinkTo
              to={ln.navTopics.about.to}
              label={ln.navTopics.about.name}
            />
          </Text>
          <Text variant="h6" className={classes.navTitle}>
            <LinkTo
              to={ln.navTopics.contact.to}
              label={ln.navTopics.contact.name}
            />
          </Text>

          <Box className={classes.language}>
            <Box className={classes.lnItem} onClick={PL}>
              <ImgComp src={lnPL} alt="" />
            </Box>
            <Box className={classes.lnItem} onClick={ENG}>
              <ImgComp src={lnENG} alt="" />
            </Box>
          </Box>
        </Box>
      </AppBarStyled>
    </>
  );
};

export default Nav;

import React from "react";
import styled, { css } from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Title from "../../small/Title/Title";
import SocialMedia from "../../small/SocialMedia/SocialMedia";
import themes from "../../../theme/theme";
import pl from "../../../translations/pl.json";
import Text from "../../small/Text/Text";
import FormEmail from "../FormEmail/FormEmail";

const Fill = styled(Box)`
  ${({ theme }) => css`
    background-color: #212026;
    color: #fff;
    margin-top: auto;
  `}
`;

const useStyles = makeStyles((theme) => ({
  copyrights: {
    backgroundColor: themes.palette.black,
    textAlign: "center",
    padding: theme.spacing(0.4, 0),
    marginTop: 60,
    "& p": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
    },
  },
  socials: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(4),
    },
  },
}));

const socialData = [
  {
    logo: <FacebookIcon fontSize="large" />,
    label: "Aleksandra Klinska",
  },
  {
    logo: <InstagramIcon fontSize="large" />,
    label: "k___aleksandra",
  },
  {
    logo: <LinkedInIcon fontSize="large" />,
    label: "Aleksandra Klinska",
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <Fill>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Title>Social Media</Title>
            <Box className={classes.socials}>
              {socialData.map((item, index) => {
                return (
                  <SocialMedia
                    key={index}
                    logo={item.logo}
                    label={item.label}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Title>Kontakt</Title>
            <FormEmail />
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.copyrights}>
        <Text>{pl.copyrights}</Text>
      </Box>
    </Fill>
  );
};

export default Footer;

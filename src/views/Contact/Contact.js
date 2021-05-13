import React from "react";
import { Container, Link, makeStyles } from "@material-ui/core";
import Text from "../../components/small/Text/Text";
import Title from "../../components/small/Title/Title";
import themes from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
  name: {
    textAlign: "center",
    color: themes.palette.red,
    cursor: "pointer",

    "&:hover": {
      textDecoration: "none",
    },
    "&>h4": {
      margin: theme.spacing(1),
    },
  },
}));

const Contact = ({ ln }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Title>{ln.contact.topInfo}</Title>
      {ln.contact.info.map((item, index) => (
        <Link href={item.url} key={index} className={classes.name}>
          <Text variant="h4">{item.name}</Text>
        </Link>
      ))}
      <Title>{ln.contact.bottomInfo}</Title>
    </Container>
  );
};

export default Contact;

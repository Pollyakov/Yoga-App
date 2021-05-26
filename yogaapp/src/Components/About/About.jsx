import React from "react";
import Container from "@material-ui/core/Container";
import Title from "../Title";
import "./about.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
 
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm">
        <br />
        <Title id="title">About</Title>
        <Card  className={classes.root}>
          <CardContent>
            <Typography  id="text" variant="body2" component="p">
              This app could help a yoga teacher to build a lesson, to find new
              poses due to their students level and poses categorys needed, the
              seqiences that are biult could be printed and used as cheatsheet
              on a lesson in a studio.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default About;

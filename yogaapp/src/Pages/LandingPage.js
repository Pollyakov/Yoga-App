
import Sequences from "./Sequences";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import styled, { css } from 'styled-components';


const LandingPage = () => {
  const useStyles = makeStyles(theme => ({
    color: {
    backgroundColor: "#f3ecdb", //antiquewhite
    }
  })
  )
    const classes = useStyles();



  return (
    
    <Container 
    maxWidth="md"
    className={classes.color}>

    <h1>Your Sequences</h1>
      <br/>
      <Sequences/>
      </Container> 
    
  );
};

export default LandingPage;

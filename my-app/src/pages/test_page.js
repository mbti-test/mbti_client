import React from "react";
import SubNavBar from "../components/nav_bar";
import Footer from "../components/footer";
import TestQuestionTemplate from "../templates/test_question";
import TestQuestionTemplateTablet from "../templates/test_question_tablet";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "black",
  },

  container: {
    height: "100vh",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  emptyRow: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },

  emptyGrid: {
    gridRow: "span 10",
    gridColumn: "span 2",
  },

  testGrid: {
    gridColumn: "span 8",
    gridRow: "span 10",
  },
  grid: {
    gridColumn: "3/span 8",
    gridRow: "3/span 10",
  }
}));

export function TestPage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <PC>
        <SubNavBar />
        <Grid className={classes.container}>
          <Grid className={classes.grid}>
          <TestQuestionTemplate />
          </Grid>
          <Grid className={classes.emptyGrid} item></Grid>
        </Grid>
        <Footer />
      </PC>
      <Mobile>mobile</Mobile>

      <Tablet>
      <SubNavBar />
        <Grid className={classes.container}>
          <Grid className={classes.grid}>
          <TestQuestionTemplateTablet />
          </Grid>
          <Grid className={classes.emptyGrid} item></Grid>
        </Grid>
        <Footer />
      </Tablet>

      <PCwide>
      <SubNavBar />
        <Grid className={classes.container}>
          <Grid className={classes.grid}>
          <TestQuestionTemplate />
          </Grid>
          <Grid className={classes.emptyGrid} item></Grid>
        </Grid>
        <Footer />
      </PCwide>
    </Box>
  );
}

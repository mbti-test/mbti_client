import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, Link, Typography } from "@material-ui/core";
import { useStyles } from "./styles/recommend_contents_styles";
import { Mobile } from "../components/MediaQuery";
import ReactGA from "react-ga";

function LinkButton({ url }) {
  const classes = useStyles();
  useEffect(() => {
    getGA();
  }, []);

  const getGA = () => {
    ReactGA.initialize("UA-196189871-2");
  };

  if (url[4] === "n") {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <Button
          className={classes.mobileMovieLinkBtn}
          onClick={() => {
            ReactGA.initialize("UA-196189871-2");
            ReactGA.event({
              category: "Watch Movie",
              action: "link to netflix",
              label: "https://" + url,
            });
          }}
        >
          <Typography className={classes.movieLinkText}>
            넷플릭스에서 확인하기
          </Typography>
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <Button
          className={classes.mobileMovieLinkBtn}
          onClick={() => {
            ReactGA.initialize("UA-196189871-2");
            ReactGA.event({
              category: "Watch Movie",
              action: "link to watcha",
              label: "https://" + url,
            });
          }}
        >
          <Typography className={classes.movieLinkText}>
            왓챠에서 확인하기
          </Typography>
        </Button>
      </Link>
    );
  }
}

function RestartButton() {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
      <Button className={classes.mobilerestartBtn}>
        <Typography className={classes.restartBtnText}>
          테스트 다시 하기
        </Typography>
      </Button>
    </Link>
  );
}

function RecommendComponent({ data, value }) {
  const classes = useStyles();

  return (
    <Box>
      <Mobile>
        <Box className={classes.mobileRecommendTitleBox}>
          <Box className={classes.mobileRecommendTitleText}>{value}</Box>
          <Box className={classes.mobileRecommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
        </Box>
        <Box className={classes.mobileImageBox}>
          <img
            className={classes.mobileposterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Box>
        <Box className={classes.mobileRecommendDescText}>
          {data.shortDesc.split("\n").map((line) => {
              return (
              <span className={classes.span}>
                {line}
                <br />
              </span>
              )
          })}
        </Box>
        <Box className={classes.mobileMovieLinkBtnBox}>
          <LinkButton url={data.movieUrl} />
        </Box>
        <Box className={classes.mobileEmptynBox}></Box>
      </Mobile>
    </Box>
  );
}

export default function MobileRecommendContentsTemplate({ data }) {
  const classes = useStyles();

  return (
    <Mobile>
      <Box className={classes.mobileroot}>
        <Box className={classes.mobileRecommendBox1} item>
          <RecommendComponent
            data={data.good}
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Box>
        <Box className={classes.mobileRecommendBox2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
          />
        </Box>
        <Box className={classes.mobileRestartBtnBox}>
          <RestartButton />
        </Box>
      </Box>
    </Mobile>
  );
}

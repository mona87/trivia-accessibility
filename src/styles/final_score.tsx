/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fadeIn } from "./animation_styles";

export const finalStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#2D2D2D",
    animation: `${fadeIn} .6s `,
    fontSize: "1.6rem"
  });

export const messageStyle = () =>
  css({
    fontSize: "3.6rem",
    fontWeight: 700,
    display: "inline-block"
  });

export const resultStyle = () =>
  css({
    color: "#2D2D2D",
    marginTop: "1.8rem",
    display: "inline-block"
  });

export const highScoreStyle = () =>
  css({
    color: "#2D2D2D",
    marginTop: "1.6rem",
    display: "inline-block"
  });

export const triviaButtonStyle = () =>
  css({
    display: "flex",
    justifyContent: "center"
  });

export const medalStyle = () =>
  css({
    width: "10rem",
    filter: "drop-shadow(0 0 .2rem darkgray)",
    display: "flex",
    alignSelf: "center",
    marginBottom: "2rem"
  });

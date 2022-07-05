/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fadeIn, colorChange } from "./animation_styles";

export const headerStyle = () =>
  css({
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    fontSize: "1.6rem"
  });

export const questionStyle = () =>
  css({
    display: "flex",
    padding: "1rem, 0",
    textAlign: "left",
    marginTop: "1.6rem",
    animation: `${fadeIn} .4s `
  });

export const numberStyle = () =>
  css({
    display: "flex",
    fontSize: "2rem",
    "@media (max-width: 50rem)": {
      fontSize: "1.8rem"
    }
  });

export const scoreStyle = () =>
  css({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    fontWeight: 700,
    fontSize: "2rem",
    "@media (max-width: 50rem)": {
      flexDirection: "column",
      marginTop: "2rem",
      height: "6rem",
      textAlign: "left"
    }
  });

export const counterStyle = () =>
  css({
    animation: `${colorChange} .7s `,
    marginLeft: ".5rem"
  });

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { slideUp } from "./animation_styles";

export const wrapper = () =>
  css({
    display: "flex",
    lineHeight: 1.5,
    minWidth: "35rem",
    padding: "0 2rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(6,84,170,1) 0%, rgba(0,212,255,1) 100%)",
    fontFamily: "Roboto"
  });

export const contentStyle = () =>
  css({
    minHeight: "38rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    maxWidth: "80.8rem",
    width: "100%",
    padding: "5.6rem 4.8rem 4.8rem 4.8rem",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    filter: "drop-shadow(0 0 .2rem  gray)"
  });

export const textStyle = (correctAnswer?: boolean) =>
  css({
    color: correctAnswer ? "#065927" : "#FF0000",
    fontSize: "1.6rem",
    textAlign: "left",
    fontWeight: 700,
    position: "relative",
    marginTop: "2.5rem",
    animation: `${slideUp} .3s `,
    "@media (max-width: 50rem)": {
      alignSelf: "center"
    }
  });

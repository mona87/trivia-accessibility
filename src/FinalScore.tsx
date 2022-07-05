/** @jsxImportSource @emotion/react */
import TriviaButton from "./TriviaButton";
import { MouseEvent, useEffect, useState } from "react";
import { ReactComponent as GoldMedal } from "./svgs/gold-medal.svg";
import { ReactComponent as SilverMedal } from "./svgs/silver-medal.svg";
import { ReactComponent as BronzeMedal } from "./svgs/bronze-medal.svg";
import {
  finalStyle,
  medalStyle,
  messageStyle,
  resultStyle,
  highScoreStyle,
  triviaButtonStyle
} from "./styles/final_score";

type Score = {
  date: string;
  score: number;
  questions: number;
};

const FinalScore = ({
  setGameOver,
  score,
  questions
}: {
  setGameOver: (b: boolean) => void;
  score: number;
  questions: number;
}) => {
  const handleButton = (e: MouseEvent) => {
    setGameOver(false);
  };

  const [localScores, setLocalScores] = useState<Score[]>(
    JSON.parse(window.localStorage.getItem("scores") || "[{}]")
  );
  const [maxScore, setMaxScore] = useState<Score>();
  const [message, setMessage] = useState<string>("");

  const formatDate = () => {
    const d = new Date();
    const date = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
    return date;
  };

  const showMedals = () => {
    const percentage = (score / questions) * 100;
    switch (true) {
      case percentage >= 80:
        return <GoldMedal css={medalStyle()} />;
      case percentage >= 50 && percentage < 80:
        return <SilverMedal css={medalStyle()} />;
      default:
        return <BronzeMedal css={medalStyle()} />;
    }
  };

  useEffect(() => {
    if (!localScores) {
      window.localStorage.setItem(
        "scores",
        JSON.stringify([{ date: formatDate(), score, questions }])
      );
      setLocalScores([{ date: formatDate(), score, questions }]);
    } else {
      window.localStorage.setItem(
        "scores",
        JSON.stringify([
          ...localScores,
          { date: formatDate(), score, questions }
        ])
      );
      const max = localScores.reduce((max: Score, item: Score) =>
        max.score > item.score ? max : item
      );
      console.log("max", max);
      setMaxScore(max);
    }

    const percentage = (score / questions) * 100;
    switch (true) {
      case percentage >= 80:
        setMessage("You're a Trivia Master!");
        break;
      case percentage >= 50 && percentage < 80:
        setMessage("You're a Trivia Expert!");
        break;
      default:
        setMessage("You're a Trivia Rookie!");
    }
  }, [questions, score, localScores]);

  console.log(JSON.parse(window.localStorage.getItem("scores") || "{}"));
  return (
    <div key={score} css={finalStyle()}>
      {showMedals()}
      <span css={messageStyle()}>{message}</span>
      <span css={resultStyle()}>
        You got {score} out of {questions} questions right!
      </span>
      <span css={highScoreStyle()}>
        Your best score so far was {maxScore?.score || score} out of{" "}
        {maxScore?.questions || questions} questions which you got on{" "}
        {maxScore?.date || formatDate()}.
      </span>
      <div css={triviaButtonStyle()}>
        <TriviaButton handleButton={handleButton} buttonText="Play Again!" />
      </div>
    </div>
  );
};

export default FinalScore;

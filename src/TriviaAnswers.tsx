/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import { answerStyle, choiceStyle, radioStyle } from "./styles/trivia_answers";

const TriviaAnswers = ({
  isDisabled,
  handleAnswer,
  currentAnswer,
  answerChoices,
  questionIndex
}: {
  isDisabled: boolean;
  handleAnswer: (e: ChangeEvent) => void;
  currentAnswer: string;
  answerChoices: string[];
  questionIndex: number;
}) => {
  return (
    <div key={questionIndex} className="answers" css={answerStyle()}>
      {answerChoices.map((value: string, index: number) => {
        return (
          <div
            css={choiceStyle(currentAnswer === value, isDisabled)}
            key={`questions[questionNumber].id - ${index}`}
          >
            <label htmlFor={`answer-${index}`}>
              <input
                css={radioStyle(currentAnswer !== value, isDisabled)}
                aria-label={value}
                id={`answer-${index}`}
                type="radio"
                disabled={isDisabled && currentAnswer !== value}
                value={value}
                checked={currentAnswer === value}
                onChange={(e) => handleAnswer(e)}
              />
            </label>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TriviaAnswers;

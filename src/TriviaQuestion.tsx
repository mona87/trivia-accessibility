/** @jsxImportSource @emotion/react */
import {
  headerStyle,
  questionStyle,
  numberStyle,
  scoreStyle,
  counterStyle
} from "./styles/trivia_question";

const TriviaQuestion = ({
  currentQuestion,
  questions,
  questionIndex,
  score
}: {
  currentQuestion: string;
  questions: number;
  questionIndex: number;
  score: number;
}) => {
  return (
    <div css={headerStyle()}>
      <div css={scoreStyle()}>
        <span>
          Question {questionIndex} of {questions}
        </span>
        <span css={numberStyle()}>
          {" "}
          Score
          <span key={score} css={counterStyle()}>
            {score}
          </span>
        </span>
      </div>
      <span key={questionIndex} css={questionStyle()}>
        {currentQuestion}
      </span>
    </div>
  );
};

export default TriviaQuestion;

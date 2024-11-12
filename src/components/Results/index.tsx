import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";
import {
  AnswerDisplay,
  CorrectIcon,
  IncorrectIcon,
  MainDisplay,
} from "./style";

export default function ResultsMain() {
  const { answers, questionsList } = useContext(QuestionsContext);
  return (
    <MainDisplay>
      <p>total: </p>
      <p>
        {(
          (answers.reduce((acc, value) => {
            return value.isCorrect ? acc + 1 : acc + 0;
          }, 0) /
            questionsList.length) *
          100
        ).toFixed(2)}
        %
      </p>
      {answers.map((answer, index) => {
        return (
          <AnswerDisplay key={`question ${index}`}>
            <p>{`${index + 1}) ${answer.selectedAlternative}`}</p>
            {answer.isCorrect ? <CorrectIcon /> : <IncorrectIcon />}
          </AnswerDisplay>
        );
      })}
    </MainDisplay>
  );
}

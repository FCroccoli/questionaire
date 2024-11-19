import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";
import {
  AnswerDisplay,
  AnswerList,
  CorrectIcon,
  HeaderSection,
  IncorrectIcon,
  MainDisplay,
  MainWrapper,
  NavButton,
  ResultsHeader,
  ResultText,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function ResultsMain() {
  const { answers, questionsList, scoreRequired } =
    useContext(QuestionsContext);
  const navigate = useNavigate();
  const totalScore =
    (answers.reduce((acc, value) => {
      return value.isCorrect ? acc + 1 : acc + 0;
    }, 0) /
      questionsList.length) *
    100;

  const labelLetter = (index: number) => {
    return index >= 0 ? String.fromCharCode(65 + index) : "--";
  };

  return (
    <MainWrapper>
      <MainDisplay>
        <ResultsHeader>
          <HeaderSection>
            <p>Total: </p>
            <p>{totalScore.toFixed(2)}%</p>
          </HeaderSection>
          <HeaderSection>
            <ResultText $passed={totalScore >= scoreRequired}>
              {totalScore >= scoreRequired ? "PASSED" : "FAILED"}
            </ResultText>
          </HeaderSection>
        </ResultsHeader>
        <AnswerList>
          {answers.map((answer, index) => {
            return (
              <AnswerDisplay key={`question ${index}`}>
                <p>{`${index + 1}) ${labelLetter(
                  answer.selectedAlternative
                )}`}</p>
                {answer.isCorrect ? <CorrectIcon /> : <IncorrectIcon />}
              </AnswerDisplay>
            );
          })}
        </AnswerList>
        <NavButton
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </NavButton>
      </MainDisplay>
    </MainWrapper>
  );
}

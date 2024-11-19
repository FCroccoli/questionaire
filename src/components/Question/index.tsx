import {
  AlternativesWrapper,
  ButtonsWrapper,
  NavButton,
  QuestionDisplay,
  QuestionMain,
  QuestionTitle,
  ResultDisplay,
  SubmitButton,
  VerifyButton,
} from "./style";
import { iQuestion } from "../../interfaces";
import Alternative from "../Alternative";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";
import { useNavigate } from "react-router-dom";

interface iQuestionProps {
  question: iQuestion;
}

export default function Question({ question }: iQuestionProps) {
  const navigate = useNavigate();

  const {
    verifyQuestion,
    selectedQuestion,
    setSelectedQuestion,
    hasNextQuestion,
    hasPrevQuestion,
    answers,
    endTest,
  } = useContext(QuestionsContext);

  const [selectedAlternative, setSelectedAlternative] = useState<number>(-1);
  const [displayResult, setDisplayResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  useEffect(() => {
    setDisplayResult(false);
  }, [selectedAlternative]);

  useEffect(() => {
    const radioInput = document.querySelector(
      'input[name="question"]:checked'
    ) as HTMLInputElement;
    if (radioInput) {
      radioInput.checked = false;
    }
    if (answers[selectedQuestion].selectedAlternative != -1) {
      const selected = document.querySelector(
        `input[id="${answers[selectedQuestion].selectedAlternative} question"]`
      ) as HTMLInputElement;
      selected.checked = true;
      setSelectedAlternative(answers[selectedQuestion].selectedAlternative);
    }
  }, [selectedQuestion, answers]);

  return (
    <QuestionDisplay>
      <QuestionMain>
        <QuestionTitle>{question.text}</QuestionTitle>
        <AlternativesWrapper>
          {question.alternatives.map((alternative, index) => {
            return (
              <Alternative
                alternative={alternative}
                index={index}
                setAlternative={setSelectedAlternative}
                displayResult={displayResult}
                key={`${index} alternative`}
              ></Alternative>
            );
          })}
        </AlternativesWrapper>
      </QuestionMain>
      <ButtonsWrapper>
        <SubmitButton
          onClick={() => {
            endTest();
            navigate("/results");
          }}
        >
          Submit
        </SubmitButton>
        <NavButton
          $shouldDisplay={hasPrevQuestion}
          onClick={() => {
            setSelectedAlternative(-1);
            setDisplayResult(false);
            setIsCorrect(false);
            setSelectedQuestion(selectedQuestion - 1);
          }}
          disabled={selectedAlternative === -1}
        >
          Previous
        </NavButton>
        <NavButton
          $shouldDisplay={hasNextQuestion}
          onClick={() => {
            setSelectedAlternative(-1);
            setDisplayResult(false);
            setIsCorrect(false);
            setSelectedQuestion(selectedQuestion + 1);
          }}
          disabled={selectedAlternative === -1}
        >
          Next
        </NavButton>
        <VerifyButton
          onClick={() => {
            setDisplayResult(true);
            setIsCorrect(verifyQuestion(selectedAlternative));
          }}
          disabled={selectedAlternative === -1}
        >
          Verify
        </VerifyButton>
      </ButtonsWrapper>
      <ResultDisplay $isCorrect={isCorrect} $shouldDisplay={displayResult}>
        {isCorrect ? "Correct" : "Incorrect"}
      </ResultDisplay>
    </QuestionDisplay>
  );
}

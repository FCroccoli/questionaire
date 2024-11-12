import { useEffect, useState } from "react";
import { iAnswer, iQuestion } from "../interfaces";
import questions from "../assets/questions.json";
import { QuestionsContext } from "./questionsContext";

export interface iContextProps {
  children: React.ReactNode;
}

export interface iQuestionsContext {
  questionsList: Array<iQuestion>;
  setQuestionsList: (questionsList: Array<iQuestion>) => void;
  selectedQuestion: number;
  setSelectedQuestion: (targetQuestion: number) => void;
  verifyQuestion: (selectedAlternative: number) => boolean;
  hasNextQuestion: boolean;
  hasPrevQuestion: boolean;
  answers: iAnswer[];
  pushAnswer: (answer: iAnswer) => void;
}

export default function QuestionsProvider({ children }: iContextProps) {
  const [questionsList, setQuestionsList] = useState<iQuestion[]>(questions);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  const [hasNextQuestion, setHasNextQuestion] = useState<boolean>(true);
  const [hasPrevQuestion, setHasPrevQuestion] = useState<boolean>(false);
  const [answers, setAnswers] = useState<iAnswer[]>(
    Array(questionsList.length).fill({
      selectedAlternative: -1,
      isCorrect: false,
    })
  );

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  useEffect(() => {
    setHasNextQuestion(selectedQuestion < questionsList.length - 1);
    setHasPrevQuestion(selectedQuestion > 0);
  }, [selectedQuestion, questionsList.length]);

  const verifyQuestion = (selectedAlternative: number) => {
    return questionsList[selectedQuestion].alternatives[selectedAlternative]
      .isCorrect;
  };

  const pushAnswer = (answer: iAnswer) => {
    setAnswers(
      answers.map((item, index) => {
        return index === selectedQuestion ? answer : item;
      })
    );
  };

  return (
    <QuestionsContext.Provider
      value={{
        questionsList,
        setQuestionsList,
        selectedQuestion,
        setSelectedQuestion,
        verifyQuestion,
        hasNextQuestion,
        hasPrevQuestion,
        answers,
        pushAnswer,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

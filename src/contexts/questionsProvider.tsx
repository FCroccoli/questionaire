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
  startTest: (questionsAmmount: number, scoreRequired: number) => void;
  scoreRequired: number;
  endTest: () => void;
  clockTimer: string;
}

export default function QuestionsProvider({ children }: iContextProps) {
  const [questionsList, setQuestionsList] = useState<iQuestion[]>(questions);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  const [hasNextQuestion, setHasNextQuestion] = useState<boolean>(true);
  const [hasPrevQuestion, setHasPrevQuestion] = useState<boolean>(false);
  const [scoreRequired, setScoreRequired] = useState<number>(0);
  const [answers, setAnswers] = useState<iAnswer[]>([]);
  let totalSeconds: number;
  const [clockTimer, setClockTimer] = useState("");
  let timer: number;

  function shuffle(inputArray: iQuestion[]) {
    const array = [...inputArray];
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const timeCounter = () => {
    const hours = Math.floor(
      (totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalSeconds % (1000 * 60)) / 1000);

    setClockTimer(`${hours}:${minutes}:${seconds}`);

    totalSeconds++;
  };

  const startTest = (questionsAmmount: number, scoreRequired: number) => {
    setScoreRequired(scoreRequired);
    setQuestionsList(shuffle(questions).slice(0, questionsAmmount));
    setAnswers(
      Array(questionsAmmount).fill({
        selectedAlternative: -1,
        isCorrect: false,
      })
    );
    setSelectedQuestion(0);
    totalSeconds = 0;
    timer = setInterval(timeCounter, 1000);
  };

  const endTest = () => {
    clearInterval(timer);
  };

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
        startTest,
        scoreRequired,
        endTest,
        clockTimer,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

import Question from "../../components/Question";
import { TestDisplay } from "./style";
import { QuestionsContext } from "../../contexts/questionsContext";
import { useContext } from "react";
import Clock from "../../components/Clock";

export default function Test() {
  const { questionsList, selectedQuestion } = useContext(QuestionsContext);

  return (
    <TestDisplay>
      <Clock />
      <Question question={questionsList[selectedQuestion]} />
    </TestDisplay>
  );
}

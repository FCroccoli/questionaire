import Question from "../../components/Question";
import { TestDisplay } from "./style";
import { QuestionsContext } from "../../contexts/questionsContext";
import { useContext } from "react";

export default function Test() {
  const { questionsList, selectedQuestion } = useContext(QuestionsContext);

  return (
    <TestDisplay>
      <Question question={questionsList[selectedQuestion]} />
    </TestDisplay>
  );
}

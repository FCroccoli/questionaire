import { useContext } from "react";
import { ClockWrapper } from "./style";
import { QuestionsContext } from "../../contexts/questionsContext";

export default function Clock() {
  const { clockTimer } = useContext(QuestionsContext);

  return (
    <ClockWrapper>
      <p>{clockTimer}</p>
    </ClockWrapper>
  );
}

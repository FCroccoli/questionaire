import { useContext, useState } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";
import { useNavigate } from "react-router-dom";
import { ButtonsWrapper, ConfigDisplay, NavButton } from "./style";

export default function HomeConfig() {
  const { startTest } = useContext(QuestionsContext);
  const navigate = useNavigate();

  const [questionsNumber, setQuestionsNumber] = useState<number>(0);
  const [requiredScore, setRequiredScore] = useState<number>(0);

  return (
    <ConfigDisplay>
      <h1>Welcome!</h1>
      <label htmlFor="questNumberInput">
        How many questions do you want in your test?
      </label>
      <input
        id="questNumberInput"
        type="number"
        min="1"
        max="60"
        onChange={(e) => {
          setQuestionsNumber(parseInt(e.target.value));
        }}
      />
      <label htmlFor="scoreNumberInput">
        What is the required score for passing?
      </label>
      <input
        id="scoreNumberInput"
        type="number"
        min="1"
        max="100"
        step="0.1"
        onChange={(e) => {
          setRequiredScore(parseInt(e.target.value));
        }}
      />
      <ButtonsWrapper>
        <NavButton
          onClick={() => {
            startTest(questionsNumber, requiredScore);
            navigate("/test");
          }}
        >
          Start
        </NavButton>
      </ButtonsWrapper>
    </ConfigDisplay>
  );
}

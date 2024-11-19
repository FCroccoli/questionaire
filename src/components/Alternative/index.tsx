import { AlternativeDisplay } from "./style";
import { iAlternative } from "../../interfaces";
import { useContext } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";

interface iAlternativeProps {
  alternative: iAlternative;
  index: number;
  setAlternative: (targetAlternative: number) => void;
  displayResult: boolean;
}

export default function Alternative({
  alternative,
  index,
  setAlternative,
  displayResult,
}: iAlternativeProps) {
  const { verifyQuestion, pushAnswer } = useContext(QuestionsContext);
  const labelLetter = String.fromCharCode(97 + index);

  function handleAlternativeSelect(targetValue: number) {
    pushAnswer({
      selectedAlternative: index,
      isCorrect: verifyQuestion(index),
    });
    setAlternative(targetValue);
  }

  return (
    <AlternativeDisplay
      $displayResult={displayResult}
      $isCorrect={alternative.isCorrect}
    >
      <input
        type="radio"
        id={index + " question"}
        name="question"
        value={index}
        onChange={(e) => {
          handleAlternativeSelect(parseInt(e.target.value));
        }}
      />
      <label htmlFor={index + " question"}>
        {labelLetter + ") " + alternative.text}
      </label>
    </AlternativeDisplay>
  );
}

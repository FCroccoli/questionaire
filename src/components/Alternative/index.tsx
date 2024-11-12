import { AlternativeDisplay } from "./style";
import { iAlternative } from "../../interfaces";

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
  function handleAlternativeSelect(targetValue: number) {
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
      <label htmlFor={index + " question"}>{alternative.text}</label>
    </AlternativeDisplay>
  );
}

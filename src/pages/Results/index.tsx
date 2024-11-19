import { ResultsDisplay } from "./style";
import ResultsMain from "../../components/Results";
import Clock from "../../components/Clock";

export default function Results() {
  return (
    <ResultsDisplay>
      <Clock />
      <ResultsMain />
    </ResultsDisplay>
  );
}

import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../contexts/questionsContext";
import { ClockWrapper } from "./style";

export default function Clock() {
  //const { clockTimer } = useContext(QuestionsContext);
  const [clockTimer, setClockTimer] = useState("");
  let totalSeconds = 0;

  useEffect(() => {
    setInterval(() => {
      const hours = Math.floor(
        (totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (totalSeconds % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((totalSeconds % (1000 * 60)) / 1000);

      setClockTimer(`${hours}:${minutes}:${seconds}`);

      totalSeconds++;
    }, 1000);
  }, []);

  return (
    <ClockWrapper>
      <p>{clockTimer}</p>
    </ClockWrapper>
  );
}

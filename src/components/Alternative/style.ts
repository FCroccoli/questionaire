import styled from "styled-components";

export const AlternativeDisplay = styled.div<{
  $displayResult: boolean;
  $isCorrect: boolean;
}>`
  padding: 6px;
  border-radius: 4px;
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => {
    if (props.$displayResult) {
      if (props.$isCorrect) {
        return "green";
      } else {
        return "red";
      }
    } else {
      return "transparent";
    }
  }};
`;

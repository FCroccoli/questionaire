import styled from "styled-components";

export const QuestionDisplay = styled.div`
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const AlternativesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`;

export const QuestionMain = styled.div`
  padding-top: 50px;
  height: 60vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const QuestionTitle = styled.h1`
  margin-bottom: 12px;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  padding: 12px 8px;
  border: none;
  border-radius: 4px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

export const VerifyButton = styled.button`
  padding: 12px 8px;
  border: none;
  border-radius: 4px;
  background-color: green;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: grey;
    cursor: default;
  }
`;

export const NavButton = styled.button<{ $shouldDisplay: boolean }>`
  padding: 12px 8px;
  border: solid 1px black;
  border-radius: 4px;
  background-color: white;
  color: black;
  cursor: pointer;
  display: ${(props) => (props.$shouldDisplay ? "block" : "none")};
  &:disabled {
    color: grey;
    border-color: grey;
    cursor: default;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 6px;
`;

export const ResultDisplay = styled.span<{
  $isCorrect: boolean;
  $shouldDisplay: boolean;
}>`
  display: ${(props) => (props.$shouldDisplay ? "block" : "none")};
  color: ${(props) => (props.$isCorrect ? "green" : "red")};
`;

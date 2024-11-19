import { CgCheckO, CgCloseO } from "react-icons/cg";
import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 6px;
`;

export const ResultsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 4px 4px 0 0;
  border: 1px solid black;
  border-width: 1px 1px 0 1px;
  padding: 6px;
`;

export const MainDisplay = styled.div`
  width: 35%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CorrectIcon = styled(CgCheckO)`
  color: green;
`;

export const IncorrectIcon = styled(CgCloseO)`
  color: red;
`;

export const AnswerDisplay = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px;
  flex: 0 0 33.3333%;
`;

export const AnswerList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 0 0 4px 4px;
`;

export const NavButton = styled.button`
  margin-top: 6px;
  margin-left: auto;
  padding: 12px 8px;
  border: solid 1px black;
  border-radius: 4px;
  background-color: white;
  color: black;
  cursor: pointer;
  &:disabled {
    color: grey;
    border-color: grey;
    cursor: default;
  }
`;

export const ResultText = styled.p<{ $passed: boolean }>`
  color: ${(props) => (props.$passed ? "green" : "red")};
`;

import { CgCheckO, CgCloseO } from "react-icons/cg";
import styled from "styled-components";

export const MainDisplay = styled.div`
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const CorrectIcon = styled(CgCheckO)`
  color: green;
`;

export const IncorrectIcon = styled(CgCloseO)`
  color: red;
`;

export const AnswerDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

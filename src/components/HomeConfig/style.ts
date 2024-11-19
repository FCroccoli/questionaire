import styled from "styled-components";

export const ConfigDisplay = styled.div`
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const NavButton = styled.button`
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

export const ButtonsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 6px;
`;

import styled from "styled-components/native";

export const StepSwitcherWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 45px;
`

export const Arrow = styled.Image`
  height: 18px;
  width: 21px;
  marginLeft: 10px;
`

export const ProgressBar = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const ProgressBarItem = styled.View`
  width: 9px;
  height: 9px;
  background-color: ${({active}) => active ? "#25CC90" : "#CACED1"};
  border-radius: 50%;
  margin-right: 13px;
`;

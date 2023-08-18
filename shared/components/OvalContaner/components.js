import styled from "styled-components/native";

export const OvalWrapper = styled.View`
  overflow: hidden;
  width: 100%;
  height: 30px;
  top: -30px;
  position: relative;
`;

export const Oval = styled.View`
  border-radius: 50px;
  background-color: #f7f8fa;
  transform: scaleX(2);
`;

import styled from "styled-components/native";

export const Component = styled.View`
  background-color: ${({type}) => type === "dark" ? "#0086CC" : "#4a98c9"} ;
  width: 100%;
  height: 53px;
  border-radius: 25px;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ComponentText = styled.Text`
  font-size: 14px;
  font-family: 'PTSans_700Bold';
  color: #fff;
  text-align: center;
`;

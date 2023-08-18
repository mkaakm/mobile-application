import styled from "styled-components/native";

const ScreenName = styled.Text`
  font-family: "PTSans_700Bold";
  color: ${({type}) => type === "dark" ? "#000" : "#fff"};
  font-size: 12px;
  text-align: center;
  margin-top: 35px;
  letter-spacing: 0.5px;
  position: relative;
`

export default ScreenName;
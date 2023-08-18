import styled from "styled-components/native";

const ContentTextComponent = styled.Text`
  font-family: "PTSans_400Regular";
  text-align: left;
  color: #000;
  font-size: 14px;
  line-Height: 20px;
  margin-bottom: 10px;
`;

const ContentText = ({style, children}) => {
    return <ContentTextComponent style={style}>{children}</ContentTextComponent>
}

export default ContentText;
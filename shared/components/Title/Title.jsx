import {StyleSheet} from "react-native";
import styled from "styled-components/native";

const TitleComponent = styled.Text`
  font-family: 'PTSans_700Bold';
  font-size: 28px;
  line-height: 28px;
  color: #292266;
`;

const Title = ({size, style, children}) => {
    return <TitleComponent style={{...styles[size], ...style}}>{children}</TitleComponent>
}

export default Title;

Title.defaultProps = {
    size: "medium"
}

const styles = StyleSheet.create({
    medium: {
        fontSize: 28,
        lineHeight: 28,
    },
    large: {
        fontSize: 36,
        lineHeight: 36,
    }
});
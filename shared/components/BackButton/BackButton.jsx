import {Image} from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 17px;
  left: -17px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackButton = ({navigation, screen, style = {}}) => {
    return (<Wrapper style={style} onPress={() => navigation.navigate(screen)}>
                <Image style={{width: 18, height: 18}}
                       source={{uri: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1668815660/salesfuel/arrow_sowhbu.png"}}/>
            </Wrapper>)
}

export default BackButton;
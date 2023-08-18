import styled from "styled-components/native";
import {useWindowDimensions} from "react-native";

const ContainerWrapper = styled.View`
  position: relative;
  margin: 0 auto;
  flex: 1;
  z-index: 999;
`;

const Container = ({style, children}) => {
    const {width} = useWindowDimensions();

    return <ContainerWrapper style={{...style, width: width - 54}}>{children}</ContainerWrapper>
}

export default Container;

Container.defaultProps = {
    style: {}
}

import {TouchableOpacity} from "react-native";

import styled from "styled-components/native";

const ActiveLinkComponent = styled.Text`
  color: #0086CC;
  position: relative;
  font-family: "PTSans_700Bold" ;
  font-size: 12px;
`

const ActiveLink = ({onPress, style, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ActiveLinkComponent style={style}>{children}</ActiveLinkComponent>
        </TouchableOpacity>
    )
}

export default ActiveLink;

ActiveLink.defaultProps = {
    style: {}
}


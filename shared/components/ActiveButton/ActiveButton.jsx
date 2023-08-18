import {TouchableOpacity} from "react-native";

import {ComponentText, Component} from "./components";

const ActiveButton = ({type, style, text, onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Component type={type} style={style}>
                <ComponentText>{text}</ComponentText>
                {children}
            </Component>
        </TouchableOpacity>
    )
}

export default ActiveButton;

ActiveButton.defaultProps = {
    type: "dark",
    style: {}
}
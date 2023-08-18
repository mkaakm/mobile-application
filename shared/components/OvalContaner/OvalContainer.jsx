import {useWindowDimensions} from "react-native";

import {OvalWrapper, Oval} from "./components";

const OvalContainer = ({style}) => {
    const {width} = useWindowDimensions();

    const fullStyle = {width, height: width, borderRadius: width / 2 };

    return (
        <OvalWrapper style={style}>
            <Oval style={fullStyle} />
        </OvalWrapper>
    )
}

export default OvalContainer;

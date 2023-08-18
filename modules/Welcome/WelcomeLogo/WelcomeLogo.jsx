import styled from "styled-components/native";

import darkSrc from "../../../assets/images/logo/dark-logo.png";
import lightSrc from "../../../assets/images/logo/light-logo.png";

const ImageComponent = styled.Image`
  height: 32px;
  width: 130px;
  position: absolute;
  top: 35px;
  left: 27px;
  zIndex: 5;
`

const WelcomeLogo = ({type, style = {}})=> {
    const src = type === "light" ? lightSrc : darkSrc;

    return <ImageComponent source={src} style={style}  />
}

export default WelcomeLogo;
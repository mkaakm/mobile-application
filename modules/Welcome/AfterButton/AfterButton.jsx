import ActiveLink from "../../../shared/components/ActiveLink";

import {RegisterTextWrapper, RegisterText} from "./UI";

const AfterButton = ({onPress}) => {
    return (
        <RegisterTextWrapper>
            <RegisterText>Don’t have an account?</RegisterText>
            <ActiveLink onPress={onPress}>Register</ActiveLink>
        </RegisterTextWrapper>
    )
}

export default AfterButton;
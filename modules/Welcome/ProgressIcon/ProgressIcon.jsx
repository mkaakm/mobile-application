import {IconWrapper, Icon} from "./UI";

import steps from "./steps";

const ProgressIcon = ({step}) => {
    return (
        <IconWrapper>
            <Icon source={steps[step]} />
        </IconWrapper>
    )
}

export default ProgressIcon;
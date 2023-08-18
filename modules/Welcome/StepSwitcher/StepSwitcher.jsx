import {StyleSheet} from "react-native";

import ActiveButton from "../../../shared/components/ActiveButton";

import {StepSwitcherWrapper, Arrow, ProgressBar, ProgressBarItem} from "./UI";

import nextArrowSrc from "../../../assets/images/welcome/next-button-arrow.jpg"

const items = Array(4).fill(0);

const StepSwitcher = ({nextStep, text, step, afterButton}) => {
    const elements = items.map((_, index) => <ProgressBarItem active={(index + 1) === step} key={index}/>)

    return (
        <StepSwitcherWrapper>
            <ActiveButton onPress={nextStep} text={text} style={styles.button}>
                {step < 4 && <Arrow source={nextArrowSrc}/>}
            </ActiveButton>
            {afterButton}
            <ProgressBar>
                {elements}
            </ProgressBar>
        </StepSwitcherWrapper>
    )
}

export default StepSwitcher;

const styles = StyleSheet.create({
    button: {
        marginBottom: 55,
    },
})


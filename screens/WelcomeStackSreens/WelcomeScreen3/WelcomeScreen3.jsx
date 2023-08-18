import {useContainerStyle, useWelcomeSlide} from "../../../modules/Welcome/hooks";

import Wrapper from "../../../shared/components/Wrapper";
import OvalContainer from "../../../shared/components/OvalContaner";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import ContentText from "../../../shared/components/ContentText";

import WelcomeLogo from "../../../modules/Welcome/WelcomeLogo";
import ProgressIcon from "../../../modules/Welcome/ProgressIcon";
import StepSwitcher from "../../../modules/Welcome/StepSwitcher";

import {Header} from "./UI";

import styles from "../styles";

const WelcomeScreen3 = ({navigation}) => {
    const containerStyle = useContainerStyle();
    const {slide} = useWelcomeSlide(3);

    const nextStep = () => navigation.navigate("Welcome4");

    return (
        <Wrapper type="scroll" background="dark">
            <Header style={styles.header}>
                <WelcomeLogo type="dark" />
            </Header>
            <OvalContainer />

            <Container style={containerStyle}>
                <ProgressIcon step="3" />
                <Title style={styles.title}>{slide.title}</Title>
                <ContentText style={styles.description}>{slide.text}</ContentText>
                <StepSwitcher nextStep={nextStep} text="Next" step={3} />
            </Container>
        </Wrapper>
    )
}

export default WelcomeScreen3;


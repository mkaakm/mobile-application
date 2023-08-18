import {useContainerStyle, useWelcomeSlide} from "../../../modules/Welcome/hooks";

import Wrapper from "../../../shared/components/Wrapper";
import OvalContainer from "../../../shared/components/OvalContaner";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import ContentText from "../../../shared/components/ContentText";

import ProgressIcon from "../../../modules/Welcome/ProgressIcon";
import WelcomeLogo from "../../../modules/Welcome/WelcomeLogo";
import StepSwitcher from "../../../modules/Welcome/StepSwitcher";
import AfterButton from "../../../modules/Welcome/AfterButton";

import {Header} from "./UI";

import styles from "../styles";

const WelcomeScreen4 = ({navigation}) => {
    const containerStyle = useContainerStyle();
    const {slide} = useWelcomeSlide(4);

    const signin = () => navigation.navigate("SignIn");
    const signup = () => navigation.navigate("SignUp");

    return (
        <Wrapper type="scroll" background="dark">
            <Header style={styles.header}>
                <WelcomeLogo type="dark"/>
            </Header>
            <OvalContainer/>

            <Container style={containerStyle}>
                <ProgressIcon step="4"/>
                <Title style={styles.title}>{slide.title}</Title>
                <ContentText style={styles.description}>{slide.text}</ContentText>
                <StepSwitcher nextStep={signin} text="Sign in" step={4} afterButton={<AfterButton onPress={signup} />}/>
            </Container>
        </Wrapper>
    )
}

export default WelcomeScreen4;


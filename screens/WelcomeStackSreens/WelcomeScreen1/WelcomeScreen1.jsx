import {useWelcomeSlide, useContainerStyle} from "../../../modules/Welcome/hooks";

import Wrapper from "../../../shared/components/Wrapper";
import LinearBackground from "../../../shared/components/LinearBackground";
import OvalContainer from "../../../shared/components/OvalContaner";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import ContentText from "../../../shared/components/ContentText";

import WelcomeLogo from "../../../modules/Welcome/WelcomeLogo";
import ProgressIcon from "../../../modules/Welcome/ProgressIcon";
import StepSwitcher from "../../../modules/Welcome/StepSwitcher";

import {HeaderImage} from "./UI";

import styles from "../styles";

import headerAuthorSrc from "../../../assets/images/welcome/header-author-image.png";

const WelcomeScreen1 = ({navigation}) => {
    const containerStyle = useContainerStyle();
    const {slide} = useWelcomeSlide(1);

    const nextStep = () => navigation.navigate("Welcome2");

    return (
        <Wrapper type="scroll" background="dark">
            <LinearBackground style={styles.header}>
                <WelcomeLogo type="light"/>
                <HeaderImage resizeMode="cover" source={headerAuthorSrc}/>
            </LinearBackground>
            <OvalContainer/>

            <Container style={containerStyle}>
                <ProgressIcon step="1"/>
                <Title style={styles.title}>{slide.title}</Title>
                <ContentText style={styles.description}>{slide.text}</ContentText>
                <StepSwitcher nextStep={nextStep} text="Get Started" step={1}/>
            </Container>
        </Wrapper>
    )
}

export default WelcomeScreen1;


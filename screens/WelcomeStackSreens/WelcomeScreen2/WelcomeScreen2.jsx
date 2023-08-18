import {useContainerStyle, useWelcomeSlide} from "../../../modules/Welcome/hooks";

import Wrapper from "../../../shared/components/Wrapper";
import LinearBackground from "../../../shared/components/LinearBackground";
import OvalContainer from "../../../shared/components/OvalContaner";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import ContentText from "../../../shared/components/ContentText";

import WelcomeLogo from "../../../modules/Welcome/WelcomeLogo";
import ProgressIcon from "../../../modules/Welcome/ProgressIcon";
import StepSwitcher from "../../../modules/Welcome/StepSwitcher";

import {Header} from "./UI";

import styles from "../styles";

import headerAuthorBooksSrc from "../../../assets/images/welcome/header-author-books.png";

const WelcomeScreen2 = ({navigation}) => {
    const containerStyle = useContainerStyle();
    const {slide} = useWelcomeSlide(2);

    const nextStep = () => navigation.navigate("Welcome3");

    return (
        <Wrapper type="scroll" background="dark">
            <LinearBackground style={styles.header}>
                <WelcomeLogo type="light" />
                <Header resizeMode="cover" source={headerAuthorBooksSrc}/>
            </LinearBackground>
            <OvalContainer />

            <Container style={containerStyle}>
                <ProgressIcon step="2" />
                <Title style={styles.title}>{slide.title}</Title>
                <ContentText style={styles.description}>{slide.text}</ContentText>
                <StepSwitcher nextStep={nextStep} text="Next" step={2} />
            </Container>
        </Wrapper>
    )
}

export default WelcomeScreen2;


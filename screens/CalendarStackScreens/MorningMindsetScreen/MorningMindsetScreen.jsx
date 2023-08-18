import {View, TouchableOpacity, StyleSheet, useWindowDimensions, Text, Image} from "react-native";
import {useState, useEffect, useRef} from "react";
import {Video} from "expo-av";
import {useDispatch} from "react-redux";
import {FontAwesome5} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import LinearBackground from "../../../shared/components/LinearBackground";
import Container from "../../../shared/components/Container";
import ScreenName from "../../../shared/components/ScreenName";
import ContentText from "../../../shared/components/ContentText";
import BackButton from "../../../shared/components/BackButton";

import {
    LineWrapper,
    Line,
    TextWrapper,
    TextContent,
    BoldText,
    VideoWrapper,
    VideoTitle,
    VideoBlock,
    IconWrapper,
    AuthorName,
    AuthorDescription,
    MoreWrapper,
    MoreText,
    Modal,
    AuthorData,
    TextTitle,
    ShowMore,
    TipsTitle,
    AuthorsBlock, AuthorImage, Author, AuthorSubTitle,
} from "./components"

import {lines, words} from "../CalendarScreen/data";

import {addCompleteTask} from "../../../redux/today-tasks/today-tasks-slice";

import author1Src from "../../../assets/images/authors/author-1.jpg"
import author2Src from "../../../assets/images/authors/author-2.jpg"
import styled from "styled-components/native";

const MorningMindsetScreen = ({navigation}) => {
    const [step, setStep] = useState(0);
    const {width, height} = useWindowDimensions();
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setStep(1)
        }, 5000)
    }, []);

    useEffect(() => {
        if (status.didJustFinish) {
            dispatch(addCompleteTask({
                name: "Mindset Moment",
                start: "8:00",
                end: "8:30",
                type: "AM"
            }))
            navigation.navigate("Calendar")
        }
    }, [status])

    const lineElements = lines.map((_, index) => <Line active={index === step} key={index}/>);

    const textElements = words.map(({id, firstPart, secondPart}) => <TextContent key={id}>
        {firstPart}<BoldText>{secondPart}</BoldText>
    </TextContent>)

    return (
        <>
            {modal && (<Modal style={{height}}>
                <Container>
                    <TouchableOpacity style={styles.closeIcon} onPress={()=> setModal(false)}>
                        <AntDesign  name="checkcircleo" size={24} color="#0086CC" />
                    </TouchableOpacity>

                    <ScreenName type="dark">Jamie Smith</ScreenName>
                    <AuthorData>ELITE | 5 yr | $500,000</AuthorData>
                    <TextTitle>Background</TextTitle>
                    <ContentText>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                    </ContentText>
                    <ShowMore>Show more</ShowMore>
                    <TipsTitle>More Tips</TipsTitle>
                    <AuthorsBlock>
                        <Author>
                            <AuthorImage source={author1Src} />
                            <AuthorSubTitle>How I got started</AuthorSubTitle>
                        </Author>
                        <Author>
                            <AuthorImage source={author2Src} />
                            <AuthorSubTitle>5 mistakes I made</AuthorSubTitle>
                        </Author>
                    </AuthorsBlock>
                </Container>

                </Modal>)}
            {!modal && (
                <LinearBackground>
                    <Container style={styles.container}>
                        <BackButton navigation={navigation} screen="Calendar" />
                        <ScreenName style={styles.screenName}>
                            Morning Mindset
                        </ScreenName>

                        <LineWrapper>
                            {lineElements}
                        </LineWrapper>

                        {step === 0 && (<TextWrapper style={{height: height - 120}}>
                            {textElements}
                        </TextWrapper>)}
                    </Container>
                    {step === 1 && (
                        <>
                            <Video
                                ref={video}
                                style={{...styles.video, height}}
                                shouldPlay
                                source={{
                                    uri: 'https://res.cloudinary.com/dpzx4xaru/video/upload/v1671789327/salesfuel/calendarvideo_autanw.mp4',
                                }}
                                useNativeControls
                                resizeMode="contain"

                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            />
                            <VideoWrapper style={{width: width - 40}}>
                                <VideoTitle>
                                    5 mistakes I made
                                </VideoTitle>
                                <VideoBlock>
                                    <IconWrapper>
                                        <FontAwesome5 name="fire-alt" size={24} color="#0086CC"/>
                                    </IconWrapper>
                                    <View>
                                        <AuthorName Smith>Jamie Smith</AuthorName>
                                        <AuthorDescription>ELITE | 5 yr | $500,000</AuthorDescription>
                                    </View>
                                    <TouchableOpacity onPress={() => setModal(true)}>
                                        <MoreWrapper>
                                            <MoreText>More Tips</MoreText>
                                        </MoreWrapper>
                                    </TouchableOpacity>
                                </VideoBlock>
                            </VideoWrapper>
                        </>
                    )}
                </LinearBackground>
            )}
        </>

    )
}

export default MorningMindsetScreen;

const styles = StyleSheet.create({
    container: {
        zIndex: 5,
    },
    screenName: {
        marginBottom: 11,
        zIndex: 5,
    },
    video: {
        position: "absolute",
        top: 0,
        width: "100%",
    },
    closeIcon: {
        position: "absolute",
        top: 5,
        left: -25,
        zIndex: 20,
        width: 80,
        height: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
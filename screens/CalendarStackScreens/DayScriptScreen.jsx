import {
    TouchableOpacity,
    View,
    Text,
    Button,
    StyleSheet, Image,
} from "react-native";
import {useState, useRef} from "react";
import { FontAwesome } from '@expo/vector-icons';
import styled from "styled-components/native";
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import {useSelector, useDispatch} from "react-redux";

import Wrapper from "../../shared/components/Wrapper";
import Container from "../../shared/components/Container";
import ScreenName from "../../shared/components/ScreenName";
import ContentText from "../../shared/components/ContentText";
import BackButton from "../../shared/components/BackButton";

import {addRecord} from "../../shared/api/recordings";

import {getScript, getScriptStep} from "../../redux/scripts/scripts-selectors";
import {nextStep} from "../../redux/scripts/scripts-slice";

const RecordWrapper = styled.View`
  width: 100%;
  //position: absolute;
  bottom: 0;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const RecordTime = styled.Text`
  font-family: "PTSans_700Bold";
  color: #000;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
`

const RecordIconWrapper = styled.View`
  border: 2px solid #D71441;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: #fff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const RecordIcon = styled.View`
  height: 62px;
  width: 62px;
  border-radius: 31px;
  background-color: #D71441;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ScriptDescription = styled.Text`
  font-family: "PTSans_400Regular";
  text-align: left;
  color: #000;
  font-size: 14px;
  line-Height: 20px;
  margin-bottom: 10px;
`;

const ScriptMessage = styled.Text`
  font-family: "PTSans_400Regular";
  text-align: left;
  color: #000;
  font-size: 14px;
  line-Height: 20px;
  margin-bottom: 10px;
`;

const ScriptTextWrapper = styled.View`
  margin-top: 15px;
`

const formatTime = (time) => {
    if(time > 59) {
        const minutes = time % 60;
        const seconds = time - minutes * 60;
        const formatSeconds = seconds < 10 ? `0${seconds}`: seconds;
        return `0${minutes}:${formatSeconds}`;
    }
    const formatSeconds = time < 10 ? `0${time}`: time;
    return `00:${formatSeconds}`
}

const DayScriptScreen = ({navigation, route}) => {
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState([]);
    const [recordingCount, setRecordingCount] = useState(0);
    const [recordTime, setRecordTime] = useState(0);
    const recordId = useRef(0);

    const {title, description, content} = useSelector(getScript);
    const step = useSelector(getScriptStep);

    async function startRecording() {
        try {
            const permission = await Audio.requestPermissionsAsync();

            if (permission.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    playsInSilentModeIOS: true
                });

                const { recording } = await Audio.Recording.createAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );
                recordId.current = setInterval(()=> {
                    setRecordTime(prevTime => prevTime + 1);
                }, 1000)
                setRecording(recording);
            } else {
                setMessage("Please grant permission to app to access microphone");
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();

        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });
        clearInterval(recordId.current);
        setRecordTime(0)
        setRecordingCount(prevState => prevState + 1);
        setRecordings(updatedRecordings);
        if(recordingCount === 2) {
            // await uploadAudioAsync(recordings);
            setRecordingCount(0);
            navigation.navigate("RecordingResult", {
                data: updatedRecordings,
                scriptTitle: title,
            })
            setRecordings([])
        }
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    const scriptDescription = description.map((text, index)=> <ScriptDescription key={index}>{index + 1}. {text}</ScriptDescription>)
    const scriptContent = content.map((text, index)=> <ContentText key={index} style={{fontFamily: "PTSans_700Bold"}}>{text}</ContentText>)

    return (
        <>
            <Wrapper>
                <Container>
                    <BackButton navigation={navigation} screen="ScriptRolePlay" style={{top: 37}} />
                    <ScreenName type="dark" style={styles.screenName}>{title}</ScreenName>
                    <ScriptMessage>THIS SCRIPT IS IMPORTANT BECAUSE IT IMPROVES YOUR SUCCESS RATE IN SETTING APPOINTMENT.</ScriptMessage>
                    {scriptDescription}
                    <ScriptTextWrapper>
                        {scriptContent}
                    </ScriptTextWrapper>
                </Container>
            </Wrapper>
            <RecordWrapper>
                {Boolean(recordTime) && <RecordTime>{formatTime(recordTime)}</RecordTime>}
                <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                    <RecordIconWrapper>
                        <RecordIcon>
                            <FontAwesome name="microphone" size={36} color="#fff" />
                        </RecordIcon>
                    </RecordIconWrapper>
                </TouchableOpacity>
            </RecordWrapper>
        </>

    )
}

export default DayScriptScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    screenName: {
        marginTop: 45,
        marginBottom: 25,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fill: {
        flex: 1,
        margin: 16
    },
    button: {
        margin: 16
    }
});
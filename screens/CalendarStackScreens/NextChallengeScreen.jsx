import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
    Dimensions, Pressable, Modal
} from "react-native";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import {useState, useEffect, useRef} from "react"
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio } from 'expo-av';

import Wrapper from "../../shared/components/Wrapper";

import LinearBackground from "../../shared/components/LinearBackground";

import Container from "../../shared/components/Container";
import OvalContainer from "../../shared/components/OvalContaner";
import BackButton from "../../shared/components/BackButton";
import {Feather, SimpleLineIcons} from "@expo/vector-icons";
import audioSrc from "../../assets/images/script/audio.jpg";
import {addOneRecord} from "../../shared/api/recordings";

const RecordIcon = styled.View`
  height: 92px;
  width: 92px;
  border-radius: 46px;
  background-color: #D71441;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
  letter-spacing: 0.5px;
  position: relative;
`

const SubTitle = styled.Text`
  font-family: "PTSans_700Bold";
  text-transform: uppercase;
  color: #fff;
  font-size: 8px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`

const TaskName = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 36px;
`

const ListTitle = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 11px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`

const ListItem = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

const ListItemCircle = styled.View`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.292422);
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`

const ListItemText = styled.Text`
  flex: 1;
  font-family: "PTSans_400Regular";
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const ListItemTextBold = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  margin-bottom: 25px;
`

const Button = styled.View`
  width: 100%;
  background-color: #0086CC;
  margin: 0 auto 21px;
  padding: 15px;
  border-radius: 35px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.297531);
`;

const ButtonText = styled.Text`
  text-align: center;
  font-family: 'PTSans_400Regular';
  color: #fff;
`;

const RemindLater = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.5px;
`

const CountdownWrapper = styled.View`
  width: 100%;
  position: absolute;
  bottom: 85px;
  flex-direction: row;
  justify-content: center;
`

const Countdown = styled.View`
  border-radius: 59.5px;
  border: 4px solid rgba(255,255,255, 0.600524);
  height: 119px;
  width: 119px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const CountdownValue = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.5px;
`

const PhraseWrapper = styled.View`
  border-radius: 8px;
  opacity: 1;
  background-color: rgba(255,255,255, 1);
  height: 168px;
  width: 100%;
  z-index: 20;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -120px;
`

const Phrase = styled.Text`
  font-family: "PTSans_700Bold";
  color:#292266;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`

const ProgressBar = styled.View`
  width: 100%;
  height: 21px;
  border-radius: 8px;
  background-color: rgba(202,206,209, 1);
  margin-top: 32px;
`

const ProgressBarValue = styled.View`
  width: 119px;
  height: 21px;
  border-radius: 8px;
  background-color: #0086CC;
`

const TimerWrapper = styled.View`
width: 100%;
  flex-direction: row;
  justify-content: center;
`

const ModalButtonWrapper = styled.View`
display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`


const Record = styled.View`
  border-radius: 20px;
  height: 40px;
  box-sizing: border-box;
  padding: 7px 10px;
  background-color: #fff;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const RecordAudio = styled.Image`
  width: 50%;
  height: 17px;
  margin-right: 10px;
`

const RecordTime = styled.Text`
  font-family: "PTSans_400Regular";
  color: #858687;
  font-size: 11px;
  line-height: 11px;
  position: relative;
  top: 2px;
`

const phrases = [
    {
        text: "I’m not interested!",
        answer: "There is no reason on earth why you should be interested in learning more about me, my unique selling solutions unless I can show you how they can help add value to your business and cash flow. Let’s invest 30 minutes together so I can share with you what I bring to the table and how it will equate to more closings and most importantly, more long-term referrals."
    },
    {
        text: "I’m already happy with the Lender I am using.",
        answer: "The purpose of my call is not to sever your relationship with your existing lender. I am calling because I have some cool ideas to help you increase your business. Does your lender bring you 10-12 additional closings per year?  Let’s get together and see if what I have makes sense for you."
    },
    {
        text: "I’m already working with a Lender.",
        answer: "I realize that a top producer like you must have a great relationship with another lender and I respect that. However, the purpose of my call is to find out if you’re interested in some innovative ways to increase your business in 2024. Are you willing to spend 20 minutes of your time exploring this?"
    },
    {
        text: "We have our own lender.",
        answer: "I respect your loyalty and appreciate your honesty.  Does your In-House Lender bring you 10-12 additional closings per year?  The one thing I do know is that no one has a monopoly on new ideas. I’ve spent a lot of time coming up with ways to help increase my Realtors’ business and thought you might be interested. When would be a good time to meet?"
    },
    {
        text: "I don’t have time to meet with you.",
        answer: "I know you have a busy schedule, as do I.  That’s one of the reasons we should meet. I have a system that has dramatically improved my Agent’s productivity and business efficiency. They consistently make more money, work less hours, and have less stress.  Let’s make it happen for you too! How’s Friday morning?"
    },
]

const addToFormData = (formData, name, uri) => {
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    formData.append(name, {
        uri,
        name: `${name}.${fileType}`,
        type: `audio/x-${fileType}`,
    });
}

const NextChallengeScreen = ({navigation}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [sendModalVisible, setSendModalVisible] = useState(false);
    const {width, height} = useWindowDimensions();
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState();
    const recordId = useRef(0);
    const [recordTime, setRecordTime] = useState(0);
    const [sendRecord, setSendRecord] = useState(false);

    const [countdown, setCountdown] = useState(null)
    const [start, setStart] = useState(false)
    const [count, setCount] = useState(0);
    const countdownId = useRef(null)

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

        const { sound, status } = await recording.createNewLoadedSoundAsync();

        clearInterval(recordId.current);
        setRecordTime(0)
        setRecordings({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    function getRecordingLines() {
        if(!recordings) {
            return <></>
        }
            return (
                <Record >
                    <TouchableOpacity onPress={async () => {
                        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
                        await recordings.sound.replayAsync()
                    }}>
                        <Feather name="play-circle" size={24} color="#0086CC" />
                    </TouchableOpacity>
                    <RecordAudio source={audioSrc} />
                    <RecordTime>{recordings.duration}</RecordTime>
                    <SimpleLineIcons name="trash" size={24} color="#CACED1" />
                </Record>
            );

    }

    useEffect(()=> {
        if(countdown === 3) {
            countdownId.current = setInterval(()=> {
                setCountdown(prevState => prevState - 1);
            }, 1000);
        }
        if(countdown === 0) {
            clearInterval(countdownId.current)
            setStart(true)
        }

    }, [countdown]);

    useEffect(()=> {
        if(sendRecord) {
            const fetchUpload = async() => {
                let formData = new FormData();
                addToFormData(formData, "record", recordings.file);
                try {
                    await addOneRecord(formData);
                }
                catch(error) {
                    console.log(error.message);
                }
                finally {
                    setSendRecord(false);
                }
            }
            fetchUpload();
        }
    }, [sendRecord])

    return (
        <Wrapper>
            <LinearBackground style={{height: start ? 390 : height}}>
                <Container>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>Did your response sound like this?</Text>
                                {/*{getRecordingLines()}*/}
                                <Text style={styles.modalText}>{phrases[count].answer}</Text>
                                <ModalButtonWrapper>
                                    <Pressable
                                        style={[styles.modalButton, styles.modalButtonClose]}
                                        onPress={() => {
                                            setModalVisible(false);
                                            setSendModalVisible(true);
                                            setCount(prevCount => {
                                                if(prevCount === 4) {
                                                    return 4;
                                                }
                                                return prevCount + 1
                                            })
                                        }}>
                                        <Text style={styles.textStyle}>Next</Text>
                                    </Pressable>
                                </ModalButtonWrapper>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={sendModalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>Great job! Your Role Play practice has been sent to your manager.</Text>
                                {count === 4 && <Text style={styles.modalTitle}>Nice! You are on your way to a Perfect Day!</Text>}
                                {/*{getRecordingLines()}*/}
                                <ModalButtonWrapper>
                                    <Pressable
                                        style={[styles.modalButton, styles.modalButtonClose]}
                                        onPress={() => {
                                            setSendModalVisible(false);
                                            setSendRecord(true);
                                            if(count === 4) {
                                                navigation.navigate("Calendar")
                                            }
                                        }}>
                                        <Text style={styles.textStyle}>Ok</Text>
                                    </Pressable>
                                </ModalButtonWrapper>
                            </View>
                        </View>
                    </Modal>
                    <BackButton navigation={navigation} screen="Home" />
                    <Title>
                        Script & Role Play
                    </Title>
                    {!countdown && !start && (
                        <>
                            <SubTitle>TODAY’S CHALLENGE</SubTitle>
                            <TaskName>Role play!</TaskName>

                            <ListTitle>Rules</ListTitle>
                            <ListItem>
                                <ListItemCircle>
                                    <Ionicons name="md-checkmark-sharp" size={24} color="#fff"/>
                                </ListItemCircle>
                                <ListItemText>We will display <ListItemTextBold>20 random customer phrases</ListItemTextBold> that you will need to reply verbally.</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemCircle>
                                    <Ionicons name="md-checkmark-sharp" size={24} color="#fff"/>
                                </ListItemCircle>
                                <ListItemText>You will only have <ListItemTextBold>1min to response</ListItemTextBold> per phase before it moves to the next phrase.</ListItemText>
                            </ListItem>
                            <ButtonWrapper>
                                <TouchableOpacity onPress={()=> setCountdown(3)}>
                                    <Button>
                                        <ButtonText>Let’s Start!</ButtonText>
                                    </Button>
                                </TouchableOpacity>
                                <RemindLater>Remind me later</RemindLater>
                            </ButtonWrapper>
                        </>
                    )}

                    {Boolean(countdown) && !start && (
                        <>
                            <SubTitle>ROLE PLAY WITH</SubTitle>
                            <TaskName>Managing Objections While Setting Business Development Appointments with Agents</TaskName>
                            <CountdownWrapper>
                                <Countdown>
                                    <CountdownValue>{countdown}</CountdownValue>
                                </Countdown>
                            </CountdownWrapper>
                        </>
                    )}
                </Container>
            </LinearBackground>
            {start && (
                <>
                    <OvalContainer style={styles.oval} />
                    <Container>
                        <PhraseWrapper style={{width: width - 54}}>
                            <Phrase>{phrases[count].text}</Phrase>
                        </PhraseWrapper>
                        <TimerWrapper>
                            <CountdownCircleTimer
                                key={count}
                                isPlaying={isPlaying}
                                duration={60}
                                colors={["#0086CC", "#0086CC", "#0086CC", "#0086CC"]}
                                colorsTime={[10, 6, 3, 0]}
                                onComplete={() => ({ shouldRepeat: false })}
                            >
                                {({ remainingTime, color }) => (
                                    <>
                                    {!isPlaying && <TouchableOpacity onPress={()=> {
                                        setIsPlaying(true);
                                        startRecording();
                                    }}>
                                        <RecordIcon>
                                            <FontAwesome name="microphone" size={36} color="#fff" />
                                        </RecordIcon>
                                                    </TouchableOpacity>}
                                {isPlaying && <TouchableOpacity onPress={()=> {
                                    setIsPlaying(false);
                                    setModalVisible(true);
                                    stopRecording()

                                }}>
                                    <RecordIcon>
                                        <FontAwesome name="microphone" size={58} color="#fff" />
                                    </RecordIcon>
                                                </TouchableOpacity>}
                                    </>
                                )}
                            </CountdownCircleTimer>
                        </TimerWrapper>

                        <ProgressBar>
                            <ProgressBarValue />
                        </ProgressBar>
                    </Container>
                </>
            )}
        </Wrapper>
    )
}

export default NextChallengeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: Dimensions.get('screen').height
        // justifyContent: 'center',
    },
    oval: {
        top: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalButton: {
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        elevation: 2,
        marginLeft: 20,
    },
    modalButtonOpen: {
        backgroundColor: "#F194FF",
    },
    modalButtonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
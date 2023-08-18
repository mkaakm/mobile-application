import {
    Text,
    View,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
    Modal,
    StyleSheet,
    useWindowDimensions,
    Dimensions, Pressable
} from "react-native";
import {useRef, useState, useEffect} from "react";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import {useSelector, useDispatch} from "react-redux";

import Wrapper from "../../shared/components/Wrapper";

import LinearBackground from "../../shared/components/LinearBackground";

import Container from "../../shared/components/Container";
import BackButton from "../../shared/components/BackButton";
import audioSrc from "../../assets/images/script/audio.jpg"
import {Audio} from "expo-av";

import {getScriptStep} from "../../redux/scripts/scripts-selectors";
import {nextStep} from "../../redux/scripts/scripts-slice";
import {addRecord} from "../../shared/api/recordings";

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

const RecordingTitle = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 18px;
`

const RecordingTitleValue = styled.Text`
  font-family: "PTSans_400Regular";
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
  line-height: 18px;
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

const ButtonWrapper = styled.View`
  width: 100%;
  margin-bottom: 25px;
`

const ButtonDiv = styled.View`
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

const ModalButtonWrapper = styled.View`
display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`

const addToFormData = (formData, name, uri) => {
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    formData.append(name, {
        uri,
        name: `${name}.${fileType}`,
        type: `audio/x-${fileType}`,
    });
}

const RecordingResultScreen = ({navigation, route}) => {
    const {height} = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState(true);
    const [sendRecord, setSendRecord] = useState(false);
    const { data, scriptTitle } = route.params;

    const step = useSelector(getScriptStep);

    const dispatch = useDispatch();

    const doNextStep = ()=> {
        dispatch(nextStep())
    }

    useEffect(()=> {
        if(sendRecord) {
            const fetchUpload = async() => {
                let formData = new FormData();
                addToFormData(formData, "record1", data[0].file);
                addToFormData(formData, "record2", data[1].file);
                addToFormData(formData, "record3", data[2].file);
                formData.append("script", step + 1);
                try {
                    await addRecord(formData);
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

    function getRecordingLines() {
        return data.map((recordingLine, index) => {
            return (
                <Record key={index} >
                    <TouchableOpacity onPress={async () => {
                        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
                        await recordingLine.sound.replayAsync()
                    }}>
                        <Feather name="play-circle" size={24} color="#0086CC" />
                    </TouchableOpacity>
                    <RecordAudio source={audioSrc} />
                    <RecordTime>{recordingLine.duration}</RecordTime>
                    <SimpleLineIcons name="trash" size={24} color="#CACED1" />
                </Record>
            );
        });
    }

    return (
        <Wrapper>
            <LinearBackground style={{height}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Well done! Your practice script has been sent to your manager.</Text>
                            <ModalButtonWrapper>
                                <Pressable
                                    style={[styles.modalButton, styles.modalButtonClose]}
                                    onPress={() => {
                                        setModalVisible(false);
                                        setSendRecord(true);
                                    }}>
                                    <Text style={styles.textStyle}>Ok</Text>
                                </Pressable>
                            </ModalButtonWrapper>
                        </View>
                    </View>
                </Modal>
                <Container>
                    <BackButton navigation={navigation} screen="Home" />
                    <Title>
                        Script & Role Play
                    </Title>
                    <SubTitle>TODAY’S CHALLENGE</SubTitle>
                    <TaskName>{scriptTitle}</TaskName>
                    <RecordingTitle>My Recordings <RecordingTitleValue>(3/3)</RecordingTitleValue> </RecordingTitle>
                    {getRecordingLines()}
                    <ButtonWrapper>
                        <TouchableOpacity onPress={()=> {
                            doNextStep();
                            if(step === 1) {
                                navigation.navigate("NextChallenge");
                            }
                            else {
                                navigation.navigate("DayScript");
                            }
                        }}>
                            <ButtonDiv>
                                <ButtonText>Next {step === 0 ? "" : "Challenge"}</ButtonText>
                            </ButtonDiv>
                        </TouchableOpacity>
                    </ButtonWrapper>
                </Container>
            </LinearBackground>
        </Wrapper>
    )
}

export default RecordingResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: Dimensions.get('screen').height
        // justifyContent: 'center',
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
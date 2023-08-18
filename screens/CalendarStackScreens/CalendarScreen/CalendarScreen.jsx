import {
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
    Pressable,
    View,
    Modal,
} from "react-native";
import {useRef, useState, useEffect, useCallback, useMemo} from "react";
import {useSelector} from "react-redux";

import ConfirmModal from "../../../modules/ConfirmModal";

import {
    SelectWrapper,
    CalendarStepLine,
    CalendarItem,
    CalendarItemTitle,
    CalendarItemTime,
    CalendarDayBox,
    VideoWrapper,
    ModalButtonWrapper,
} from "../../../modules/Calendar/UI";

import {days, months, monthNames, itemBgColors} from "./calendarItems";

import Wrapper from "../../../shared/components/Wrapper";
import Container from "../../../shared/components/Container";

import CalendarDayItem from "../../../modules/Calendar/CalendarDayItem";
import CalendarVideo from "../../../modules/Calendar/CalendarVideo";
import SelectMonth from "../../../modules/Calendar/SelectMonth";

import {getTodayTasks, getUncompleteTasks} from "../../../redux/today-tasks/today-tasks-selectors";

import {triggerAudio, getCalendarItemTop, getCalendarItemBottom, getItemTime, normalizedData} from "../../../modules/Calendar/functions";

const CalendarScreen = ({navigation}) => {
    const month = useMemo(()=> {
        const date = new Date();
        return date.getMonth();
    }, [])

    const [modalVisible, setModalVisible] = useState(false);

    const {width, height} = useWindowDimensions();
    const [open, setOpen] = useState(false);
    const [isSync, setIsSync] = useState(false)
    const [value, setValue] = useState(months[10]);

    const [currentDay, setCurrentDay] = useState(()=> {
        const now = new Date();
        const day = now.getDay();
        const result = (day === 6) ? 5 : day;
        return result;
    });

    const [shouldPlay, setShouldPlay] = useState(true);

    const uncompleteTasks = useSelector(getUncompleteTasks);

    useEffect(()=> {
        const unsubscribe = navigation.addListener('blur', () => {
            setShouldPlay(false)
        });

        navigation.addListener('focus', () => {
            setShouldPlay(true)
        });

        if(uncompleteTasks.length) {
            navigation.navigate("Pipeline")
        }
        return unsubscribe;
    }, [uncompleteTasks, navigation])

    const {day, allDays} = useSelector(getTodayTasks);

    if(day === "") {
        return <Text>...Loading</Text>
    }

    const changeCurrentDay = useCallback((index) => {
        setCurrentDay(index + 1)
    }, []);

    const elements = days.map((item, index) => <CalendarDayItem index={index} key={item.title} changeCurrentDay={changeCurrentDay} {...item} />);

    const renderItem = ({item}) => {
        const {id, name, start, end, type, step, script} = item;
        const [startTimeHour, startTimeMinutes] = start.split(":");
        const [endTimeHour, endTimeMinutes] = end.split(":");
        const startDate = startTimeHour < 13 ? start : `${startTimeHour - 12}:${startTimeMinutes}`;
        const endDate = endTimeHour < 13 ? end : `${endTimeHour - 12}:${endTimeMinutes}`;
        const line = getItemTime(item);
        const displayLine = startTimeMinutes === "00";
        return (
            <TouchableOpacity key={id} onPress={() => {

                if (name === "Mindset Moment") {
                    setShouldPlay(false)
                    navigation.navigate("MorningMindset")
                }
                if (name === "Scripts/Role Play") {
                    setShouldPlay(false)
                    navigation.navigate("ScriptRolePlay", {
                        script: script,
                    })
                }
            }}>
                <CalendarItem
                    style={{width: width - 80, height: 120 * step, marginTop: getCalendarItemTop(step), marginBottom: getCalendarItemBottom(step), backgroundColor: itemBgColors[type]}}>
                    {line}
                    {displayLine && <CalendarStepLine style={{width: width - 80}}/>}
                    <CalendarItemTitle>
                        {name}
                    </CalendarItemTitle>
                    <CalendarItemTime>
                        {name && `${startDate} - ${endDate}`}
                    </CalendarItemTime>
                </CalendarItem>
            </TouchableOpacity>)
    }

    const confirmReshedule = useCallback(()=> {
        setModalVisible(false);
        setIsSync(true)
    }, []);

    const cancelReshedule = useCallback(()=> setModalVisible(false), [])

    return (
        <>
            <Wrapper type="static">
                <Container>
                    <ConfirmModal text='Would like to move the pre-set task to an empty spot in your calendar?' onConfirm={confirmReshedule} onCancel={cancelReshedule} />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Would like to move the pre-set task to an empty spot in your calendar?</Text>
                                <ModalButtonWrapper>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={confirmReshedule}>
                                        <Text style={styles.textStyle}>Yes</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(false)}>
                                        <Text style={styles.textStyle}>No</Text>
                                    </Pressable>
                                </ModalButtonWrapper>

                            </View>
                        </View>
                    </Modal>

                    <SelectWrapper>
                       <SelectMonth placeholder={monthNames[month]} open={open} months={months} value={value} setValue={setValue} setOpen={setOpen} />
                    </SelectWrapper>

                    <CalendarDayBox>
                        {elements}
                    </CalendarDayBox>
                        <FlatList data={normalizedData(currentDay, allDays[currentDay])} keyExtractor={item => item.id} renderItem={renderItem} alwaysBounceVertical={false} />
                    <View style={styles.container}>
                    </View>
                </Container>
            </Wrapper>

            <VideoWrapper style={{top: height - 270}}>
               <CalendarVideo shouldPlay={shouldPlay} />
            </VideoWrapper>
        </>
    )
}

export default CalendarScreen;

const styles = StyleSheet.create({
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 20,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
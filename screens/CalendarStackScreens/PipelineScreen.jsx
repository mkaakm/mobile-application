import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    useWindowDimensions,
    Dimensions
} from "react-native";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Alert} from "react-native";

import Wrapper from "../../shared/components/Wrapper";
import Container from "../../shared/components/Container";

import {addCompleteTask, addAlmostCompleteTask, addResheduleTask, replaceTask} from "../../redux/today-tasks/today-tasks-slice";
import {
    getUncompleteTasksCount,
    getRemindTasks,
    getUncompleteTasks
} from "../../redux/today-tasks/today-tasks-selectors";

const ContentWrapper = styled.View`
  margin: 15px auto 15px;
  position: relative;
  padding-bottom: 25px;
`

const Title = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 32px;
`

const Time = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 12px;
  color: #0086CC;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Message = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 32px;
  line-height: 36px;
  color: #292266;
  margin-bottom: 20px;
`

const AnswerWrapper = styled.View`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 80px;
  flex-direction: row;
  justify-content: space-between;
`

const Answer = styled.TouchableOpacity`
  width: 48%;
  height: 122px;
  border-radius: 12px;
  background-color: #fff;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0,0,0, 0.064631);
`

const AnswerText = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
`

const AnswerFullWrapper = styled.View`
  width: 100%;
  padding: 25px 30px;
  border-radius: 20px 30px 30px 30px;
  box-shadow: 0px 0px 24px rgba(0,0,0, 0.098312);
  background-color: rgba(255,255,255, 1);
  margin-bottom: 100px;
`

const AnswerTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  margin-top: 25px;
  position: relative;
  top: -20px;
`

const AnswerVariant = styled.TouchableOpacity`
  border-radius: 8px;
  border: 2px solid rgba(202,206,209, 1);
  height: 62px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const AnswerVariantText = styled.Text`
  color: #0086CC;
  font-family: "PTSans_700Bold";
  font-size: 14px;
  text-align: center;
`

const RemindMessage = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 18px;
  line-height: 20px;
  color: #292266;
  margin-bottom: 20px;
`


const ListItem = styled.View`
  border-radius: 8px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.072307);
  background-color: rgba(255, 255, 255, 1);
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

const ListItemCircle = styled.View`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(202, 206, 209, 1);
  margin-right: 8px;
`

const ListItemTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 12px;
  margin-bottom: 5px;
`

const ListItemTime = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 10px;
  color: #858687;
`

const getRegularDate = date => {
    const [hour, minutes] = date.split(":");
    const result = hour < 13 ? date : `${hour - 12}:${minutes}`;
    return result;
}

const PipelineScreen = ({navigation}) => {
    const [answer, setAnswer] = useState(null);
    const [count, setCount] =  useState(null);
    const [reschedule, setReschedule] = useState(null)
    const [selectRemindTask, setSelectRemindTask] = useState(null)

    const uncompleteTasksCount = useSelector(getUncompleteTasksCount)
    const uncompleteTasks = useSelector(getUncompleteTasks);

    const remindTasks = useSelector(getRemindTasks);

    const dispatch = useDispatch();

    // const { data } = route.params;
    const [data = {}] = uncompleteTasks;

    useEffect(()=> {
        if(answer) {
            setAnswer(null)
            dispatch(addCompleteTask(data))
            navigation.navigate("Success")
        }
        if(reschedule === "yes") {
            if(uncompleteTasksCount === 0) {
                setAnswer(null)
                dispatch(addResheduleTask(data));
                navigation.navigate("Calendar")
            }
            else {
                setSelectRemindTask(true);
            }


        }
        if(reschedule === "no") {
            Alert.alert("You manager will be notified if that you chose to proceed with this option")
        }
    }, [reschedule, answer])

    const taskElements = remindTasks.map(({name, start, end, done, type}, index) => (
        <ListItem key={index}>
            <TouchableOpacity onPress={()=> {
                setAnswer(null)
                dispatch(replaceTask({name, start, end, done, type, replaceTask: data}))
                navigation.navigate("Calendar")
            }} ><ListItemCircle/></TouchableOpacity>
            <View>
                    <ListItemTitle>{name}</ListItemTitle>
                    <ListItemTime>{start} - {end}</ListItemTime>
            </View>
        </ListItem>
    ));

    return (
            <Wrapper>
                <Container style={{minHeight: Dimensions.get('screen').height}} >
                    <Title>Pipeline Messaging</Title>
                    <Time>{data.start ? getRegularDate(data.start) : data.start} {data.end ? getRegularDate(data.end) : data.end} {data.type}  - TASK</Time>
                    <Message>Did you finish {data.name}</Message>
                    {answer === null && (
                        <AnswerWrapper>
                            <Answer onPress={()=> setAnswer(true)}>

                                    <Ionicons name="md-checkmark-sharp" size={48} color="#25CC90" />
                                    <AnswerText>Yes</AnswerText>

                            </Answer>

                            <Answer onPress={()=> setAnswer(false)}>

                                    <Image style={{width: 32, height: 32, position: "relative", top: 13, marginBottom: 20}} source={{uri: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1668819824/salesfuel/cross_rugacl.jpg"}} />
                                    <AnswerText>No</AnswerText>

                            </Answer>
                        </AnswerWrapper>
                    )}
                    {(answer === false && count === null) && (
                        <AnswerFullWrapper>
                            <AnswerTitle>How many call ?</AnswerTitle>
                            <AnswerVariant onPress={()=> {
                                setAnswer(null)
                                dispatch(addAlmostCompleteTask(data))
                                navigation.navigate("Success")
                                // setCount("most");

                            }}>
                                <AnswerVariantText>Most</AnswerVariantText>
                            </AnswerVariant>
                            <AnswerVariant onPress={()=> {

                                // setCount("some")
                                setAnswer(null)
                                dispatch(addAlmostCompleteTask(data))
                                navigation.navigate("Success")
                            }}>
                                <AnswerVariantText>Some</AnswerVariantText>
                            </AnswerVariant>
                            <AnswerVariant onPress={()=> setCount("none")}>
                                <AnswerVariantText>None</AnswerVariantText>
                            </AnswerVariant>
                        </AnswerFullWrapper>
                    )}

                    {count === "none" && selectRemindTask === null && (
                        <AnswerFullWrapper>
                            <AnswerTitle>Would like to reschedule again in your flex time?</AnswerTitle>
                            <AnswerVariant onPress={()=> setReschedule("yes")}>
                                <AnswerVariantText>Yes</AnswerVariantText>
                            </AnswerVariant>
                            <AnswerVariant onPress={()=> setReschedule("no")}>
                                <AnswerVariantText>No</AnswerVariantText>
                            </AnswerVariant>
                        </AnswerFullWrapper>
                    )}

                    {selectRemindTask && (
                        <>
                            <RemindMessage>Which task would you like to replace the missed task with?</RemindMessage>
                            {taskElements}
                        </>
                    )}

                </Container>

            </Wrapper>
    )
}

export default PipelineScreen;

const styles = StyleSheet.create({

});
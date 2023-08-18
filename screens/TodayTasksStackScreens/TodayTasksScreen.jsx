import {
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import {useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import Wrapper from "../../shared/components/Wrapper";
import LinearBackground from "../../shared/components/LinearBackground";
import Container from "../../shared/components/Container";
import ScreenName from "../../shared/components/ScreenName";
import OvalContainer from "../../shared/components/OvalContaner";

import {getTodayTasks} from "../../redux/today-tasks/today-tasks-selectors";
import {toogleCompleteTask} from "../../redux/today-tasks/today-tasks-slice";

const Header = styled.View`
  width: 100%;
  box-shadow: 0px 2px 14px rgba(51, 53, 53, 0.224514);
  opacity: 1;
  height: 154px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 20;
  position: absolute;
  top: -170px;
`

const HeaderTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`

const HeaderText = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 10px;
  text-align: center;
  margin-bottom: 10px;
  color: #858687;
`

const HeaderButton = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 134, 204, 1);
  width: 100%;
  height: 44px;
  border-radius: 35px;
`

const HeaderButtonText = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 12px;
  text-align: center;
  color: #fff;
`

const ListName = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const ListNameCount = styled.Text`
  font-family: "PTSans_400Regular";
  color: #858687;
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

const PerfectDayWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

const PerfectDayItem = styled.Text`
  border-radius: ${({done}) => done ? "0px" : "8px" };
  border: 1px solid rgba(202, 206, 209, 1);
  font-family: "PTSans_400Regular";
  color: ${({done}) => done ? "#fff" : "#858687" }
  height: 45px;
  width: 45px;
  flex-direction: row;
  text-align: center;
  line-height: 30px;
  margin-right: 12px;
  background-color: ${({done}) => done ? "#00b050" : "#fff" };
`

const perfectDays = [
    "M", "T", "W", "TH", "F"
]

const getNowTask = (tasks)=> {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    let result = tasks.find(item => {
        const [startHour, startMinutes] = item.start.split(":");
        if(hour === Number(startHour) && Number(startMinutes) <= minutes) {
            return true;
        }
        return false;
    })
    const index = tasks.findIndex(item => item === result);
    result = tasks[index + 1];
    if(!result && hour < 21) {
        result = tasks.find(item => {
            const [endHour, endMinutes] = item.end.split(":");
            if(hour < Number(endHour)) {
                return true;
            }
            return false;
        })
    }
    return result?.name;
}

const getRegularDate = date => {
    const [hour, minutes] = date.split(":");
    const result = hour < 13 ? date : `${hour - 12}:${minutes}`;
    return result;
}

const TodayTasksScreen = ({navigation}) => {
    const todayTasks = useSelector(getTodayTasks);
    const dispatch = useDispatch();
    const nowTaskTitle = getNowTask(todayTasks.items);

    const completeTasks = todayTasks.items.filter(({done}) => done);

    const moveToTask = (name) => {
        if (name === "Mindset Moment") {
            navigation.navigate("MorningMindset")
        }
        if (name === "Scripts/Role Play") {
            navigation.navigate("ScriptRolePlay")
        }
        if (name === "Pipeline Review") {
            navigation.navigate("Pipeline")
        }
    }

    const taskElements = todayTasks.items.map(({name, start, end, done, type}, index) => (
        <ListItem key={index}>
            {done ?  <TouchableOpacity onPress={()=> dispatch(toogleCompleteTask({name, start, end, type}))}><Ionicons style={{marginRight: 8}} name="md-checkmark-circle" size={40} color="#55bacc"/></TouchableOpacity> :
                <TouchableOpacity onPress={()=> dispatch(toogleCompleteTask({name, start, end, type}))}><ListItemCircle/></TouchableOpacity>}
            <View>
                <TouchableOpacity onPress={()=> moveToTask(name)}>
                    <ListItemTitle>{name}</ListItemTitle>
                    <ListItemTime>{getRegularDate(start)} - {getRegularDate(end)}</ListItemTime>
                </TouchableOpacity>
            </View>
        </ListItem>
    ));

    const taskDone = completeTasks.length/todayTasks.items.length;
    const todayIndex = useMemo(()=> {
        const date = new Date();
        return date.getDay();
    }, []);

    const perfectDayElements = perfectDays.map((day, index) => {
        if(index === (todayIndex - 1) && taskDone === 1) {
            return (<TouchableOpacity onPress={() => navigation.navigate("EndOfDay")}>
                <PerfectDayItem done key={index}>{day}</PerfectDayItem>
            </TouchableOpacity>)
        }
        return <PerfectDayItem key={index}>{day}</PerfectDayItem>;
    })

    return (
        <Wrapper type="scroll" background="dark">
            <LinearBackground style={styles.header}>
                <Container style={styles.headerContainer}>
                    <ScreenName type='light' style={styles.screenName}>Today’s Tasks</ScreenName>
                </Container>
            </LinearBackground>
            <OvalContainer />

            <Container>
                <Header>
                    <HeaderTitle>{nowTaskTitle}</HeaderTitle>
                    {nowTaskTitle === "Scripts/Role Play" && <HeaderText>Take 1 hour to pratice reading scripts.</HeaderText>}
                    {nowTaskTitle === "Scripts/Role Play" && <TouchableOpacity style={{width: "100%"}} onPress={() => navigation.navigate("ScriptRolePlay")}>
                        <HeaderButton>
                            <HeaderButtonText>Start</HeaderButtonText>
                        </HeaderButton>
                    </TouchableOpacity>}
                </Header>
                <ListName>
                    My Tasks <ListNameCount>({completeTasks.length}/{todayTasks.items.length})</ListNameCount>
                </ListName>
                {taskElements}

                <ListName>
                    Perfect days <ListNameCount>(0/5)</ListNameCount>
                </ListName>
                <PerfectDayWrapper>
                    {perfectDayElements}
                </PerfectDayWrapper>
            </Container>
        </Wrapper>
    )
}

export default TodayTasksScreen;


const styles = StyleSheet.create({
    header: {
        height: 200,
    },
    screenName: {
        marginBottom: 15
    },
    arrow: {
        height: 18,
        width: 21,
        marginLeft: 10,
        // position: "absolute",
        // top: 20,
        // right: 15,
    }
});
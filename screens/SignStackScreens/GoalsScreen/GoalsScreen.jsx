import {
    StyleSheet,
} from "react-native";
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";

import Wrapper from "../../../shared/components/Wrapper";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";

import GoalItem from "../../../modules/Goal/GoalItem";

import {setGoal} from "../../../redux/auth/auth-slice";

import items from "./items";

const GoalsScreen = ({navigation}) => {

    const [userGoal, setUserGoal] = useState("");
    const dispatch = useDispatch();

    useEffect(()=> {
        if(userGoal) {
            dispatch(setGoal(userGoal));
            navigation.navigate("Home");
        }
    }, [userGoal])

    const elements = items.map(item => <GoalItem key={item.id} onPress={() => setUserGoal(item.title)} {...item} />)

    return (
        <Wrapper>
            <Container style={styles.container}>
                <Title style={{marginBottom: 25}}>What's your goal?</Title>
                {elements}
            </Container>
        </Wrapper>
    )
}

export default GoalsScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 45,
    },
});
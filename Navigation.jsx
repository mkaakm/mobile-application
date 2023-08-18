import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from "./screens/SplashScreen";

import WelcomeScreen1 from "./screens/WelcomeStackSreens/WelcomeScreen1";
import WelcomeScreen2 from "./screens/WelcomeStackSreens/WelcomeScreen2";
import WelcomeScreen3 from "./screens/WelcomeStackSreens/WelcomeScreen3";
import WelcomeScreen4 from "./screens/WelcomeStackSreens/WelcomeScreen4";

import SignUpScreen from "./screens/SignStackScreens/SignUpScreen";
import SignInScreen from "./screens/SignStackScreens/SignInScreen";
import GoalsScreen from "./screens/SignStackScreens/GoalsScreen";

import MorningMindsetScreen from "./screens/CalendarStackScreens/MorningMindsetScreen";
import ScriptRolePlayScreen from "./screens/CalendarStackScreens/ScriptRolePlayScreen";
import DayScriptScreen from "./screens/CalendarStackScreens/DayScriptScreen";
import RecordingResultScreen from "./screens/CalendarStackScreens/RecordingResultScreen";
import NextChallengeScreen from "./screens/CalendarStackScreens/NextChallengeScreen";
import PipelineScreen from "./screens/CalendarStackScreens/PipelineScreen";
import SuccessScreen from "./screens/CalendarStackScreens/SuccessScreen";
import EndOfDayScreen from "./screens/EndOfDayStackScreens/EndOfDayScreen";

import BottomMenu from "./screens/BottomMenu";

import {setTodayTasks} from "./redux/today-tasks/today-tasks-slice";

import {getAuth} from "./redux/auth/auth-selector";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {isSignUp, isSignIn, goal} = useSelector(getAuth)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(setTodayTasks())
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown: false}}/>
                {!isSignUp && <Stack.Group>
                    <Stack.Screen name="Welcome1" component={WelcomeScreen1} options={{headerShown: false}}/>
                    <Stack.Screen name="Welcome2" component={WelcomeScreen2} options={{headerShown: false}}/>
                    <Stack.Screen name="Welcome3" component={WelcomeScreen3} options={{headerShown: false}}/>
                    <Stack.Screen name="Welcome4" component={WelcomeScreen4} options={{headerShown: false}}/>
                </Stack.Group>}
                {!isSignIn && <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
                </Stack.Group>}
                {!goal && <Stack.Screen name="Goals" component={GoalsScreen} options={{headerShown: false}}/>}
                <Stack.Screen name="Home" component={BottomMenu} options={{headerShown: false}}/>
                <Stack.Screen name="MorningMindset" component={MorningMindsetScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ScriptRolePlay" component={ScriptRolePlayScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DayScript" component={DayScriptScreen} options={{headerShown: false}}/>
                <Stack.Screen name="RecordingResult" component={RecordingResultScreen} options={{headerShown: false}}/>
                <Stack.Screen name="NextChallenge" component={NextChallengeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Pipeline" component={PipelineScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Success" component={SuccessScreen} options={{headerShown: false}}/>
                <Stack.Screen name="EndOfDay" component={EndOfDayScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

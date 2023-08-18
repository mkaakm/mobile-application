import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CalendarScreen from "./CalendarScreen";
import ScriptRolePlayScreen from "./ScriptRolePlayScreen";
import PipelineScreen from "./PipelineScreen";
import SuccessScreen from "./SuccessScreen";
import MorningMindsetScreen from "./MorningMindsetScreen";

const CalendarStack = createNativeStackNavigator();

const CalendarStackScreens = () => {

    return (
        <CalendarStack.Navigator>
            <CalendarStack.Screen name="CalendarScreen" component={CalendarScreen} options={{headerShown: false}}/>
            <CalendarStack.Screen name="ScriptRolePlayScreen" component={ScriptRolePlayScreen} options={{headerShown: false}}/>
            <CalendarStack.Screen name="PipelineScreen" component={PipelineScreen} options={{headerShown: false}}/>
            <CalendarStack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
            <CalendarStack.Screen name="MorningMindsetScreen" component={MorningMindsetScreen} options={{headerShown: false}}/>
        </CalendarStack.Navigator>
    );
}

export default CalendarStackScreens;
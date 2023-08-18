import {createNativeStackNavigator} from "@react-navigation/native-stack";

import EndOfDayScreen from "./EndOfDayScreen";
import ActivityScreen from "./ActivityScreen";

const EndOfDayStack = createNativeStackNavigator();

const EndOfDayStackScreens = () => {
    return (<EndOfDayStack.Navigator>
        <EndOfDayStack.Screen name="EndOfDayScreen" component={EndOfDayScreen} options={{headerShown: false}}/>
        <EndOfDayStack.Screen name="ActivityScreen" component={ActivityScreen} options={{headerShown: false}}/>
    </EndOfDayStack.Navigator>)
}

export default EndOfDayStackScreens;
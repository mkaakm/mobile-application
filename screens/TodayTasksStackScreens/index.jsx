import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TodayTasksScreen from "./TodayTasksScreen";

const TodayTasksStack = createNativeStackNavigator();

const TodayTasksStackScreens = () => {
    return (<TodayTasksStack.Navigator>
        <TodayTasksStack.Screen name="TodayTasksScreen" component={TodayTasksScreen} options={{headerShown: false}}/>
    </TodayTasksStack.Navigator>)
}

export default TodayTasksStackScreens;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

import CalendarScreen from "./CalendarStackScreens/CalendarScreen";
import TodayTasksScreen from "./TodayTasksStackScreens/TodayTasksScreen";
import ActivityScreen from "./EndOfDayStackScreens/ActivityScreen";
import ProfileScreen from "./ProfileStackScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

const icons = {
    "Calendar": "calendar-outline",
    "TodayTasks": "list",
    "Activity": "stats-chart-outline",
    "Profile": "md-person-circle-outline",
}

const BottomNMenu = () => {
    return (
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    const iconName = icons[route.name];

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#24cc8f',
                tabBarInactiveTintColor: '#292266',
                tabBarShowLabel: false,
            })}>
                <Tab.Screen name="Calendar" component={CalendarScreen} options={{headerShown: false}}/>
                <Tab.Screen name="TodayTasks" component={TodayTasksScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown: false}}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
    )
}

export default BottomNMenu
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ProfileScreen from "./ProfileScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreens = () => {
    return (<ProfileStack.Navigator>
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
    </ProfileStack.Navigator>)
}

export default ProfileStackScreens;

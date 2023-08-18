import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import GoalsScreen from "./GoalsScreen/GoalsScreen";

const SignStack = createNativeStackNavigator();

const SignStackScreens = () => {
    return (
        <SignStack.Navigator options={{
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
            }
        }}>
            <SignStack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
            <SignStack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
            <SignStack.Screen name="GoalsScreen" component={GoalsScreen} options={{headerShown: false}}/>
        </SignStack.Navigator>
    );
}

export default SignStackScreens;
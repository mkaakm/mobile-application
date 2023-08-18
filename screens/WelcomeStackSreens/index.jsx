import {createNativeStackNavigator} from "@react-navigation/native-stack";

import WelcomeScreen1 from "./WelcomeScreen1";
import WelcomeScreen2 from "./WelcomeScreen2";
import WelcomeScreen3 from "./WelcomeScreen3";
import WelcomeScreen4 from "./WelcomeScreen4";

const WelcomeStack = createNativeStackNavigator();

const WelcomeStackScreens = () => {
    return (
        <WelcomeStack.Navigator>
            <WelcomeStack.Screen name="WelcomeScreen1" component={WelcomeScreen1} options={{headerShown: false}}/>
            <WelcomeStack.Screen name="WelcomeScreen2" component={WelcomeScreen2} options={{headerShown: false}}/>
            <WelcomeStack.Screen name="WelcomeScreen3" component={WelcomeScreen3} options={{headerShown: false}}/>
            <WelcomeStack.Screen name="WelcomeScreen4" component={WelcomeScreen4} options={{headerShown: false}}/>
        </WelcomeStack.Navigator>
    );
}

export default WelcomeStackScreens;
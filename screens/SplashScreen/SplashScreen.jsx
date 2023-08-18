import {Image, StyleSheet} from "react-native";
import {useEffect} from "react";
import {useSelector} from "react-redux";

import LinearBackground from "../../shared/components/LinearBackground";

import {getAuth} from "../../redux/auth/auth-selector";

import {setToken} from "../../shared/api/auth";

import splashLogo from "../../assets/images/logo/splash-logo.png"

const SplashScreen = ({navigation}) => {
    const {isSignUp, isSignIn, goal} = useSelector(getAuth);

    useEffect(() => {
        setTimeout(async () => {
            if(!isSignUp) {
                navigation.navigate("Welcome1")
            }
            if(isSignUp && !isSignIn) {
                return navigation.navigate("SignIn")
            }
            if(isSignUp && isSignIn && !goal) {
                await setToken();
                return navigation.navigate("Goals")
            }
            if(isSignUp && isSignIn && goal) {
                await setToken();
                return navigation.navigate("Home")
            }

        }, 3000);
    }, []);

    return (
        <LinearBackground style={styles.wrapper}>
            <Image style={styles.logo} source={splashLogo}/>
        </LinearBackground>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 102,
        width: 85,
    }
});
import {
    View,
    Alert,
    StyleSheet,
} from "react-native";
import {useState, useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";

import {setLogin, increaseSignInTry} from "../../../redux/auth/auth-slice";

import Wrapper from "../../../shared/components/Wrapper";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import Field from "../../../shared/components/Field";
import PasswordField from "../../../shared/components/PasswordField";
import ActiveLink from "../../../shared/components/ActiveLink";
import ActiveButton from "../../../shared/components/ActiveButton";

import {signIn} from "../../../shared/api/auth";
import {getSignInTry} from "../../../redux/auth/auth-selector";

import {SubmitButtonWrapper, RegisterTextWrapper, RegisterText} from "../UI";

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submit, setSubmit] = useState(false);

    const signinTry = useSelector(getSignInTry);

    const dispatch = useDispatch();

    const onSubmit = () => {
        if (!email || !password) {
            Alert.alert("Email and password must be filled");
            return;
        }
        setSubmit(true)
    }

    const signUp = useCallback(() => navigation.navigate("SignUp"), []);
    const forgotPassword = useCallback(() => navigation.navigate("ForgotPassword"), [])

    useEffect(() => {
        const fetchSignin = async () => {
            try {
                const requestdata = {
                    email,
                    password
                };
                await signIn(requestdata);
                setPassword("")
                setEmail("")
                dispatch(setLogin(true));
                navigation.navigate("Goals");
            } catch (error) {
                if(signinTry >= 7) {
                    Alert.alert("Invalid login credentials. Account locked. Please contact the system administrator.")
                } else {
                    Alert.alert("Invalid login credentials. Please try again");
                }

                dispatch(increaseSignInTry());
            } finally {
                setSubmit(false)
            }
        };

        if (submit) {
            fetchSignin()
        }

    }, [submit])

    return (
        <Wrapper type="none-scroll">
            <Container style={styles.container}>
                <View>
                    <Title size="large" style={styles.title}>Sign In</Title>
                    <Field
                        placeholder="EMAIl ADDRESS"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <PasswordField
                        placeholder="PASSWORD"
                        onChangeText={setPassword}
                        password={true}
                        value={password}
                    />
                    <ActiveLink onPress={forgotPassword} style={styles.forgotPassword}>Forgot Password?</ActiveLink>
                </View>
                <SubmitButtonWrapper>
                    <ActiveButton onPress={onSubmit} text="Sign in"/>
                    <RegisterTextWrapper>
                        <RegisterText>Don’t have an account?</RegisterText>
                        <ActiveLink onPress={signUp}>Register</ActiveLink>
                    </RegisterTextWrapper>
                </SubmitButtonWrapper>
            </Container>
        </Wrapper>
    )
}

export default SignInScreen;


const styles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: "center",
    },
    title: {
        marginBottom: 15,
    },
    forgotPassword: {
        textAlign: "right",
    }
});
import {
    View,
    Alert,
    StyleSheet,
} from "react-native";
import {useState, useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";

import Wrapper from "../../../shared/components/Wrapper";
import Container from "../../../shared/components/Container";
import Title from "../../../shared/components/Title";
import Field from "../../../shared/components/Field";
import PasswordField from "../../../shared/components/PasswordField";
import ActiveLink from "../../../shared/components/ActiveLink";
import ActiveButton from "../../../shared/components/ActiveButton";

import {SubmitButtonWrapper, RegisterTextWrapper, RegisterText} from "../UI";

import {setSignUp} from "../../../redux/auth/auth-slice";

import {signUp} from "../../../shared/api/auth";

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [submit, setSubmit] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = () => {
        if (!email || !password) {
            Alert.alert("Email and password must be filled");
            return;
        }
        setSubmit(true)
    }

    const signIn = useCallback(() => navigation.navigate("SignIn"), []);

    useEffect(() => {
        const fetchSignUp = async () => {
            try {
                const requestdata = {
                    email,
                    password
                };
                await signUp(requestdata);
                setPassword("")
                setEmail("")
                dispatch(setSignUp(true));
                navigation.navigate("SignIn");
            } catch (error) {
                console.log(error.response)
                Alert.alert("Request failed with status code 503")
            } finally {
                setSubmit(false)
            }
        };

        if (submit) {
            fetchSignUp()
        }
    }, [submit])

    return (
        <Wrapper type="none-scroll">
            <Container style={styles.container}>
                <View>
                    <Title size="large" style={styles.title}>Sign Up</Title>
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
                </View>
                <SubmitButtonWrapper>
                    <ActiveButton onPress={onSubmit} text="Sign up"/>
                    <RegisterTextWrapper>
                        <RegisterText>Already have account?</RegisterText>
                        <ActiveLink onPress={signIn}>Sign in</ActiveLink>
                    </RegisterTextWrapper>
                </SubmitButtonWrapper>
            </Container>
        </Wrapper>
    )
}

export default SignUpScreen;


const styles = StyleSheet.create({
    container: {
        position: "relative",
        justifyContent: "center",
    },
    title: {
        marginBottom: 15,
    },
});
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
    Dimensions
} from "react-native";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import Wrapper from "../../shared/components/Wrapper";
import LinearBackground from "../../shared/components/LinearBackground";
import Container from "../../shared/components/Container";
import BackButton from "../../shared/components/BackButton";

const Title = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
  letter-spacing: 0.5px;
  position: relative;
`

const SubTitle = styled.Text`
  font-family: "PTSans_700Bold";
  text-transform: uppercase;
  color: #fff;
  font-size: 8px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`

const TaskName = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 36px;
`

const ListTitle = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 11px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`

const ListItem = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

const ListItemCircle = styled.View`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.292422);
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`

const ListItemText = styled.Text`
  flex: 1;
  font-family: "PTSans_400Regular";
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const ListItemTextBold = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.5px;
`

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  margin-bottom: 25px;
`

const Button = styled.View`
  width: 100%;
  background-color: #0086CC;
  margin: 0 auto 21px;
  padding: 15px;
  border-radius: 35px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.297531);
`;

const ButtonText = styled.Text`
  text-align: center;
  font-family: 'PTSans_400Regular';
  color: #fff;
`;

const RemindLater = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.5px;
`

const ScriptRolePlayScreen = ({route, navigation}) => {
    const {height} = useWindowDimensions();
    return (
        <Wrapper>
            <LinearBackground style={{minHeight: height}}>
                <Container>
                    <BackButton navigation={navigation} screen="Home" />
                    <Title>
                        Script & Role Play
                    </Title>
                    <SubTitle>TODAY’S CHALLENGE</SubTitle>
                    <TaskName>Script Practice</TaskName>

                    <ListTitle>Rules</ListTitle>
                    <ListItem>
                        <ListItemCircle>
                            <Ionicons name="md-checkmark-sharp" size={24} color="#fff"/>
                        </ListItemCircle>

                        <ListItemText>The following is a <ListItemTextBold>script</ListItemTextBold> that you will need
                            to practice verbally.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemCircle>
                            <Ionicons name="md-checkmark-sharp" size={24} color="#fff"/>
                        </ListItemCircle>
                        <ListItemText>You will need to <ListItemTextBold>record yourself
                            practicing</ListItemTextBold> each script.</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemCircle>
                            <Ionicons name="md-checkmark-sharp" size={24} color="#fff"/>
                        </ListItemCircle>
                        <ListItemText><ListItemTextBold>Record yourself 3 times</ListItemTextBold> to complete this
                            task.</ListItemText>
                    </ListItem>
                    <ButtonWrapper>
                        <TouchableOpacity onPress={()=> navigation.navigate("DayScript")}>
                            <Button>
                                <ButtonText>Let’s Start!</ButtonText>
                            </Button>
                        </TouchableOpacity>
                        <RemindLater>Remind me later</RemindLater>
                    </ButtonWrapper>
                </Container>
            </LinearBackground>
        </Wrapper>
    )
}

export default ScriptRolePlayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: Dimensions.get('screen').height
        // justifyContent: 'center',
    },

});
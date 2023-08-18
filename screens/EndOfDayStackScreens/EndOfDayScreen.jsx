import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
    Dimensions
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import BackButton from "../../shared/components/BackButton";

const Wrapper = styled.ScrollView`
  flex: 1;
  backgroundColor: #f7f8fa;
  position: relative;
`;

const ScreenName = styled.Text`
  margin-top: 40px;
  font-family: "PTSans_700Bold";
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`

const Title = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 24px;
  line-height: 24px;
  color: #292266;
  margin-bottom: 30px;
`

const Content = styled.View`
  flex: 1;
  backgroundColor: #f7f8fa;
  position: relative;
  margin: 0 auto;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 30px;
`

const HeaderButton = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 134, 204, 1);
  width: 100%;
  height: 44px;
  border-radius: 35px;
`

const HeaderButtonText = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 12px;
  text-align: center;
  color: #fff;
`

const ListWrapper = styled.View`
  width: 100%;
  margin-bottom: 90px;
`

const ListItem = styled.View`
  border-radius: 8px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.072307);
  background-color: rgba(255, 255, 255, 1);
  padding: 12px 16px;
  margin-bottom: 12px;
`

const ListItemTitle = styled.Text`
  font-family: "PTSans_700Bold";
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 5px;
  color: #858687;
`

const ListItemValue = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 12px;
`

const items = [{
    id: "1",
    name: "Submitted to processing",
    value: 3
},
    {
        id: "1",
        name: "Submitted to processing",
        value: 3
    },
    {
        id: "1",
        name: "Submitted to processing",
        value: 3
    },
    {
        id: "1",
        name: "Submitted to processing",
        value: 3
    },
]

const EndOfDayScreen = ({navigation}) => {
    const {width} = useWindowDimensions();

    const taskElements = items.map(({name, value}, index) => (
        <ListItem key={index}>
            <ListItemTitle>{name}</ListItemTitle>
            <ListItemValue>{value}</ListItemValue>
        </ListItem>
    ));

    return (
        <Wrapper style={{height: Dimensions.get('screen').height}}>
            <Content style={{width: width - 30}}>
                <BackButton navigation={navigation} screen="Calendar" />
                <ScreenName>End of Day</ScreenName>
                <Title>What did your day look like?</Title>
                <ListWrapper>
                    {taskElements}
                </ListWrapper>


                <ButtonWrapper>
                    <TouchableOpacity style={{width: "100%"}}
                                      onPress={() => navigation.navigate("ActivityScreen")}>
                        <HeaderButton>
                            <HeaderButtonText>Submit</HeaderButtonText>
                        </HeaderButton>
                    </TouchableOpacity>
                </ButtonWrapper>


            </Content>

        </Wrapper>
    )
}

export default EndOfDayScreen;


const styles = StyleSheet.create({
    header: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 200,
        position: "relative",
    },
    arrow: {
        height: 18,
        width: 21,
        marginLeft: 10,
        // position: "absolute",
        // top: 20,
        // right: 15,
    }
});
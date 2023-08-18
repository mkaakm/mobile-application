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
import {useState} from "react";
import {LinearGradient} from 'expo-linear-gradient';
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const TaskName = styled.Text`
  font-family: "PTSans_400Regular";
  color: #000;
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 18px;
`

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

const Content = styled.View`
  flex: 1;
  backgroundColor: #f7f8fa;
  position: relative;
  margin: 0 auto;
`;

const MenuWrapper = styled.View`
  border-radius: 19px;
  border: 1px solid #CACED1;
  height: 38px;
  margin-bottom: 17px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const MenuItem = styled.Text`
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 5px;
  font-family: "PTSans_700Bold";
  text-transform: uppercase;
  font-size: 14px;
  color: #858687;
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
  flex-direction: row;
  align-items: center;
`

const ListItemIconWrapper = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  border: 2px solid #93773F;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`

const ListItemTitle = styled.Text`
  font-family: "PTSans_700Bold";
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 0;
  color: #858687;
`

const ListItemValue = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 22px;
`

const ListItemValueDescr = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 11px;
  color: #858687;
`

const menuItems = [
    {
        id: "1",
        text: "D"
    },
    {
        id: "2",
        text: "W"
    },
    {
        id: "3",
        text: "M"
    },
    {
        id: "4",
        text: "Y"
    },
    {
        id: "5",
        text: "ALL"
    },
]

const items = [
    {
        id: "1",
        name: "my hourly rate",
        value: "$50.32",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669065256/salesfuel/activity-icon-1_iyaunz.jpg",
        iconWidth: 14,
        iconHeight: 25
    },
    {
        id: "2",
        name: "submitted to Processing",
        value: "18",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669065684/salesfuel/activity-icon-2_muunvr.jpg",
        iconWidth: 24,
        iconHeight: 24,
        valueDescription: "(Avg 1 per 2 days)"
    },
    {
        id: "3",
        name: "loans closed/funded",
        value: "10",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669066126/salesfuel/activity-icon-3_fekdmb.jpg",
        iconWidth: 28,
        iconHeight: 28,
        valueDescription: "(Avg 2 per week)"
    },
    {
        id: "4",
        name: "Database Conversations",
        value: "92",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669066256/salesfuel/activity-icon-4_vbhjqb.jpg",
        iconWidth: 28,
        iconHeight: 24,
        valueDescription: "(Avg 3 per day)"
    },
    {
        id: "5",
        name: "Partner Conversations",
        value: "64",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669066346/salesfuel/activity-icon-5_qnwokf.jpg",
        iconWidth: 24,
        iconHeight: 19,
        valueDescription: "(Avg 2 per day)"
    },
    {
        id: "6",
        name: "PERFECT DAYS",
        value: "18",
        icon: "https://res.cloudinary.com/dpzx4xaru/image/upload/v1669066485/salesfuel/activity-icon-6_tlnghu.jpg",
        iconWidth: 23,
        iconHeight: 18,
        valueDescription: "(Avg 4 per week)"
    },
]

const ActivityScreen = ({navigation}) => {
    const {width} = useWindowDimensions();
    const [activeMenu, setActiveMenu] = useState(1)

    const menuElements = menuItems.map(({id, text}, index) => <TouchableOpacity onPress={()=> setActiveMenu(index)} style={{width: "20%"}}><MenuItem style={{color: index === activeMenu ? "#fff" : "#858687", backgroundColor: activeMenu === index ? "#0086CC" : "transparent"}} key={id}>{text}</MenuItem></TouchableOpacity>)

    const taskElements = items.map(({name, icon, iconWidth, iconHeight, value, valueDescription}, index) => (
        <ListItem key={index}>
            <ListItemIconWrapper>
                <Image source={{uri: icon}} style={{width: iconWidth, height: iconHeight}}/>
            </ListItemIconWrapper>
            <View>
                <ListItemTitle>{name}</ListItemTitle>
                <ListItemValue>{value} <ListItemValueDescr>{valueDescription}</ListItemValueDescr></ListItemValue>
            </View>

        </ListItem>
    ));

    return (
        <Wrapper style={{height: Dimensions.get('screen').height}}>

            <Content style={{width: width - 30}}>
                <ScreenName>Activity</ScreenName>
                <TaskName>If everyday were like today, in 5 weeks, your hourly rate would be $76.40</TaskName>
                <MenuWrapper>
                    {menuElements}
                </MenuWrapper>
                <ListWrapper>
                    {taskElements}
                </ListWrapper>


            </Content>

        </Wrapper>
    )
}

export default ActivityScreen;


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
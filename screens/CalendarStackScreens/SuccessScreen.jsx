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
import {useEffect} from "react";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

import ConfettiCannon from 'react-native-confetti-cannon';

const ContentWrapper = styled.ScrollView`
  margin: 15px auto 15px;
  position: relative;
`

const Title = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 48px;
  line-height: 48px;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 0.5px;
`

const SubTitle = styled.Text`
  font-family: "PTSans_700Bold";
  color: #fff;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.5px;
`

const SuccessScreen = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate("Calendar")
        }, 15000)
    }, [])

    return (
        <View style={{height: Dimensions.get('screen').height}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(49, 227, 124, 1)', 'rgba(0, 134, 204, 1)', 'rgba(0, 76, 151, 1)']}
                locations={[0, 0.77, 1]}
                style={styles.container}>
                <ConfettiCannon style={{height: 500}} count={50} origin={{x: -10, y: 0}} explosionSpeed={4500} fallSpeed={8000} fadeOut={true} />
                <View>
                    <SubTitle>
                        TASK COMPLETED!
                    </SubTitle>
                    <Title>
                        Making it rain.
                    </Title>
                </View>

            </LinearGradient>
        </View>
    )
}

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('screen').height,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },

});
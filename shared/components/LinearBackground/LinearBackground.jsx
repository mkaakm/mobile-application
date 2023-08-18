import {StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

const LinearBackground = ({children, style}) => {
    const css = {...styles.gradient, ...style};
    return (
        <LinearGradient
            colors={['rgba(49, 227, 124, 1)', 'rgba(0, 134, 204, 1)', 'rgba(0, 76, 151, 1)']}
            locations={[0, 0.77, 1]}
            style={css}>{children}</LinearGradient>
    )
}

export default LinearBackground;

LinearBackground.defaultProps = {
    style: {}
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        position: "relative",
        zIndex: 999
    }
})
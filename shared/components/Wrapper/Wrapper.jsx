import {View, ScrollView, StyleSheet} from "react-native";

const Wrapper = ({type, background, children, style}) => {
    const backgroundColor = (background === "dark") ? "#f7f8fa" : "#fff";
    const fullStyle = {...styles.wrapper, ...style, backgroundColor};

    if(type === "scroll") {
        return <ScrollView style={fullStyle}>{children}</ScrollView>
    }

    return <View style={fullStyle}>{children}</View>
}

export default Wrapper;

Wrapper.defaultProps = {
    type: "scroll",
    background: "dark",
    style: {}
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: "relative",
        zIndex: 20,
    }
})
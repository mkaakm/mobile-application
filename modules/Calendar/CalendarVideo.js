import {StyleSheet} from "react-native";
import {Video} from "expo-av";
import {useEffect, useRef, useState} from "react";

import {triggerAudio} from "./functions";

const uri = "https://res.cloudinary.com/dpzx4xaru/video/upload/v1671221575/salesfuel/Daily_Encouragement_Sharla_Ellis_Day_22_es6nyc.mp4";

const CalendarVideo = ({shouldPlay}) => {
    const [status, setStatus] = useState({});

    const ref = useRef(null);

    useEffect(() => {
        if (status.isPlaying) triggerAudio(ref);
    }, [ref, status.isPlaying]);

    return (
        <Video
            style={styles.video}
            shouldPlay={shouldPlay}
            source={{
                uri,
            }}
            useNativeControls={true}
            resizeMode="contain"
            isLooping={false}
            ref={ref}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    )
}

export default CalendarVideo;

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 154,
        height: 225,
    },
});
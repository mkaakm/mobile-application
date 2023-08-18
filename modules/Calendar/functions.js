import {Audio} from "expo-av";
import {CalendarStepText} from "./UI";

export const triggerAudio = async (ref) => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    ref.current.playAsync();
};

const calendarMarginTop = {
    0.5: 6,
    1: 14,
    1.5: 12,
}

export const getCalendarItemTop = step => calendarMarginTop[step];

export const getCalendarItemBottom = step => {
    if(step === 0.5){
        return 3;
    }
    if(step === 1) {
        return 4;
    }
    if(step === 1.5) {
        return 12;
    }
}

export const getTimeWithPeriod = hour => {
    if(hour < 13) {
        return `${hour} AM`;
    }
    return `${hour - 12} PM`;
}

export const getItemTime = ({start, end, step}) => {
    const [startTimeHour, startTimeMinutes] = start.split(":");
    const [endTimeHour, endTimeMinutes] = end.split(":");

    if(step !== 1.5) {
        const time = (startTimeMinutes === "00" ) ? startTimeHour : "";
        return (startTimeMinutes === "00" ) ? <CalendarStepText >{getTimeWithPeriod(time)}</CalendarStepText> : "";
    }

    if(startTimeMinutes === "00") {
        const time = startTimeHour;
        return (
            <>
                <CalendarStepText>{getTimeWithPeriod(time)}</CalendarStepText>
                <CalendarStepText style={{top: 125}}>{getTimeWithPeriod(Number(time) + 1)}</CalendarStepText>
            </>
        )
    }
    const time = startTimeHour;
    return <CalendarStepText style={{top: 55}}>{getTimeWithPeriod(Number(time) + 1)}</CalendarStepText>
    // const calendarDateStyle = (step === 1.5 && startTimeMinutes !== "00") ? {top: 50} : {};
}

export const normalizedData = (currentDay, data) => {
    if(currentDay !== 3) {
        return data;
    }
    const emptyEvent = {
        id: "2",
        name: "",
        start: "18:00",
        end: "18:30",
        type: "empty",
        step: 0.5,
    };

    return [...data.slice(0, 18), emptyEvent, data[data.length - 1]]
}
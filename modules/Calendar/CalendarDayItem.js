import {TouchableOpacity} from "react-native";

import {CalendarDay, CalendarDayNumber, CalendarDayTitle} from "./UI";

const CalendarDayItem = ({changeCurrentDay, index, currentDay, title, value})=> {
    return (
        <TouchableOpacity onPress={() => changeCurrentDay(index)}>
            <CalendarDay style={{backgroundColor: index === (currentDay - 1) ? "#0086CC" : "#f7f8fa"}}>
                <CalendarDayTitle
                    style={{color: index === (currentDay - 1) ? "#fff" : "rgba(133, 134, 135, 1)"}}>{title}</CalendarDayTitle>
                <CalendarDayNumber
                    style={{color: index === (currentDay - 1) ? "#fff" : "rgba(0, 0, 0, 1)"}}>{value}</CalendarDayNumber>
            </CalendarDay>
        </TouchableOpacity>
    )
}

export default CalendarDayItem;
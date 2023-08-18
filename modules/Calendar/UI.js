import styled from "styled-components/native";

export const SelectWrapper = styled.SafeAreaView`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  position: relative;
  z-index: 10;
`

export const CalendarDayBox = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 22px;
`

export const CalendarDay = styled.View`
  width: 55px;
  height: 54px;
  border-radius: 4px;
  background-color: #f7f8fa;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

export const CalendarDayTitle = styled.Text`
  color: rgba(133, 134, 135, 1);
  font-family: "PTSans_400Regular";
  font-size: 12px;
  letter-spacing: 0px;
  text-align: center;
`

export const CalendarDayNumber = styled.Text`
  font-family: "PTSans_700Bold";
  color: rgba(0, 0, 0, 1);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
`

export const CalendarStepText = styled.Text`
  opacity: 1;
  color: rgba(133, 134, 135, 1);
  font-family: "PTSans_700Bold";
  font-size: 10px;
  text-transform: uppercase;
  margin-right: 13px;
  position: absolute;
  left: -43px;
  top: 0;
`

export const CalendarStepLine = styled.View`
  background-color: rgba(202, 206, 209, 0.501939);
  height: 1px;
  position: absolute;
  top: -5px;
  right: 0;
`

export const CalendarItem = styled.View`
  border-radius: 4px;
  padding: 8px 15px;
  margin-left: 45px;
  position: relative;
`

export const CalendarItemTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
`

export const CalendarItemTime = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 10px;
  margin-bottom: 5px;
`



export const VideoWrapper = styled.View`
  position: absolute;
  right: 20px;
  width: 154px;
  height: 225px;
  z-index: 30;
`



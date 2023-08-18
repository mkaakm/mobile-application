import styled from "styled-components/native";

export const LineWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

export const Line = styled.View`
  width: 49%;
  height: 6px;
  margin-right: 8px;
  border-radius: 3px;
  opacity: ${({active}) => active ? "1" : "0.407552"};
  background-color: rgba(255, 255, 255, 1);
`

export const TextWrapper = styled.View`
  justify-content: center;
`

export const TextContent = styled.Text`
  color: #fff;
  font-family: "PTSans_400Regular";
  font-size: 24px;
`

export const BoldText = styled.Text`
  color: #fff;
  font-family: "PTSans_700Bold";
  font-size: 24px;
`

export const VideoWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 10;
`

export const VideoTitle = styled.Text`
  color: #fff;
  font-family: "PTSans_700Bold";
  font-size: 14px;
  margin-bottom: 22px;
`

export const VideoBlock = styled.View`
  border-radius: 6px;
  opacity: 1;
  background-color: rgba(0, 134, 204, 1);
  height: 81px;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`

export const IconWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-right: 8px;
`

export const AuthorName = styled.Text`
  color: #fff;
  font-family: "PTSans_700Bold";
  font-size: 12px;
  margin-bottom: 5px;
`

export const AuthorDescription = styled.Text`
  color: #fff;
  font-family: "PTSans_400Regular";
  font-size: 9px;
`

export const MoreWrapper = styled.View`
  width: 85px;
  height: 29px;
  border-radius: 15px;
  background-color: rgba(255,255,255, 0.23249);
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MoreText = styled.Text`
  color: #fff;
  font-family: "PTSans_700Bold";
  font-size: 11px;
`

export const Modal = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: #fff;
  position: absolute;
  z-index: 20;
`

export const AuthorData = styled.Text`
  font-family: "PTSans_400Regular";
  font-size: 9px;
  text-align: center;
`

export const TextTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
  margin-top: 28px;
  margin-bottom: 10px;
`

export const ShowMore = styled.Text`
  color: #0086CC;
  font-family: "PTSans_700Bold";
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 43px;
`

export const TipsTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 18px;
  margin-bottom: 15px;
`

export const AuthorsBlock = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`
export const Author = styled.View`
  margin-right: 20px;
`

export const AuthorImage = styled.Image`
  width: 140px;
  height: 206px;
  margin-bottom: 10px;
`

export const AuthorSubTitle = styled.Text`
  font-family: "PTSans_700Bold";
  font-size: 14px;
`
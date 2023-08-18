import styled from "styled-components/native";

export const Item = styled.View`
  border-radius: 8px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.072307);
  padding: 10px;
  background-color: #fff;
  flex-direction: row;
  margin-bottom: 12px;
`

export const ItemImage = styled.Image`
  width: 52px;
  height: 50px;
  margin-right: 16px;
`

export const ItemTitle = styled.Text`
  font-family: 'PTSans_700Bold';
  text-transform: uppercase;
  font-size: 14px;
`

export const ItemSubTitle = styled.Text`
  font-family: 'PTSans_700Bold';
  font-size: 18px;
  margin-bottom: 5px;
`

export const ItemInfo = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`

export const ItemInfoImage = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

export const ItemInfoText = styled.Text`
  flex: 1;
  font-family: 'PTSans_400Regular';
  color: #000;
  font-size: 14px;
`
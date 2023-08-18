import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const ModalView = styled.View`
  margin: 20px;
  backgroundColor: white;
  borderRadius: 20px;
  padding: 35px;
  alignItems: center;
  shadowColor: #000;
  shadowOpacity: 0.25;
  shadowRadius: 4px;
  //elevation: 5;
`;

export const ModalTitle = styled.Text`
  font-weight: bold;
  marginBottom: 15px;
  textAlign: center;
`

export const ModalText = styled.Text`
  marginBottom: 15px;
  textAlign: center;
`

export const ModalButtonWrapper = styled.View`
display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`

export const ModalButton = styled.Pressable`
  border-radius: 20px;
  padding: 10px 15px;
  //elevation: 2;
  margin-left: 20px;
  backgroundColor: #2196F3;
`

export const ModalButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`
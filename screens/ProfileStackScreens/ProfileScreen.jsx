import {View, Text, TouchableOpacity, useWindowDimensions} from "react-native";
import styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Wrapper from "../../shared/components/Wrapper";
import Container from "../../shared/components/Container";

import {remove} from "../../shared/api/auth";
import {useSelector} from "react-redux";
import {getAuth} from "../../redux/auth/auth-selector";

const Button = styled.View`
  background-color: red;
  width: 100%;
  padding: 15px 20px;
  position: absolute;
`

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`

const ProfileScreen = () => {
    const {height} = useWindowDimensions();
    const {token} = useSelector(getAuth)

    return (<Wrapper>
                <Container>
                    <TouchableOpacity onPress={() => remove()}>
                        <Button style={{top: height / 2 - 20}}>
                            <ButtonText>Remove account</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Container>
        </Wrapper>)
}

export default ProfileScreen;
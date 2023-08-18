import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAllAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch(error) {
        console.log(error.message)
    }
}
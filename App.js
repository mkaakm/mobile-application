import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';

import StackNavigator from "./Navigation";

import {store, persistor} from './redux/store';

export default function App() {
    const [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSans_400Regular_Italic,
        PTSans_700Bold,
        PTSans_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StackNavigator />
            </PersistGate>
        </Provider>

    );
}

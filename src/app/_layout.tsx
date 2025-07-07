import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { CadastroProvider } from './CadastroProvider';

export default function Layout() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            SourceSans3: require('../../assets/fonts/SourceSans3-Italic-VariableFont_wght.ttf'),
            RobotoMono: require('../../assets/fonts/RobotoMono-VariableFont_wght.ttf'),
            TintNeon: require('../../assets/fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) return null;

    return (
        <CadastroProvider>
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name='index' />
                <Stack.Screen name='cadastro' />
                <Stack.Screen name='globalHome' />
            </Stack>
        </CadastroProvider>
    );
}
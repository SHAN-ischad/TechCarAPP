import { Stack } from 'expo-router';
import { CadastroProvider } from './CadastroProvider';

export default function Layout() {
    return (
        <CadastroProvider>

            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen
                    name='index' />

                <Stack.Screen
                    name='cadastro' />

                <Stack.Screen
                    name='globalHome' />
            </Stack>

        </CadastroProvider>

    );
}
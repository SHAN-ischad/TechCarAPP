import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../style/global.css';



export default function Layout() {
    const [fontsLoaded] = useFonts({
        'SourceSans3': require('../../../assets/fonts/SourceSans3-Italic-VariableFont_wght.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }
    return (
        <GestureHandlerRootView >
            <Drawer screenOptions={{ headerShown: false }
            }>
                <Drawer.Screen
                    name="service"
                    options={{
                        title: "Services",
                    }}
                />
                <Drawer.Screen
                    name="home"
                    options={{
                        title: "Inicio",
                    }}
                />
                <Drawer.Screen
                    name="vehicle"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="history"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="OwnerPages/employees"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="OwnerPages/payments"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
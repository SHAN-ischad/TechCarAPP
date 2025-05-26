import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../style/global.css';



export default function Layout() {
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
            </Drawer>
        </GestureHandlerRootView>
    );
}
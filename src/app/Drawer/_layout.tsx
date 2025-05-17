import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../style/global.css';



export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
            </Drawer>
        </GestureHandlerRootView>
    );
}
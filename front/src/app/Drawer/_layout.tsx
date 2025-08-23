import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../style/global.css';
import CustomDrawerContent from './CustomDrawerContent';


export default function Layout() {
    const [fontsLoaded] = useFonts({
        'SourceSans3': require('../../../assets/fonts/SourceSans3-Italic-VariableFont_wght.ttf'),
    })

    if (!fontsLoaded) {
        return null
    }
    return (
        <GestureHandlerRootView >
            <Drawer
                screenOptions={{
                    headerShown: false,

                    drawerStyle: {

                    }
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >

                <Drawer.Screen
                    name="service"
                    options={{
                        title: "Services",
                        drawerIcon: () => <Ionicons name="construct" size={24} color="black" />,
                    }}
                />

                <Drawer.Screen
                    name="home"
                    options={{
                        title: "Inicio",
                        drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
                    }}
                />

                <Drawer.Screen
                    name="homeClient"
                    options={{
                        title: "Inicio Cliente",
                        drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
                    }}
                />

                <Drawer.Screen
                    name="toSchedule"
                    options={{
                        title: "Agendar",
                        drawerIcon: () => <Ionicons name="archive" size={24} color="black" />,
                    }}
                />

                <Drawer.Screen
                    name="ChatAmbient"
                    options={{
                        title: "conversas",
                        drawerIcon: () => <Ionicons name="people" size={24} color="black" />,
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

                <Drawer.Screen
                    name="OwnerPages/financial"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="OwnerPages/completedServices"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="OwnerPages/historyPayments"
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

                <Drawer.Screen
                    name="CustomDrawerContent" // Adicione outros arquivos/páginas de OwnerPages aqui
                    options={{
                        drawerLabel: () => null, // Oculta do menu
                        drawerItemStyle: { display: 'none' }, // Alternativa
                    }}
                />

            </Drawer>
        </GestureHandlerRootView>
    );
}
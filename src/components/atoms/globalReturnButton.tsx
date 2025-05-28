import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

type AllowedRoutes =
    | 'home'
    | 'homeClient'
// Add more allowed route names as needed

interface GlobalReturnButtonProps {
    route: AllowedRoutes;
}

export default function GlobalReturnButton({ route }: GlobalReturnButtonProps) {
    let r = router
    return (

        <View >
            <Pressable
                onPress={() => r.push(`/Drawer/${route}` as const)}
                className="w-[90px] flex-row mt-[30px] gap-[10px] group/back items-center py-[10px] bg-gray-400  rounded-[10px]"
            >
                <Ionicons name="caret-back" style={{}} size={20} />
                <Text style={{ fontSize: 17, fontWeight: '500', textAlign: 'center' }}>Voltar</Text>
            </Pressable>
        </View>
    );
}
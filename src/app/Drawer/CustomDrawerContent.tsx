import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Pressable, Text, View } from 'react-native';
import { useCadastro } from '../CadastroProvider';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    const { cadastro } = useCadastro();

    return (
        <DrawerContentScrollView {...props}>
            {/* X para mobile */}
            <View className="w-full items-end px-4 pt-2 sm:hidden">
                <Pressable onPress={() => props.navigation.closeDrawer()}>
                    <Ionicons name="close" size={28} color="#333" />
                </Pressable>
            </View>
            <View className="items-center my-4">
                <Image
                    source={{ uri: cadastro?.clientImage || cadastro?.ownerImage || 'https://github.com/SHAN-ischad.png' }}
                    style={{ width: 80, height: 80, borderRadius: 40 }}
                />
                <Text className="font-bold text-lg mt-2">{cadastro?.nome || cadastro?.nomeOficina}</Text>
                <Text className="text-gray-500">{cadastro?.email}</Text>
            </View>
            {/* Buttons(userConfig and logout) */}
            <View className="px-4 justify-center py-2 flex-row gap-[10px]">
                <Text
                    onPress={() => props.navigation.navigate('userConfig')}
                    className="text-blue-500 font-semibold mb-2"
                >
                    Configurações
                </Text>
                <Text
                    onPress={() => props.navigation.navigate('logout')}
                    className="text-red-500 font-semibold"
                >
                    Sair
                </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, TextInput, View } from 'react-native';


export function ContentPage() {

    return (
        <View className="w-full h-[250px] flex-col gap-4 items-center justify-center rounded-lg mt-[90px] md:mt-0">
            {/* Pesquisa */}
            <View className="gap-5 relative">
                <TextInput
                    placeholder="Pesquisar"
                    className="mb-2 w-[300px] p-2.5 border border-solid rounded-lg focus:rounded-md duration-300 placeholder:text-[12pt]"
                />
                <Ionicons name="search" size={20} className="absolute left-[90%] top-[10px]" />
            </View>

            {/* Botões de ação */}
            <View className="flex-col md:flex-row gap-5">
                <Pressable className="shadow-md w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 hover:mt-1 duration-300 flex-row">
                    <Text className="font-bold text-[12pt]">
                        Criar
                    </Text>
                    <Ionicons name="create" size={26} />
                </Pressable>

                <Pressable className="shadow-md w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 hover:mt-1 duration-300 flex-row">
                    <Text className="font-bold text-[12pt]">
                        Deletar
                    </Text>
                    <Ionicons name="trash-outline" size={26} />
                </Pressable>

                <Pressable className="shadow-md w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 hover:mt-1 duration-300 flex-row">
                    <Text className="font-bold text-[12pt]">
                        Configurar
                    </Text>
                    <Ionicons name="construct-outline" size={26} />
                </Pressable>
            </View>
        </View>
    );
}
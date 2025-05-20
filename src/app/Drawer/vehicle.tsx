import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

export default function VehiclePage() {
    return (
        <ScrollView className="flex-1 px-4">
            {/* Header */}
            <Pressable
                onPress={() => router.push('/Drawer/homeClient')}
                className='w-[90px] flex-row gap-[10px] group/back items-center py-[10px] bg-gray-400 mt-[9px] rounded-[10px]'>
                <Ionicons name='arrow-back' className='group-hover/back:animate-move-side' size={20} />
                <Text className='text-[13pt] font-medium text-center '>Voltar</Text>
            </Pressable>

            <Text className='text-[20pt] font-bold text-center'>Veículo Principal</Text>
            {/* areaVehicle */}
            <View className="w-full max-w-[500px] mx-auto mt-4 h-[300px] flex-row bg-gray-200 border-b-[2px] rounded-md">
                {/* left Area(name car, year fabrication and mark) */}
                <View className="w-1/2 gap-[50px] justify-center h-full">
                    <Text className="text-base sm:text-lg md:text-xl">
                        Nome do Veículo: <Text className="font-bold">Fox</Text>
                    </Text>
                    <Text className="text-base sm:text-lg md:text-xl">
                        Ano de fabricação: <Text className="font-bold">20/08/2010</Text>
                    </Text>
                    <Text className="text-base sm:text-lg md:text-xl">
                        Marca: <Text className="font-bold">Volkswagen</Text>
                    </Text>
                </View>
                {/* right Content(Image, Plate and Button) */}
                <View className="h-[300px] justify-center gap-[10px] items-center w-1/2 flex-col">
                    <Image
                        style={{
                            height: 99,
                            width: 99,
                        }}
                        source={require('@/assets/images/Techcar.png')}
                    />
                    <Text className="text-base sm:text-lg md:text-xl">
                        Placa: <Text className="font-bold">2b3t9990</Text>
                    </Text>
                    <Pressable className='w-[150px] rounded-[9px] bg-blue-600 py-[1px] hover:translate-y-[-2px] duration-[600ms]'>
                        <Text className='text-[15pt] font-bold text-center'>Configurar</Text>
                    </Pressable>
                </View>
            </View>
            <Text className="text-[15pt] font-bold my-[20px] text-center">Outros Veículos</Text>
            {/* Others Vehicles */}
            <View className="w-full max-w-[500px] mx-auto flex-col gap-[30px] items-center mb-[30px] mt-[20px]">
                {/* Vehicles Cards */}
                <View className="w-full max-w-[200px] items-center gap-[20px] rounded-[9px] bg-gray-200 h-[150px]">
                    <Text>Modelo: <Text className="font-bold">Civic</Text></Text>
                    <Pressable className="w-[80%] hover:bg-green-400 duration-300 shadow-lg rounded-lg">
                        <Text className="text-center py-[10px]">Abrir</Text>
                    </Pressable>
                    <Pressable className="w-[80%] shadow-lg hover:bg-red-400 duration-300 rounded-lg">
                        <Text className="text-center py-[10px]">Excluir</Text>
                    </Pressable>
                </View>
                {/* Vehicles Cards */}
                <View className="w-full max-w-[200px] items-center gap-[20px] rounded-[9px] bg-gray-200 h-[150px]">
                    <Text>Modelo: <Text className="font-bold">Civic</Text></Text>
                    <Pressable className="w-[80%] hover:bg-green-400 duration-300 shadow-lg rounded-lg">
                        <Text className="text-center py-[10px]">Abrir</Text>
                    </Pressable>
                    <Pressable className="w-[80%] shadow-lg hover:bg-red-400 duration-300 rounded-lg">
                        <Text className="text-center py-[10px]">Excluir</Text>
                    </Pressable>
                </View>
                {/* Vehicles Cards */}
                <View className="w-full max-w-[200px] items-center gap-[20px] rounded-[9px] bg-gray-200 h-[150px]">
                    <Text>Modelo: <Text className="font-bold">Civic</Text></Text>
                    <Pressable className="w-[80%] hover:bg-green-400 duration-300 shadow-lg rounded-lg">
                        <Text className="text-center py-[10px]">Abrir</Text>
                    </Pressable>
                    <Pressable className="w-[80%] shadow-lg hover:bg-red-400 duration-300 rounded-lg">
                        <Text className="text-center py-[10px]">Excluir</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
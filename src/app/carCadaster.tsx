import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import GlobalBottom from '../components/organisms/globalBottom';

export default function CarCadaster() {
    return (
        <ScrollView className='flex-1 max-[900px]:py-[20px] '>

            {/* Top Text(ContType) */}
            <View className='w-full items-start my-[2%]' >
                <Text className='text-[15pt] font-sourceSans3'>Conta Escolhida: <Text className='bg-blue-500/70 text-white rounded-[10px] p-[5px]'>Cliente</Text></Text>
            </View>

            {/* FormCarArea */}
            <View className='w-fit h-fit mx-auto p-10 shadow-md rounded-[10px] mb-[7%]'>
                <View className='min-h-[200px]  w-full  items-center max-h-fit'>
                    {/* Content */}
                    <View className='w-full  min-h-[400px]  rounded-[10px] gap-[20px] items-center   '>
                        <Text className='text-[20pt] font-sourceSans3 mt-[10px]'>Cadastro de Veículo</Text>

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Modelo' />

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Marca' />

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Ano de Fabricação' />

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Cor' />

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Categoria' />

                        <TextInput className='min-w-[220px] w-[50%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Quilometragem' />
                    </View>
                </View>
                {/* Bottom */}
                <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                    <Pressable
                        onPress={() => router.push('/postCadaster')}
                        className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'><Text className='text-[15pt] text-white font'><Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar</Text></Pressable>

                    <Pressable
                        onPress={() => router.push('/imageClientAndCar')}
                        className='min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] bg-blue-500/60'><Text className='text-[13pt] text-white font'>Continuar..</Text></Pressable>
                </View>
            </View>

            {/* GlobalBottom(SimbolTechCar) */}
            <GlobalBottom />
        </ScrollView>
    );
}
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import GlobalBottom from '../components/organisms/globalBottom';

export default function OfficeCadaster() {
    return (
        <ScrollView className='flex-1 max-[900px]:py-[20px]'>
            {/* Top Text(ContType) */}
            <View className='w-full items-start my-[2%]' >
                <Text className='text-[15pt] font-sourceSans3'>Conta Escolhida: <Text className='bg-blue-500/70 text-white rounded-[10px] p-[5px]'>Proprietário</Text></Text>
            </View>

            <View className='w-fit h-fit mx-auto shadow-md p-[13px] rounded-[10px] '>

                {/* FormCarArea */}
                <View className='min-h-[200px] w-full  items-center max-h-fit'>
                    {/* Content */}

                    <View className='w-[300px] min-h-[400px] max-h-fit pb-[10px] rounded-[10px] gap-[20px] items-center bg-slate-100  '>
                        <Text className='text-[20pt] font-sourceSans3 mt-[10px]'>Cadastro de Propriedade</Text>

                        <TextInput className='min-w-[220px] w-[80%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Nome da oficina' />

                        <TextInput className='min-w-[220px] w-[80%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='CNPJ' />

                        <TextInput className='min-w-[220px] w-[80%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Endereço' />

                        <TextInput className='min-w-[220px] w-[80%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Cidade' />

                        <TextInput className='min-w-[220px] w-[80%] min-h-[45px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Horário de funcionamento' />

                        <TextInput
                            multiline
                            numberOfLines={6}
                            className='min-w-[80%] placeholder:justify-center pt-[5px]  pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Descrição' />
                    </View>
                </View>
                {/* Bottom */}
                <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                    <Pressable
                        onPress={() => router.push('/postCadaster')}
                        className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'><Text className='text-[15pt] text-white font'><Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar</Text></Pressable>

                    <Pressable
                        onPress={() => router.push('/ownerAndPropriertyImage')}
                        className='min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] bg-blue-500/60'><Text className='text-[13pt] text-white font'>Continuar..</Text></Pressable>
                </View>
            </View>

            {/* GlobalBottom(SimbolTechCar) */}
            <GlobalBottom />
        </ScrollView>
    );
}
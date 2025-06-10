import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import GlobalBottom from '../components/organisms/globalBottom';

export default function PostCadaster() {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handdleAcountType = () => {
        if (selectedAccount === 'cliente') {
            // Navigate to car cadaster
            setTimeout(() => {
                router.push('/carCadaster');
            }, 2000);
            toast.success('Cadastro completo. Tipo de Conta: Cliente', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        } else if (selectedAccount === 'proprietário') {
            // Navigate to office cadaster
            router.push('/officerCadaster');

            toast.success('Cadastro completo. Tipo de Conta: Proprietário', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        } else {
            toast.error('Escolha um tipo de conta', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    }

    return (
        <ScrollView className='flex-1' >
            {/* FormArea */}
            <View className='w-full flex-col items-center gap-[20px]'>
                {/* Top Text */}
                <View className='w-full items-center mt-[20px]'>
                    <Text className='text-[22pt] font-sourceSans3'>Mais informações necessárias</Text>
                </View>
                {/* Form */}
                <View className='w-full items-center justify-center gap-[20px] '>
                    {/* Type Account */}
                    <View className='w-fit items-center'>
                        <Text className='text-[13pt] font-sourceSans3'>Selecione o tipo de conta</Text>
                        <Picker
                            style={{ cursor: 'pointer' }}
                            selectedValue={selectedAccount}
                            onValueChange={(itemvalue) => setSelectedAccount(itemvalue)}
                            className='w-fit min-h-[30px] font-sourceSans3 p-[10px] rounded-[10px] bg-slate-500/10 flex-row gap-[10px]'>
                            <Picker.Item label='Selecione' value='' />
                            <Picker.Item label='Cliente' value='cliente' />
                            <Picker.Item label='Proprietário' value='proprietário' />
                        </Picker>
                        {/* Informations */}
                    </View>

                    <View className='w-fit items-center gap-[10px]'>
                        <View className='w-full items-center flex-row gap-[10px] max-[900px]:flex-col'>
                            <TextInput className='min-w-[220px] pl-[10px] min-h-[45px] max-[900px]:min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='CPF' />
                            <TextInput className='min-w-[220px] pl-[10px] min-h-[45px] max-[900px]:min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Data de nascimento' />
                        </View>
                        <TextInput className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Idade' />
                        <TextInput className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Cidade' />
                        <TextInput className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Estado' />
                        <TextInput className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Telefone' />
                    </View>

                    {/* Checkbox */}
                    <View className="flex-row items-center mt-4">
                        <Pressable
                            className={`w-5 h-5 border-2 border-gray-400 rounded mr-2 items-center justify-center ${acceptedTerms ? 'bg-blue-500' : 'bg-white'}`}
                            onPress={() => setAcceptedTerms(!acceptedTerms)}
                        >
                            {acceptedTerms && (
                                <Text className="text-white text-center font-bold">✓</Text>
                            )}
                        </Pressable>
                        <Text className="text-[12pt] font-sourceSans3">
                            Aceito os termos de uso e políticas da <Text className='text-[14pt] font-sourceSans3'>TechCar</Text>
                        </Text>
                    </View>
                </View>
            </View>

            {/* Bottom */}
            <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                <Pressable
                    onPress={() => router.push('/cadastro')}
                    className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'><Text className='text-[15pt] text-white font'><Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar</Text></Pressable>

                <Pressable
                    onPress={handdleAcountType}
                    className='min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] bg-blue-500/60'><Text className='text-[13pt] text-white font'>Continuar..</Text></Pressable>
            </View>

            {/* GlobalBottom(SimbolTechCar) */}
            <GlobalBottom />
            {/* Toast */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable />
        </ScrollView>
    );
}
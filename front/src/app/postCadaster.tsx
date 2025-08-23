import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import GlobalBottom from '../components/organisms/globalBottom';
import { checkCpfExists } from '../hooks/uniqueCheck';
import { useCadastro } from './CadastroProvider';

function toISODate(dateBr: string): string {
    // Espera "DD/MM/AAAA"
    const [day, month, year] = dateBr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

export default function PostCadaster() {
    const { cadastro, setCadastro } = useCadastro();
    const [selectedAccount, setSelectedAccount] = useState<"cliente" | "proprietário" | "">('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleContinue = async () => {
        if (!selectedAccount) {
            toast.error('Escolha um tipo de conta');
            return;
        }
        if (!/^\d{11}$/.test(cpf.replace(/\D/g, ''))) {
            toast.error('Preencha o CPF corretamente (11 dígitos, só números).');
            return;
        }

        if (await checkCpfExists(cpf.replace(/\D/g, ''))) {
            toast.error('CPF já cadastrado')
            return
        }
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento.trim())) {
            toast.error('Data de nascimento deve estar no formato DD/MM/AAAA.');
            return;
        }
        if (!idade.trim() || isNaN(Number(idade)) || Number(idade) < 0 || Number(idade) > 120) {
            toast.error('Preencha a idade corretamente (apenas números, entre 0 e 120).');
            return;
        }
        if (!cidade.trim() || cidade.length < 2) {
            toast.error('Preencha a cidade corretamente.');
            return;
        }
        if (!estado.trim() || estado.length < 2) {
            toast.error('Preencha o estado corretamente.');
            return;
        }
        if (!/^\d{10,11}$/.test(telefone.replace(/\D/g, ''))) {
            toast.error('Telefone inválido. Use DDD + número, só números.');
            return;
        }
        if (!acceptedTerms) {
            toast.error('Você deve aceitar os termos.');
            return;
        }
        setCadastro({
            ...cadastro,
            cpf: cpf.replace(/\D/g, ''),
            dataNascimento: toISODate(dataNascimento),
            idade,
            cidade,
            estado,
            telefone: telefone.replace(/\D/g, ''),
        });
        if (selectedAccount === 'cliente') {
            router.push('/carCadaster');
        } else if (selectedAccount === 'proprietário') {
            router.push('/officerCadaster');
        } else {
            toast.error('Selecione um tipo de conta');
        }
    };

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
                            <TextInput
                                value={cpf}
                                onChangeText={setCpf}
                                className='min-w-[220px] pl-[10px] min-h-[45px] max-[900px]:min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='CPF' />
                            <TextInput

                                value={dataNascimento}
                                onChangeText={setDataNascimento}
                                className='min-w-[220px] pl-[10px] min-h-[45px] max-[900px]:min-h-[35px]  rounded-[10px] placeholder:text-[11.5pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px] ' placeholder='Data De Nascimento ' />
                        </View>

                        <TextInput
                            value={idade}
                            onChangeText={setIdade}
                            className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Idade' />

                        <TextInput
                            value={cidade}
                            onChangeText={setCidade}
                            className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Cidade' />

                        <TextInput
                            value={estado}
                            onChangeText={setEstado}
                            className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Estado' />

                        <TextInput
                            value={telefone}
                            onChangeText={setTelefone}
                            className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Telefone' />

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
                    onPress={handleContinue}
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
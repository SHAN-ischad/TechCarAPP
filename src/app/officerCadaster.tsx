import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import GlobalBottom from '../components/organisms/globalBottom';
import { checkCnpjExists } from '../hooks/uniqueCheck';
import { useCadastro } from './CadastroProvider';

export default function OfficeCadaster() {
    const { cadastro, setCadastro } = useCadastro();
    const [nomeOficina, setNomeOficina] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [horarioFuncionamento, setHorarioFuncionamento] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleContinue = async () => {
        if (!nomeOficina.trim() || nomeOficina.length < 2) {
            toast.error('Preencha o nome da oficina corretamente.');
            return;
        }
        if (!/^\d{14}$/.test(cnpj.replace(/\D/g, ''))) {
            toast.error('CNPJ inválido. Digite apenas números, 14 dígitos.');
            return;
        }
        // Verificação de CNPJ único
        if (await checkCnpjExists(cnpj.replace(/\D/g, ''))) {
            toast.error('Este CNPJ já está cadastrado!');
            return;
        }
        if (!endereco.trim() || endereco.length < 5) {
            toast.error('Preencha o endereço corretamente.');
            return;
        }
        if (!cidade.trim() || cidade.length < 2) {
            toast.error('Preencha a cidade corretamente.');
            return;
        }
        if (!horarioFuncionamento.trim() || horarioFuncionamento.length < 5) {
            toast.error('Preencha o horário de funcionamento corretamente.');
            return;
        }
        if (!descricao.trim() || descricao.length < 10) {
            toast.error('Descreva melhor sua oficina (mínimo 10 caracteres).');
            return;
        }
        setCadastro({
            ...cadastro,
            nomeOficina,
            cnpj: cnpj.replace(/\D/g, ''),
            endereco,
            cidadeOficina: cidade, // <-- ajuste aqui
            horarioFuncionamento,
            descricaoOficina: descricao, // <-- ajuste aqui
        });
        router.push('/ownerAndPropriertyImage');
    };

    return (
        <ScrollView className='flex-1 max-[900px]:py-[20px] bg-slate-500/20'>
            {/* Top Text(ContType) */}
            <View className='w-full items-start my-[2%]' >
                <Text className='text-[15pt] font-sourceSans3'>Conta Escolhida: <Text className='bg-slate-900/70 text-white rounded-[10px] p-[2px]'>Proprietário</Text></Text>
            </View>
            {/* FormCarArea */}
            <View className='min-h-[200px] w-full  items-center max-h-fit'>
                {/* Content */}
                <View className='w-[300px] min-h-[400px] max-h-fit pb-[10px] rounded-[10px] gap-[20px] items-center bg-slate-100  '>
                    <Text className='text-[20pt] font-sourceSans3 mt-[10px]'>Cadastro de Propriedade</Text>

                    <TextInput
                        value={nomeOficina}
                        onChangeText={setNomeOficina}
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Nome da oficina' />

                    <TextInput
                        value={cnpj}
                        onChangeText={setCnpj}
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='CNPJ' />

                    <TextInput
                        value={endereco}
                        onChangeText={setEndereco}
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Endereço' />

                    <TextInput
                        value={cidade}
                        onChangeText={setCidade}
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Cidade' />

                    <TextInput
                        value={horarioFuncionamento}
                        onChangeText={setHorarioFuncionamento}
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Horário de funcionamento' />

                    <TextInput
                        multiline
                        numberOfLines={4}
                        value={descricao}
                        onChangeText={setDescricao}
                        className='min-w-[220px] placeholder:justify-center  pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  ' placeholder='Descrição' />
                </View>
            </View>
            {/* Bottom */}
            <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                <Pressable
                    onPress={() => router.push('/postCadaster')}
                    className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'><Text className='text-[15pt] text-white font'><Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar</Text></Pressable>

                <Pressable
                    onPress={handleContinue}
                    className='min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] bg-blue-500/60'><Text className='text-[13pt] text-white font'>Continuar..</Text></Pressable>
            </View>

            {/* GlobalBottom(SimbolTechCar) */}
            <GlobalBottom />
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
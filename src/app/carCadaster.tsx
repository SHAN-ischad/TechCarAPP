import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import GlobalBottom from '../components/organisms/globalBottom';
import { checkPlacaExists } from '../hooks/uniqueCheck';
import { useCadastro } from './CadastroProvider';

export default function CarCadaster() {
    const { cadastro, setCadastro } = useCadastro();
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [anoFabricacao, setAnoFabricacao] = useState('');
    const [cor, setCor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quilometragem, setQuilometragem] = useState('');
    const [placa, setPlaca] = useState('');

    const handleContinue = async () => {
        if (!modelo.trim() || modelo.length < 2) {
            toast.error('Preencha o modelo corretamente.');
            return;
        }
        if (!marca.trim() || marca.length < 2) {
            toast.error('Preencha a marca corretamente.');
            return;
        }
        if (!/^\d{4}$/.test(anoFabricacao)) {
            toast.error('Ano de fabricação deve ter 4 dígitos.');
            return;
        }
        if (!cor.trim() || cor.length < 3) {
            toast.error('Preencha a cor corretamente.');
            return;
        }
        if (!categoria.trim() || categoria.length < 3) {
            toast.error('Preencha a categoria corretamente.');
            return;
        }
        if (!quilometragem.trim() || isNaN(Number(quilometragem)) || Number(quilometragem) < 0) {
            toast.error('Preencha a quilometragem corretamente (apenas números).');
            return;
        }
        if (!/^[A-Z]{3}[0-9][A-Z][0-9]{2}$/.test(placa.toUpperCase())) {
            toast.error('Placa inválida. Use o formato ABC1D23.');
            return;
        }
        // Verificação de placa única
        if (await checkPlacaExists(placa.toUpperCase())) {
            toast.error('Esta placa já está cadastrada!');
            return;
        }
        setCadastro({
            ...cadastro,
            modelo,
            marca,
            anoFabricacao,
            cor,
            categoria,
            quilometragem,
            placa: placa.toUpperCase(),
        });
        router.push('/imageClientAndCar');
    };

    return (
        <ScrollView className='flex-1 max-[900px]:py-[20px] '>
            {/* Top Text(ContType) */}
            <View className='w-full items-start my-[2%]' >
                <Text className='text-[15pt] font-sourceSans3'>Conta Escolhida: <Text className='bg-blue-500/80  text-white rounded-[10px] p-[5px]'>Cliente</Text></Text>
            </View>
            {/* FormCarArea */}
            <View className='min-h-[200px] w-full  items-center max-h-fit'>
                {/* Content */}
                <View className='min-w-[400px]  max-w-fit pb-[30px] min-h-[400px] rounded-[10px] gap-[20px] items-center   '>
                    <Text className='text-[20pt] font-sourceSans3 mt-[10px]'>Cadastro de Veículo</Text>

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Modelo'
                        value={modelo}
                        onChangeText={setModelo}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Marca'
                        value={marca}
                        onChangeText={setMarca}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Ano de Fabricação'
                        value={anoFabricacao}
                        onChangeText={setAnoFabricacao}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Cor'
                        value={cor}
                        onChangeText={setCor}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Categoria'
                        value={categoria}
                        onChangeText={setCategoria}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        className='min-w-[220px] pl-[10px] min-h-[35px]  rounded-[10px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Quilometragem'
                        value={quilometragem}
                        onChangeText={setQuilometragem}
                    />

                    <TextInput
                        className='min-w-[100%] pl-[10px] min-h-[45px]  rounded-[20px] placeholder:text-[12pt] font-sourceSans3 border-[1px] duration-[300ms] focus:rounded-[5px]  '
                        placeholder='Placa'
                        value={placa}
                        onChangeText={setPlaca}
                    />
                </View>
            </View>
            {/* Bottom */}
            <View className='w-full mb-[20px] justify-center items-center mt-[2.5%] max-[900px]:flex-col gap-[20px] flex-row'>
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
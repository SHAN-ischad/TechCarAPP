import { Ionicons } from '@expo/vector-icons';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useCadasterUser } from '../hooks/cadasterUser';
import { useCadastro } from './CadastroProvider';

export default function ImageClientAndCar() {
    const { cadastro, setCadastro } = useCadastro();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cadastrarUsuario, success } = useCadasterUser();
    const [clientImage, setClientImage] = useState<string | null>(null);
    const [carImage, setCarImage] = useState<string | null>(null);

    const handleContinue = async () => {
        if (!clientImage || !carImage) return;
        const response = await cadastrarUsuario({
            ...cadastro,
            clientImage,
            carImage,
            tipoConta: 'cliente'
        });
        if (response?.data?.usuario) {
            setCadastro(response.data.usuario);
        }
        // Redireciona para a tela de loading, passando o tipo de conta
        router.replace({ pathname: '/loadingScreen', params: { tipoConta: 'cliente' } });
    };

    // Função para selecionar imagem
    const pickImage = async (setImage: (uri: string | null) => void) => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            // Redimensiona e comprime a imagem
            const manipResult = await ImageManipulator.manipulateAsync(
                result.assets[0].uri,
                [{ resize: { width: 600 } }],
                { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG, base64: true }
            );
            // Salve como base64!
            setImage(`data:image/jpeg;base64,${manipResult.base64}`);
        }
    };

    const canContinue = !!clientImage && !!carImage;

    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='w-full my-[30px]'>
                <Text className='text-center font-sourceSans3 text-[20pt]'>Agora selecione a imagem para:</Text>
            </View>
            <View className='w-full min-h-[500px] items-center justify-center py-10 gap-10'>
                {/* Imagem do Cliente */}
                <View className='w-full items-center gap-4'>
                    <Text className='text-[16pt] font-bold'>Foto de Perfil</Text>
                    <Pressable
                        className='rounded-full border-2 border-blue-500 w-[130px] h-[130px] items-center justify-center bg-gray-100'
                        onPress={() => pickImage(setClientImage)}
                    >
                        {clientImage ? (
                            <Image
                                source={{ uri: clientImage }}
                                className='w-[120px] h-[120px] rounded-full'
                            />
                        ) : (
                            <Text className='text-gray-400 text-center'>Selecionar Imagem</Text>
                        )}
                    </Pressable>
                </View>

                {/* Imagem do Carro */}
                <View className='w-full items-center gap-4'>
                    <Text className='text-[16pt] font-bold'>Foto do Carro</Text>
                    <Pressable
                        className='rounded-full border-2 border-blue-500 w-[130px] h-[130px] items-center justify-center bg-gray-100'
                        onPress={() => pickImage(setCarImage)}
                    >
                        {carImage ? (
                            <Image
                                source={{ uri: carImage }}
                                className='w-[130px] h-[130px] rounded-full'
                            />
                        ) : (
                            <Text className='text-gray-400 text-center'>Selecionar Imagem</Text>
                        )}
                    </Pressable>
                </View>

                <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                    <Pressable
                        onPress={() => router.push('/carCadaster')}
                        className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'>
                        <Text className='text-[15pt] text-white font'>
                            <Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={handleContinue}
                        disabled={!canContinue}
                        className={`min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] ${canContinue ? 'bg-blue-500/60' : 'bg-gray-400'}`}>
                        <Text className='text-[13pt] text-white font'>Continuar..</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
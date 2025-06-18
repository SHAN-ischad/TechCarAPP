import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

export default function ownerAndPropriertyImage() {
    const [clientImage, setClientImage] = useState<string | null>(null);
    const [carImage, setCarImage] = useState<string | null>(null);

    // Função para selecionar imagem
    const pickImage = async (setImage: (uri: string | null) => void) => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
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
                    <Text className='text-[16pt] font-bold'>Foto da Propriedade</Text>
                    <Pressable
                        className='rounded-full border-2 border-blue-500 w-[130px] h-[130px] items-center justify-center bg-gray-100'
                        onPress={() => pickImage(setCarImage)}
                    >
                        {carImage ? (
                            <Image
                                source={{ uri: carImage }}
                                className='w-[170px] h-[110px] rounded-full'
                            />
                        ) : (
                            <Text className='text-gray-400 text-center'>Selecionar Imagem</Text>
                        )}
                    </Pressable>
                </View>

                <View className='w-full mb-[20px] justify-center items-center mt-[5%] max-[900px]:flex-col gap-[20px] flex-row'>
                    <Pressable
                        onPress={() => router.push('/officerCadaster')}
                        className='min-w-[200px] items-center justify-center min-h-[50px] rounded-[10px] bg-blue-500/60'>
                        <Text className='text-[15pt] text-white font'>
                            <Ionicons name='caret-back' size={20} className='top-[3.7px]' />Voltar
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            if (canContinue) router.push('/Drawer/homeClient');
                        }}
                        disabled={!canContinue}
                        className={`min-w-[200px] min-h-[50px] items-center justify-center rounded-[10px] ${canContinue ? 'bg-blue-500/60' : 'bg-gray-400'}`}>
                        <Text className='text-[13pt] text-white font'>Continuar..</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
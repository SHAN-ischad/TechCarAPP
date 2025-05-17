import CardServices from '@/src/components/organisms/GlobalHomeComponents/CardServices';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

export default function BodyGlobalHome() {
    const images = [
        require('@/assets/images/Techcar.png'),
        require('@/assets/images/TechcarVetorizada.png'),
        require('@/assets/images/car.gif'),
        require('@/assets/images/Computer.gif'),
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextImage = () => {
        if (activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const goToPreviousImage = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <View className="w-[90%] max-[900px]:mt-[28%] mt-[10%] ml-[10%] items-center mr-[10%]">
            {/* Body top Content */}
            <View className="w-full  max-[950px]:flex-col  max-[950px]:mb-[10%] max-[900px]:mb-[25%] max-[950px]:border-[0px]  h-[300px]  py-[12px] border-b-[1px] gap-[6%] items-center flex-row">
                {/* Left Content */}
                <View className="shadow-md justify-center h-[200px] rounded-2xl w-[52%] ">
                    <Text className="text-[22pt] w-[500px]  max-[950px]:scale-[0.96] font-medium max-[900px]:text-[14.2pt]">
                        Bem vindo a TechCar.
                        {'\n'}Melhor Aplicativo para Gerenciar
                        {'\n'}Sua oficina
                    </Text>
                </View>

                {/* Carrossel */}
                <View className="items-center overflow-hidden max-[900px]:scale-[0.70] justify-center mt-5">
                    <FlatList
                        data={images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <Image
                                source={item}
                                className="h-[50px] w-[200px] max-[900px]:w-[150px] rounded-md object-contain"
                                style={{
                                    height: 60,
                                    display: index === activeIndex ? 'flex' : 'none', // Mostra apenas a imagem ativa
                                }}
                                accessibilityLabel="Imagem do carrossel"
                            />
                        )}
                    />
                    {/* Botões de Navegação */}
                    <View className="flex-row justify-between w-full mt-3">
                        <Pressable onPress={goToPreviousImage} disabled={activeIndex === 0}>
                            <Ionicons
                                name="arrow-back"
                                size={30}
                                className={`text-lg bottom-[50px] ${activeIndex === 0 ? 'text-gray-400' : 'text-black'
                                    }`}
                            />
                        </Pressable>
                        <Pressable onPress={goToNextImage} disabled={activeIndex === images.length - 1}>
                            <Ionicons
                                name="arrow-forward"
                                size={30}
                                className={`text-lg bottom-[50px] ${activeIndex === images.length - 1 ? 'text-gray-400' : 'text-black'
                                    }`}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* Services Description */}
            <Text className="mt-[20px] text-[25px] font-sans font-bold">Alguns de nossos Serviços</Text>
            <View className="w-full max-[950px]:flex-col rounded-3xl items-center justify-around flex-row h-[500px] max-[950px]:h-fit max-[950px]:gap-[30px] max-[950px]:py-[30px] mb-[20px] mt-[8%] bg-gray-200">
                <CardServices
                    image=""
                    description="Capacitando você e seus funcionários a uma forma rápida e eficiente de gerir todos os serviços de sua propriedade"
                    title="Melhor Gestão de Serviços"
                />
                <CardServices
                    image=""
                    description="Capacitando você e seus funcionários a uma forma rápida e eficiente de gerir todos os serviços de sua propriedade"
                    title="Melhor Gestão de Serviços"
                />
                <CardServices
                    image=""
                    description="Capacitando você e seus funcionários a uma forma rápida e eficiente de gerir todos os serviços de sua propriedade"
                    title="Melhor Gestão de Serviços"
                />
            </View>
        </View>
    );
}
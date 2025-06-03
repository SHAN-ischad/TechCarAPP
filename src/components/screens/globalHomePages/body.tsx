import CardServices from '@/src/components/organisms/GlobalHomeComponents/CardServices';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

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



        <View className="w-[90%]   max-w-[1200px] mx-auto max-[900px]:mt-[30%] mt-[8%] items-center">
            {/* Banner */}
            <View className='w-full min-[1001px]:h-[670px] items-center h-[540px] mb-[50px] max-[1000px]:hidden'>
                <Image source={require('@/assets/images/image.png')}
                    style={{ height: '100%', width: '100%', borderRadius: 10 }} />
            </View>
            {/* Body top Content */}
            <View className="w-full max-[950px]:flex-col max-[950px]:mb-[10%] max-[900px]:mb-[25%] max-[950px]:border-0 h-[350px] py-[12px] border-b border-gray-300 gap-[6%] items-center flex-row">
                {/* Left Content */}
                <View className="shadow-md justify-center min-w-fit h-[200px] rounded-2xl w-[52%] max-[950px]:w-full max-[950px]:mb-4">
                    <Text className="text-[22pt] max-[900px]:text-[14pt] w-full font-medium text-center">
                        Bem vindo a TechCar.
                        {'\n'}Melhor Aplicativo para Gerenciar
                        {'\n'}Sua oficina
                    </Text>
                </View>

                {/* Carrossel  */}
                <View className="items-center overflow-visible justify-center  mt-5 w-[350px] max-[900px]:w-[250px]">
                    <View className="relative flex-row items-center">
                        <Pressable
                            onPress={goToPreviousImage}
                            disabled={activeIndex === 0}
                            className="p-2 rounded-full bg-white shadow-md mr-2 active:bg-gray-200"
                            style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={36}
                                color={activeIndex === 0 ? "#ccc" : "#222"}
                            />
                        </Pressable>
                        <Image
                            source={images[activeIndex]}
                            className="rounded-xl"
                            style={{
                                width: 300,
                                height: 220,
                                resizeMode: 'cover',
                                backgroundColor: '#fff',
                            }}
                            accessibilityLabel="Imagem do carrossel"
                        />
                        <Pressable
                            onPress={goToNextImage}
                            disabled={activeIndex === images.length - 1}
                            className="p-2 rounded-full bg-white shadow-md ml-2 active:bg-gray-200"
                            style={{ opacity: activeIndex === images.length - 1 ? 0.5 : 1 }}
                        >
                            <Ionicons
                                name="chevron-forward"
                                size={36}
                                color={activeIndex === images.length - 1 ? "#ccc" : "#222"}
                            />
                        </Pressable>
                    </View>
                    {/* Indicadores de página */}
                    <View className="flex-row justify-center mt-2 gap-2">
                        {images.map((_, idx) => (
                            <View
                                key={idx}
                                className={`rounded-full ${activeIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                                style={{ width: 10, height: 10 }}
                            />
                        ))}
                    </View>
                </View>
            </View>

            {/* Services Description */}
            <Text className="mt-[20px] text-[25px] max-[900px]:text-[17px] font-sans font-bold max-[900px]:mt-[100px] text-center">Alguns de nossos Serviços</Text>
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
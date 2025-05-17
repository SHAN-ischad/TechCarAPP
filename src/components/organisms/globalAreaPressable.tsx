import { Image, Pressable, Text, View } from 'react-native';


interface GlobalAreaPressableProps {
    image: string,
    nameClient: string,
    nameCar: string,
    openingDate: string,
    serviceStage: string,
}
export function GlobalAreaPressable({ nameClient, nameCar, openingDate, serviceStage }: GlobalAreaPressableProps) {
    return (
        <>
            <Pressable className='w-full min-[800px]:w-[600px] py-[8px] rounded-[8px] bg-gray-500 flex-row items-center gap-[50px] hover:bg-gray-400 duration-[300ms] active:scale-[0.95] '>
                {/* Left Content */}
                <View className='flex-[60%] h-full flex-col '>
                    {/* Top Content (Image, nameClient and Name Car) */}
                    <View className='w-full flex-row items-center gap-[20px]'>
                        <Image style={{
                            height: 90,
                            width: 90,
                        }}
                            source={require('../../../assets/images/Techcar.png')} />
                        <Text className='text-[10pt] font-semibold'>
                            Cliente: {nameClient}
                            {'\n'}Veiculo: {nameCar}
                        </Text>
                    </View>
                    {/* Bottom (opening date) */}
                    <View className='w-full'>
                        <Text className='text-[10pt] font-semibold text-slate-300'>
                            Data de abertura: {openingDate}
                        </Text>
                    </View>
                </View>
                {/* Right Content (service stage) */}
                <View className='flex-[40%] h-full flex-col gap-[10px] ' >
                    <Text className='text-[12.7pt]'>Estágio do Serviço</Text>
                    <Text className='text-[11pt] text-slate-200'>{serviceStage}{'\n'}(7/8)</Text>
                </View>
            </Pressable>
        </>
    );
}
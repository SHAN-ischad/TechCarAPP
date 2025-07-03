import { Image, Pressable, Text, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';


interface AreaPressableClientProps {
    image: string,
    workshopName: string,
    nameCar: string,
    openingDate: string,
    serviceProvided: string,
    value: Float;
}
export function AreaPressableClient({ value, workshopName, nameCar, openingDate, serviceProvided }: AreaPressableClientProps) {
    return (
        <>
            <Pressable className='w-full min-[800px]:w-[600px] p-[8px] rounded-[8px]  flex-row items-center gap-[50px] bg-slate-300/20 border-[1px] hover:bg-gray-400 duration-[300ms] active:scale-[0.95] '>
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
                            Oficina: {workshopName}
                            {'\n'}Veiculo: {nameCar}
                        </Text>
                    </View>
                    {/* Bottom (opening date) */}
                    <View className='w-full'>
                        <Text className='text-[10pt] font-semibold text-black'>
                            Data de abertura: {openingDate}
                        </Text>
                    </View>
                </View>
                {/* Right Content (service stage) */}
                <View className='flex-[40%] h-full flex-col gap-[10px] ' >
                    <Text className='text-[12.7pt]'>Serviço Prestado</Text>
                    <Text className='text-[11pt] text-black'>{serviceProvided}</Text>
                    <Text className='text-[11pt] text-green-400'><Text className='text-black'>Valor: </Text>{value} R$</Text>
                </View>
            </Pressable>
        </>
    );
}
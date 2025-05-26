import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

export function EmployeeCard() {
    return (

        <View className='w-[200px]  flex-col gap-[30px]  shadow-lg items-center  h-[320px] rounded-[10px]'>
            {/* Image */}
            <Image className='h-[80px] rounded-full w-[80px]'
                source={{ uri: 'https://github.com/SHAN-ischad.png' }} />

            {/* Name */}
            <Text className='text-[15pt] font-semibold'>Vladimir</Text>

            {/* Functions */}
            <Text className='text-[15pt] font-semibold'>Função: <Text className='text-[13pt]'>Borracheiro</Text></Text>

            {/* Wage */}
            <Text className='text-[15pt] font-semibold'>Salario: <Text className='text-[13pt] text-green-500'>1600.00R$</Text></Text>
            {/* Bottom content */}
            <View className=' w-full items-start flex-row mt-[2px]  gap-[10px]'>
                <Pressable className='h-fit w-fit  hover:shadow-md rounded-md p-[5px] duration-[300ms] '>
                    <Ionicons name='pencil' size={20} />
                </Pressable>

                <Pressable className='h-fit w-fit hover:shadow-md rounded-md p-[5px] duration-[300ms] hover:bg-red-500 '>
                    <Ionicons name='trash' size={20} />
                </Pressable>
            </View>
        </View>
    );
}
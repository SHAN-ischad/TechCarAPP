import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export function ToScheduleCard() {
    return (

        <View className='min-w-[300px] min-h-[150px] bg-slate-200/20  border-[1px] rounded-[10px] flex-row max-h-fit'>
            {/* rightContent(image, name and avaliations workshop) */}
            <View className='flex-[50%] '>
                <View className='flex-row gap-[20px] items-center'>
                    <Image height={60} width={60} source={require('@/assets/images/react-logo.png')} />
                    <View className='flex-col gap-[10px] '>
                        <Text className='text-[13.5pt] font-tintNeon'>Oficina: Tuned Hub</Text>
                        <Text className='text-[13.5pt] font-tintNeon'>No Mês: 60 Serviços</Text>
                        <Text className='text-[13.5pt] font-tintNeon'>
                            Avaliação: <Text className='text-green-400'>3.5</Text>
                            <Ionicons name='star' color={'yellow'} size={15} />
                        </Text>
                    </View>
                </View>
            </View>
            {/* leftContent(buttons) */}
            <View className='flex-[50%] items-center justify-center max-[900px]:ml-[50px] '>
                <View className='flex-row max-[900px]:flex-col gap-[10px]'>
                    <Pressable className='bg-blue-600/80 max-[900px]:hover:right-0 rounded-[10px] right-0 hover:right-[10px] duration-[300ms] flex-row gap-[10px] p-[10px] items-center justify-center min-w-fit h-[40px] '>
                        <Ionicons name='folder' size={20} color={'white'} />
                        <Text className='text-[12pt] font-tintNeon  text-white'>Agendar</Text>
                    </Pressable>
                    <Pressable className='bg-red-600/80 max-[900px]:hover:left-0 rounded-[10px] left-0 hover:left-[10px] duration-[300ms] flex-row gap-[10px] p-[10px] items-center justify-center min-w-fit h-[40px] '>
                        <Ionicons name='trash' size={20} color={'white'} />
                        <Text className='text-[12pt] font-tintNeon text-white'>Remover</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}



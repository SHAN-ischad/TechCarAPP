import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function ServiceCard() {
    let color = '#446AF5';
    const [isTrashHovered, setIsTrashHovered] = useState(false);
    return (
        <>
            <View className='w-[420px] rounded-[10px] p-[10px] bg-slate-300/20 border-[1px]  h-[270px] '>
                {/* Content */}
                <View className='w-full flex-row  gap-[20px]'>

                    {/* Top content */}
                    <View className='w-full items-start pt-[10px] flex-[50%]'>
                        <Text className='text-[13.8pt] font-semibold'>Cliente: Henrique</Text>
                        <Text className='text-[13.8pt] font-semibold'>Carro: Fox</Text>
                        <Text className='text-[13.8pt] font-semibold'>Status: <Text className=' text-[13.8pt]  h-fit w-fit bg-green-500 text-white rounded-lg p-[1.2px] '>Ativo</Text></Text>
                        <Text className='text-[13.8pt] font-semibold'>Serviço: Revisão</Text>
                    </View>

                    <View className='w-full items-center pt-[10px] flex-[50%]'>
                        <Image source={{ uri: 'https://github.com/SHAN-ischad.png' }} style={{ height: 90, width: 90, borderRadius: '100%' }} />
                    </View>
                </View>

                {/* center Content(Description Service) */}
                <View className='w-full mt-[10px] gap-[5px]'>
                    <Text className='text-[13pt] font-bold'>Descrição do Serviço</Text>
                    <Text className='text-[11pt] font-semibold' numberOfLines={4}>
                        Revisão completa do veículo, incluindo troca de óleo, verificação de freios e suspensão, alinhamento e balanceamento, limpeza interna e externa.
                    </Text>
                </View>

                {/* Bottom Content(Action Buttons) */}
                <View className='w-full justify-end flex-row gap-[10px]'>
                    <Pressable className='w-fit h-fit hover:[#446AF5] hover:bg-slate-500/10 rounded-[9px] p-[10px]'>
                        <Ionicons name='book' size={20} color={'#446AF5'} />
                    </Pressable>

                    <Pressable
                        className='w-fit h-fit hover:[#446AF5] hover:bg-slate-500/10 rounded-[9px] p-[10px]'
                        onHoverIn={() => setIsTrashHovered(true)}
                        onHoverOut={() => setIsTrashHovered(false)}
                    >
                        <Ionicons
                            name='trash'
                            size={20}
                            color={isTrashHovered ? '#F00101' : color}
                            style={{ transitionDuration: '200ms' }}
                        />
                    </Pressable>
                </View>
            </View>
        </>
    );
}
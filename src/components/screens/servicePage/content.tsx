import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';


export function ContentPage() {
    let color = '#446AF5';
    const [isTrashHovered, setIsTrashHovered] = useState(false);

    return (
        <View className="w-full h-[250px] flex-col gap-4 items-center justify-center rounded-lg mt-[90px] md:mt-0">
            {/* Pesquisa */}
            <View className="gap-5 ">
                <TextInput
                    placeholder="Pesquisar"
                    className="mb-2 w-[300px] p-2.5 border border-solid rounded-lg focus:rounded-md duration-300 placeholder:text-[12pt]"
                />
                <Ionicons name="search" size={20} className="absolute left-[90%] top-[10px]" />
            </View>

            {/* Botões de ação */}
            <View className="flex-col md:flex-row gap-5">
                <Pressable className="bg-slate-500/10 w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 hover:mt-1 duration-300 flex-row">
                    <Text className="font-bold text-[12pt]">
                        Criar
                    </Text>
                    <Ionicons name="create" size={26} />
                </Pressable>
            </View>

            {/* Top Text */}
            <View className='w-[96%] border-b-[2px] ml-[1%]'>
                <Text className='text-[20pt]'>Serviços Ativos</Text>
            </View>
            {/* Services Area */}
            <View className='w-[97%] min-h-[200px] max-h-fit grid grid-cols-3 max-[1200px]:flex max-[1200px]:flex-col ml-[3%] max-[1200px]:items-center max-[1200px]:ml-[0%] gap-[20px] mt-[2%] '>
                {/* Service */}
                <View className='w-[450px] rounded-[10px] p-[10px] bg-slate-400/10  h-[270px] '>
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
            </View>
        </View>
    );
}
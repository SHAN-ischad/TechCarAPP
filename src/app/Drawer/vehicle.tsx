import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { useVehicle } from '../../hooks/useVehicle';

export default function VehiclePage() {
    const { id } = useLocalSearchParams();
    const { vehicle, loading } = useVehicle(id as string);

    if (loading) return <Text>Carregando...</Text>;
    if (!vehicle) return <Text>Veículo não encontrado.</Text>;

    return (
        <ScrollView className="flex-1 px-4">
            {/* Header */}
            <Pressable
                onPress={() => router.push('/Drawer/homeClient')}
                className='w-[90px] flex-row gap-[10px] group/back items-center py-[10px] bg-gray-400 mt-[9px] rounded-[10px]'>
                <Ionicons name='arrow-back' className='group-hover/back:animate-move-side' size={20} />
                <Text className='text-[13pt] font-medium text-center '>Voltar</Text>
            </Pressable>

            <View className='w-full flex-row max-[900px]:flex-col mt-[2%]'>
                {/* Vehicle Info */}
                <View className='w-1/2 bg-slate-300/20 rounded-[10px] flex-row'>
                    {/* Left Area(Name, Status, Date Fabrication and manufacturer)*/}
                    <View className='gap-[20px] flex-col w-1/2'>
                        <Text className='text-[16pt] font-tintNeon '>
                            Veículo: <Text>{vehicle.modelo}</Text> <Ionicons name='car' size={25} className='top-[6px]' />
                        </Text>

                        <Text className='text-[16pt] font-tintNeon '>
                            Ano de Fabricação: <Text>{vehicle.anoFabricacao}</Text> <Ionicons name='calendar-clear-outline' size={25} className='top-[6px]' />
                        </Text>

                        <Text className='text-[16pt] font-tintNeon '>
                            Empresa: <Text>{vehicle.fabricante}</Text> <Ionicons name='business' size={25} className='top-[6px]' />
                        </Text>

                        <Text className='text-[16pt] font-tintNeon'>
                            Status: <Text>{vehicle.status}</Text> <Ionicons name='flag-outline' size={25} className='top-[6px]' />
                        </Text>
                        {/* Buttons */}
                        <View className='w-full '>
                            <Pressable className='w-1/2 flex-row group/car  '>
                                <Ionicons name='construct' size={29} />
                                <View className='w-fit h-fit'>
                                    <Text className='absolute text-[15pt] left-[-100px] opacity-0 group-hover/car:opacity-100 group-hover/car:left-0 transition-all duration-[900ms] bg-slate-300/50 rounded-full p-[5px] pl-[10px]'>
                                        Configurações
                                    </Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>

                    {/* Right Content(Image and plate) */}
                    <View className='flex-col w-1/2 items-center justify-center bg-blue-300/20 rounded-r-[10px] gap-[10px]'>
                        <Image source={{ uri: vehicle.imagemUrl || 'https://github.com/SHAN-ischad.png' }} style={{ height: 90, width: 90 }} />
                        <Text className='text-[16pt] font-tintNeon'>
                            Placa <Text className='text-[16pt] font-bold'>{vehicle.placa}</Text>
                        </Text>
                    </View>
                </View>

                {/* Other Vehicles */}
                <View className="w-full max-w-[500px] mx-auto flex-col gap-[30px] items-center mb-[30px] mt-[20px]">
                    <Text className="text-[15pt] font-tintNeon font-bold my-[20px] text-center">Outros Veículos</Text>
                    <View className="w-full max-w-[90%] items-center gap-[20px] rounded-[9px] bg-gray-200/90 h-[auto] p-4 flex flex-col sm:flex-row">
                        <View className="flex-1 flex flex-col gap-2 items-start">
                            <Text className='font-tintNeon text-[12pt]'>Modelo: <Text className="font-bold ">Civic</Text></Text>
                            <Text className='font-tintNeon text-[12pt]'>Ano: <Text className="font-bold ">2002</Text></Text>
                            <Text className='font-tintNeon text-[12pt]'>Placa: <Text className="font-bold ">400b-221</Text></Text>
                        </View>
                        {/* Buttons */}
                        <View className='flex flex-row gap-[10px] items-center'>
                            <Pressable className="h-[40px] w-[40px] items-center group/config justify-center rounded-[10px] bg-gray-400/20">
                                <Ionicons name='pencil' size={19} />
                                <Text className='hidden absolute left-1/2 font-tintNeon -top-[30px] -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded group-hover/config:block transition-all  text-xs shadow'>
                                    Adicionar
                                </Text>
                            </Pressable>
                            <Pressable className="h-[40px] w-[40px] items-center justify-center rounded-[10px] group/trash bg-gray-400/20 relative overflow-visible">
                                <Ionicons name='trash' size={19} />
                                <Text className='hidden absolute font-tintNeon left-1/2 -top-[30px] -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded group-hover/trash:block transition-all duration-200 text-xs shadow'>
                                    Excluir
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
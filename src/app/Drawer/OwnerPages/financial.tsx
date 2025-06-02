import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import getMounth from '@/src/hooks/getMounth';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

export default function Financial() {
    const [openModal, setOpenModal] = useState<'gastos' | 'rendimento' | null>(null);

    return (
        <ScrollView className='flex-1'>
            {/* Header */}
            <GlobalReturnButton route='home' />

            {/* Top Text */}
            <View className='w-[97%] mt-[30px] ml-[2%] pb-[20px] border-b-[2px]'>
                <Text className='text-[19pt] font-bold'>Financeiro</Text>
                <Text className='text-[12pt] font-semibold'>
                    Mês correspondente {getMounth()} <Ionicons name='calendar' size={25} className='top-[5px]' />
                </Text>
            </View>
            {/* All Content */}
            <View className='w-full mt-[4%] flex-row max-[870px]:flex-col items-center justify-center gap-[50px] '>
                {/*Left Content (expenses: parts, salaries and property) */}
                <View className='w-[400px] min-h-[300px] max-[800px]:w-full flex-col gap-[20px] rounded-[10px]  bg-slate-500/20'>
                    {/* Content Top Text */}
                    <View className='w-full mb-[10px] flex-row ml-[20px] gap-[30px] items-center mt-[10px]'>
                        <Text className='text-[17pt] font-bold'>Gastos </Text>
                        <Pressable onPress={() => setOpenModal('gastos')}>
                            <Text className='text-[12pt] font-semibold'>
                                Ver Tudo <Ionicons name='caret-forward' size={19} className='top-[4px]' />
                            </Text>
                        </Pressable>
                    </View>
                    {/* Informatios */}
                    <View className='w-full h-[290px] justify-center ml-[20px] '>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Peças <Ionicons name='build' size={30} color={'#4169E1'} /></Text>
                            <Text className='text-[20pt] font-bold'>R$ 2.500</Text>
                        </View>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Salarios <Ionicons name='people' size={30} color={'#4169E1'} /> </Text>
                            <Text className='text-[20pt] font-bold'>R$ 70.000</Text>
                        </View>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Propriedade <Ionicons name='business' size={30} color={'#4169E1'} /></Text>
                            <Text className='text-[20pt] font-bold'>R$ 120.000</Text>
                        </View>
                    </View>
                </View>

                {/* Right Content(perfomance:monthly,annual and totalServices) */}
                <View className='w-[400px] min-h-[300px] max-[800px]:w-full flex-col gap-[20px] rounded-[10px]  bg-slate-500/20'>
                    {/* Content Top Text */}
                    <View className='w-full mb-[10px] ml-[20px] gap-[30px] items-center flex-row mt-[10px]'>
                        <Text className='text-[17pt] font-bold'>Rendimento</Text>
                        <Pressable onPress={() => setOpenModal('rendimento')}>
                            <Text className='text-[12pt] font-semibold'>
                                Ver Tudo <Ionicons name='caret-forward' size={19} className='top-[4px]' />
                            </Text>
                        </Pressable>
                    </View>
                    {/* Informatios */}
                    <View className='w-full h-[290px] justify-center ml-[20px] '>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Total <Ionicons name='business' size={30} color={'#4169E1'} />  </Text>
                            <Text className='text-[20pt] font-bold'>R$ 200.000</Text>
                        </View>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Lucro  <Ionicons name='cash' size={30} color={'#4169E1'} /></Text>
                            <Text className='text-[20pt] font-bold'>R$ 30.000</Text>
                        </View>
                        <View className='w-full h-[100px] justify-center'>
                            <Text className='text-[15pt] font-bold'>Total de Serviços  <Ionicons name='stats-chart' color={'#4169E1'} size={30} /></Text>
                            <Text className='text-[20pt] font-bold'>70</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Modal Gastos */}
            <Modal
                visible={openModal === 'gastos'}
                transparent
                animationType="fade"
                onRequestClose={() => setOpenModal(null)}
            >
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white rounded-lg p-8 w-[90%] max-w-[400px]">
                        <Text className="text-xl font-bold mb-4">Detalhes dos Gastos</Text>
                        <View className='w-full'>

                            <Text className="text-lg font-semibold mb-2">Peças</Text>
                            <Text>Engrenagens: R$ 500.00</Text>
                            <Text>Rodas: R$ 1000.00</Text>
                            <Text>Óleos Automotivos: R$ 300.00</Text>
                            <Text>Kit de Embreagem: R$ 500.00</Text>

                            <Text className="text-lg font-semibold my-2">Salarios</Text>
                            <Text>João Figueiredo: R$ 5000.00</Text>
                            <Text>Luiz Macedo: R$ 3000.00</Text>
                            <Text>Miguel Soares: R$ 62000.00</Text>

                            <Text className="text-lg font-semibold my-2">Propriedade</Text>
                            <Text>Aluguel: R$ 10000.00</Text>
                            <Text>Contas(Agua, Luz): R$ 20000.00</Text>
                        </View>
                        <Pressable className="mt-6 bg-blue-500 px-4 py-2 rounded" onPress={() => setOpenModal(null)}>
                            <Text className="text-white text-center">Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* Modal Rendimento */}
            <Modal
                visible={openModal === 'rendimento'}
                transparent
                animationType="fade"
                onRequestClose={() => setOpenModal(null)}
            >
                <View className="flex-1 bg-black/40 justify-center items-center">
                    <View className="bg-white rounded-lg p-8 w-[90%] max-w-[400px]">
                        <Text className="text-xl font-bold mb-4">Detalhes do Rendimento</Text>
                        <View className='w-full'>
                            <Text className="text-lg font-semibold mb-2">Total</Text>
                            <Text>Total do Mês: R$ 50.000.00</Text>
                            <Text>Total do ano: R$ 200.000.00 </Text>

                            <Text className="text-lg font-semibold my-2">Lucro</Text>
                            <Text>Lucro Mensal: R$ 30.000.00</Text>
                            <Text>Lucro Anual: R$ 360.000.00</Text>

                            <Text className="text-lg font-semibold my-2">Total de Serviços</Text>
                            <Text>Total de Serviços no mês: 70</Text>
                            <Text>Total de Serviços no ano: 200</Text>
                        </View>
                        <Pressable className="mt-6 bg-blue-500 px-4 py-2 rounded" onPress={() => setOpenModal(null)}>
                            <Text className="text-white text-center">Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
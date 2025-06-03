import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function Payments() {
    return (
        <ScrollView className='flex-1 '>
            <GlobalReturnButton route='home' />
            {/* Top Text */}
            <View className='w-[90%] ml-[5%]  mt-[30px] flex-row items-center pb-[20px] border-b-[2px] border-black'>
                <Text className='text-[19pt] font-bold'>Pagamentos</Text>
            </View>

            {/* monthly amount */}
            <View className='w-full mt-[5%] items-center '>
                {/* content */}
                <View className='w-[80%] bg-blue-500 flex-row items-center  h-[200px] rounded-[10px]'>
                    {/* left Content(Value and Amount Services) */}
                    <View className='w-[48%] ml-[2%]  flex-col'>
                        <Text className='text-white font-bold text-[16pt] max-md:text-[13pt] max-sm:text-[11pt]'>Total do Mês</Text>
                        <Text className='text-white font-bold text-[20pt] max-md:text-[16pt] max-sm:text-[13pt]'>R$ 10.000</Text>
                        {/* Amount Services in month */}
                        <Text className='text-[12pt] max-md:text-[10pt] max-sm:text-[9pt] text-white font-bold mt-[10px]'>
                            Total de Serviços Mensais
                            <Text className='text-[12pt] max-md:text-[10pt] max-sm:text-[9pt] text-white font-bold'> 50</Text>
                        </Text>
                    </View>
                    {/* right content(history) */}
                    <View className='w-[48%] h-[97%] mb-[3%] mr-[2%] justify-end items-end'>
                        <Pressable
                            onPress={() => router.replace('./historyPayments')}
                            className='w-fit'>
                            <Text className='text-[10pt] max-md:text-[9pt] max-sm:text-[8pt] text-white font-bold'>Histórico dos últimos meses</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* Actions buttons */}
            <View className='w-full items-center mt-[5%] mb-[30px]'>
                {/* Content */}
                <View className='flex-row max-[900px]:flex-col max-[900px]:w-full gap-[20px] '>

                    <Pressable
                        onPress={() => router.replace('./completedServices')}
                        className='w-[250px] max-[900px]:w-[80%] max-[900px]:ml-[10%] h-[200px] rounded-[10px] justify-center items-center flex-row bg-slate-300/60 '>
                        <Text className=' font-bold text-[15pt]'>Serviços Finalizados</Text>
                        <Ionicons name='caret-forward' size={20} className='top-[4px]' />
                    </Pressable>


                    <Pressable
                        onPress={() => router.replace('./financial')}
                        className='w-[250px] h-[200px] rounded-[10px] max-[900px]:w-[80%] max-[900px]:ml-[10%] justify-center items-center flex-row bg-slate-300/60 '>
                        <Text className=' font-bold text-[15pt]'>Ir para Financeiro</Text>
                        <Ionicons name='caret-forward' size={20} className='top-[4px]' />
                    </Pressable>
                </View>
            </View>


        </ScrollView>
    );
}
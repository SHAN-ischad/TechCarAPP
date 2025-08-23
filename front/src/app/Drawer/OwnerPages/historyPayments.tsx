import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import getMounth from '@/src/hooks/getMounth';
import { ScrollView, Text, View } from 'react-native';

export default function HistoryPayments() {
    return (
        <ScrollView className='flex-1'>
            {/* Header */}
            <GlobalReturnButton route='OwnerPages/payments' />
            {/* All content */}
            <View className='gap-[20px] mt-[30px] flex-col'>

                <View className='w-full  items-center '>
                    {/* content */}
                    <View className='w-[80%] bg-blue-500  flex-row items-center  h-[200px] rounded-[10px]'>
                        {/* left Content(Value and Amount Services) */}
                        <View className='w-[48%] ml-[2%] gap-[5px] flex-col'>
                            <Text className='text-white font-tintNeon font-bold text-[16pt] max-md:text-[16pt] max-sm:text-[11pt]'>Total do Mês</Text>
                            <Text className='text-white font-tintNeon font-bold text-[20pt] max-md:text-[16pt] max-sm:text-[13pt]'>R$ 10.000</Text>
                            {/* Amount Services in month */}
                            <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold mt-[10px]'>
                                Total de Serviços no Mês
                                <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold'> 50</Text>
                            </Text>
                            <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold'>Mês Correspondente: {getMounth()}</Text>
                        </View>
                    </View>

                </View>
                <View className='w-full  items-center '>
                    {/* content */}
                    <View className='w-[80%] bg-blue-500 flex-row items-center  h-[200px] rounded-[10px]'>
                        {/* left Content(Value and Amount Services) */}
                        <View className='w-[48%] ml-[2%] gap-[5px]  flex-col'>
                            <Text className='text-white font-tintNeon font-bold text-[16pt] max-md:text-[13pt] max-sm:text-[11pt]'>Total do Mês</Text>
                            <Text className='text-white font-tintNeon font-bold text-[20pt] max-md:text-[16pt] max-sm:text-[13pt]'>R$ 10.000</Text>
                            {/* Amount Services in month */}
                            <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold mt-[10px]'>
                                Total de Serviços no Mês
                                <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold'> 50</Text>
                            </Text>
                            <Text className='text-[12pt] font-tintNeon max-md:text-[10pt] max-sm:text-[12pt] text-white font-bold'>Mês Correspondente: {getMounth()}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
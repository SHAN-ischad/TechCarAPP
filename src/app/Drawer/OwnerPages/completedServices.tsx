import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import { ScrollView, Text, View } from 'react-native';

export default function CompletedServices() {
    const services = [
        {
            id: 1,
            nome: 'João Silva',
            carro: 'Civic',
            cpf: '123.456.789-00',
            abertura: '01/05/2025',
            fechamento: '05/05/2025',
            total: 'R$ 1.200,00'
        },
        {
            id: 2,
            nome: 'Maria Souza',
            carro: 'Fox',
            cpf: '987.654.321-00',
            abertura: '10/05/2025',
            fechamento: '12/05/2025',
            total: 'R$ 800,00'
        },
    ];

    return (
        <ScrollView className='flex-1'>
            {/* Header */}
            <GlobalReturnButton route='OwnerPages/payments' />

            {/* Top Text */}
            <View className='w-[97%] mt-[20px] ml-[2%] border-b-[2px] pb-[20px]'>
                <Text className='text-[19pt]'>Serviços Completos</Text>
            </View>

            {/* Table */}
            <View className='w-[97%] ml-[2%] mt-[2%]'>
                {/* Table Header - só aparece em telas grandes */}
                <View className='flex-row max-[1000px]:hidden gap-[50px] items-center border-b pb-2'>
                    <Text className='text-[14pt] font-bold w-[120px] min-w-[120px]'>Nome</Text>
                    <Text className='text-[14pt] font-bold w-[100px] min-w-[100px]'>Carro</Text>
                    <Text className='text-[14pt] font-bold w-[140px] min-w-[140px]'>CPF</Text>
                    <Text className='text-[14pt] font-bold w-[150px] min-w-[150px]'>Data de Abertura</Text>
                    <Text className='text-[14pt] font-bold w-[170px] min-w-[170px]'>Data de Fechamento</Text>
                    <Text className='text-[14pt] font-bold w-[120px] min-w-[120px]'>Total Pago</Text>
                </View>
                {/* Dados */}
                {services.map(service => (
                    <View
                        key={service.id}
                        className='flex-row max-[1000px]:flex-col gap-[50px] max-[1000px]:gap-2 items-center max-[1000px]:items-start border-b py-2'
                    >
                        {/* Nome */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[120px] min-w-[120px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>Nome</Text>
                            <Text>{service.nome}</Text>
                        </View>
                        {/* Carro */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[100px] min-w-[100px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>Carro</Text>
                            <Text>{service.carro}</Text>
                        </View>
                        {/* CPF */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[140px] min-w-[140px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>CPF</Text>
                            <Text>{service.cpf}</Text>
                        </View>
                        {/* Data de Abertura */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[150px] min-w-[150px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>Data de Abertura</Text>
                            <Text>{service.abertura}</Text>
                        </View>
                        {/* Data de Fechamento */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[170px] min-w-[170px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>Data de Fechamento</Text>
                            <Text>{service.fechamento}</Text>
                        </View>
                        {/* Total Pago */}
                        <View className="flex-row max-[1000px]:flex-col items-center max-[1000px]:items-start w-[120px] min-w-[120px]">
                            <Text className='text-[11pt] min-[1001px]:hidden font-bold'>Total Pago</Text>
                            <Text>{service.total}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
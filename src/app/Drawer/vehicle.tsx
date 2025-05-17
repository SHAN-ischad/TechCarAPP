import { Text, View } from 'react-native';

export default function VehiclePage() {
    return (
        <View className='flex-1 items-center justify-center' >

            {/* areaVehicle */}
            <View className='w-[80%] h-[300px] bg-gray-200 border-[1px] border-gray-300 rounded-md'>
                {/* left Area(name car, year fabrication and mark) */}
                <View className='w-[50%] gap-[50px] justify-center h-full '>
                    <Text>Nome do Veículo : <Text className='font-bold'>Fox</Text> </Text>
                    <Text>Ano de fabricação : <Text className='font-bold'>20/08/2010</Text> </Text>
                    <Text>Volkswagen : <Text className='font-bold'>Fox</Text> </Text>
                </View>

            </View>
        </View>
    );
}
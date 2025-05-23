import { AreaPressableClient } from '@/src/components/organisms/AreaPressableClient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HistoryClient() {
    const router = useRouter();
    return (
        <ScrollView className="min-w-max min-h-full">
            {/* Header */}
            <Pressable
                onPress={() => router.push('/Drawer/homeClient')}
                className="w-[90px] flex-row mt-[30px] gap-[10px] group/back items-center py-[10px] bg-gray-400  rounded-[10px]"
            >
                <Ionicons name="arrow-back" className="group-hover/back:animate-move-side" size={20} />
                <Text className="text-[13pt] font-medium text-center ">Voltar</Text>
            </Pressable>

            <View className="h-max w-full items-center flex-col gap-[20px]">
                <View className="w-full flex-row gap-[20px] max-[800px]:gap-[5px] max-[800px]:justify-start justify-center">
                    <Text className="text-[19pt]">Histórico de Serviços</Text>
                    <Ionicons name="stopwatch-outline" size={39} />
                </View>
                {/* cards responsivos com Tailwind */}
                <View
                    className="gap-[10px] flex-col items-center w-[50%] max-[900px]:w-[100%] max-[600px]:w-[100%]"
                >
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                    <AreaPressableClient image={''} workshopName={'VladimirPutin'} nameCar={'Fox'}
                        openingDate={'20/10/25'} serviceProvided={'Reparação'} value={0} />
                </View>
            </View>
        </ScrollView>
    );
}
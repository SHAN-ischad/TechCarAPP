import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import { AreaPressableClient } from '@/src/components/organisms/AreaPressableClient';
import { Image, ScrollView, Text, View } from 'react-native';

export default function HistoryClient() {
    // const router = useRouter();

    return (
        <ScrollView className="min-w-max min-h-full">
            {/* Header */}
            <GlobalReturnButton route='homeClient' />

            <View className="h-max w-full items-center flex-col gap-[20px]">
                <View className="w-full items-center flex-row gap-[20px] max-[800px]:gap-[5px] max-[800px]:justify-start justify-center">
                    <Text className="text-[19pt] font-tintNeon">Histórico de Serviços</Text>
                    <Image style={{ width: 60, height: 60, }} source={require("@/assets/images/MinimalistTechCarFinal.png")} />
                </View>
                {/* cards responsivos com Tailwind */}
                <View
                    className="gap-[10px] mb-[10px] items-center w-[50%] max-[900px]:w-[100%] "
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
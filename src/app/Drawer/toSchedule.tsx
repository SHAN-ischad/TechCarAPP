import GlobalReturnButton from '@/src/components/atoms/globalReturnButton';
import { ToScheduleCard } from '@/src/components/organisms/ToScheduleComponents/toScheduleCard';
import { Image, ScrollView, Text, View } from 'react-native';
export default function toSchedule() {
    return (
        <ScrollView className='flex-1' >
            {/* Header */}

            <GlobalReturnButton route='homeClient' />
            {/* Top Text */}
            <View className='w-[90%] mx-auto mt-[30px] flex-row items-center pb-[20px] border-b-[2px] border-black'>
                <Text className='text-[19pt] font-tintNeon font-bold'>Oficinas Salvas</Text>
                <Image style={{ height: 60, width: 60 }} source={require('@/assets/images/MinimalistTechCarFinal.png')} />
            </View>
            {/* Content(workshops to Schedule) */}
            <View className='min-h-[500px] max-h-fit gap-[10px] mb-[30px] grid grid-cols-2 max-[900px]:grid-cols-1 mx-auto w-[90%] mt-[50px]'>
                {/* workshopsCards */}
                <ToScheduleCard />
                <ToScheduleCard />
                <ToScheduleCard />
                <ToScheduleCard />
                <ToScheduleCard />
            </View>

        </ScrollView>
    );
}
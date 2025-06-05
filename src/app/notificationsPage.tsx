import { ScrollView, Text, View } from 'react-native';
import GlobalReturnButton from '../components/atoms/globalReturnButton';
import { NotificationsArea } from '../components/organisms/notificationsArea';

export default function NotificationsPages() {
    return (
        <ScrollView className='flex-1' >
            {/* Header */}
            <GlobalReturnButton route='home' />

            {/* Top Text */}
            <View className='w-[97%] mt-[30px] ml-[2%] pb-[20px] border-b-[2px]'>
                <Text className='text-[19pt] font-bold'>Notificações</Text>

            </View>

            {/* All Content */}
            <View className="
                    w-full mt-[4%] 
                    grid grid-cols-1 
                    min-[1200px]:grid-cols-2 
                    min-[1200px]:ml-[2%]
                    gap-[20px] 
                    max-[1200px]:flex
                    max-[1200px]:items-center
                    

                ">

                <NotificationsArea />
                <NotificationsArea />
                <NotificationsArea />
                <NotificationsArea />
                <NotificationsArea />
                <NotificationsArea />
                <NotificationsArea />
            </View>
        </ScrollView>
    );
}
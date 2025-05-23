import { Image, ScrollView, Text, View } from 'react-native';


export default function Employees() {
    return (
        <ScrollView className='flex-1 items-center justify-center' >
            {/* Emplooyes informations */}
            <View className='w-full'>
                {/* Full Content (Employees cards) */}
                <View className=' w-full justify-around items-center'>
                    {/* Employees Cards(Images, Name, function and more) */}
                    <View className='w-[200px] flex-col gap-[30px]  shadow-lg items-center  h-[300px] rounded-[10px]'>
                        {/* Image */}
                        <Image className='h-[80px] rounded-full w-[80px]'
                            source={{ uri: 'https://github.com/SHAN-ischad.png' }} />

                        {/* Name */}
                        <Text className='text-[15pt] font-semibold'>Vladimir</Text>

                        {/* Functions */}
                        <Text className='text-[15pt] font-semibold'>Função: <Text className='text-[13pt]'>Borracheiro</Text></Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
import { Image, Text, View } from 'react-native';
interface CardServicesProps {
    image: string,
    title: string,
    description: string,
}

export default function CardServices({ image, title, description }: CardServicesProps) {
    return (

        <View className='h-[300px] hover:rotate-3 cursor-pointer duration-200 w-[280px] rounded-2xl shadow-md bg-white'>
            <Image
                className=' mb-[10px]'
                style={{
                    height: 140,
                    width: '100%',

                }} source={require('@/assets/images/Techcar.png')} />
            {/* Tittle */}
            <Text className='text-[13pt] font-semibold'>{title}</Text>
            {/* description */}
            <Text className='text-[11.5pt] font-medium mt-[10px]'>{description}</Text>
            {/* bottom tag */}
            <View className='w-full items-end mt-[20px]'><Text className='text-[10pt] font-medium text-sky-500'>TechCar</Text></View>
        </View>



    );
}
import { ScrollView, Text, View } from 'react-native';
import { AreaPressableClient } from '../../organisms/AreaPressableClient';


export default function BottomHomeClient() {
    return (
        <View className='h-fit bottom-[280px] mt-[5%] max-[400px]:mt-[8%] w-full items-center' >
            <Text className='text-[30px] text-center'>Ultimos Serviços Solicitados</Text>

            {/*Latest Services  */}
            <ScrollView className='mt-[15px] w-full '
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center"
                }}
                keyboardShouldPersistTaps='handled'>

                <View className=' flex-col gap-[20px]  max-sm:w-[100%]   '>
                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />
                </View>
            </ScrollView>

        </View>
    );
}
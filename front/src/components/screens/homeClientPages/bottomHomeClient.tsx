import { Text, View } from 'react-native';
import { AreaPressableClient } from '../../organisms/AreaPressableClient';
import GlobalBottom from '../../organisms/globalBottom';


export default function BottomHomeClient() {
    return (
        <View className='h-fit  mt-[5%] max-[400px]:mt-[8%] w-full ' >
            <Text className='text-[30px] text-center'>Ultimos Serviços Solicitados</Text>

            {/*Latest Services  */}
            <View className='mt-[15px] w-full items-center ' >

                <View className='  grid grid-cols-2 max-[1300px]:grid-cols-1 gap-[10px]  max-sm:w-[100%]   '>
                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />

                    <AreaPressableClient value={90.50} nameCar='Lanborguini' openingDate='29/10/25' workshopName='Victor Fritz' serviceProvided='limpeza' image='aaa' />
                </View>
            </View>

            <View className='mt-[20px]'>
                <GlobalBottom />
            </View>
        </View>
    );
}
import { Text, View } from 'react-native';
import { GlobalAreaPressable } from '../../organisms/globalAreaPressable';
import GlobalBottom from '../../organisms/globalBottom';
export function BottomHome() {
    return (
        <View className='h-fit  mt-[5%] max-[400px]:mt-[8%] w-full items-center' >
            <Text className='text-[30px] text-center'>Ultimos Serviços</Text>

            {/*Latest Services  */}
            <View className='mt-[15px] w-full items-center '

            >
                <View className=' flex-col gap-[20px]  max-sm:w-[100%]   '>
                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />
                </View>
            </View>

            <View className='mt-[20px]'>
                <GlobalBottom />
            </View>
        </View>
    );
}
import { Image, View } from 'react-native';
import { ButtonDrawer } from '../../components/atoms/buttonDrawer';
import Notifications from './notifications';


export default function GlobalHeader() {
    return (
        <>
            <View className='w-full  mb-[10px] rounded-[5px] flex-row-reverse justify-between items-center'>


                {/* logo TechCar */}
                <View className=' flex-row items-center gap-[10px] right-[5px]'>
                    <Image source={require('@/assets/images/MinimalistTechCarFinal.png')} style={{ height: 70, width: 70 }} />
                    <Notifications />
                </View>
                <View className='bottom-[5px]'>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>


            </View>
        </>
    );
}
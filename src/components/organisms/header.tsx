import { View } from 'react-native';
import { ButtonDrawer } from '../../components/atoms/buttonDrawer';
import { TechCar } from '../../components/atoms/logoTechCar';
import Notifications from './notifications';


export default function GlobalHeader() {
    return (
        <>
            <View className='w-full flex-row-reverse justify-between items-center'>


                {/* logo TechCar */}
                <View className=' flex-row items-center gap-[10px] right-[5px]'>
                    <TechCar height={100} width={100} marginBottom={0} />
                    <Notifications />
                </View>
                <View className='top-[-32px]'>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>


            </View>
        </>
    );
}
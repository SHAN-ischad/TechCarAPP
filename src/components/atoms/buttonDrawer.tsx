import { View, Text, Pressable } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamList = {
    Home: undefined;
    Settings: undefined;
};

export function ButtonDrawer() {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    return (
        <View className='w-fit  duration-[400ms] flex-row p-[2px] group'>

            <Pressable className=' justify-center flex-row items-center' onPress={() => navigation.toggleDrawer()}>


                <View className=' items-center justify-center group-hover:mr-[40px] duration-300'>
                    <Text
                        className='text-[10pt] font-semibold left-[-100] opacity-0  group-hover:flex 
                    group-hover:opacity-100 transition-all absolute group-hover:left-0 duration-[500ms]'
                        selectable={false}
                    >
                        Navegar
                    </Text>

                </View>
                <DrawerToggleButton />
            </Pressable>
        </View>
    );
}
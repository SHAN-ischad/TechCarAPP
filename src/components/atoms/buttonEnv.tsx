// import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

interface ButtonEnvProps {
    action: () => void,
    textButton: string,

}
export function ButtonEnv({ action, textButton }: ButtonEnvProps) {
    return (
        <View>
            <Pressable onPress={action} className='p-[15px] w-full rounded-[10px] max-[800px]:bg-slate-200 bg-slate-400 items-center hover:shadow-md duration-[100ms] transition-all active:bg-gray-800 group/GlobalButton'>
                <Text className='text-[12pt] font-bold group-active/GlobalButton:text-white text-black'>{textButton}</Text>
            </Pressable>
        </View>
    );
}


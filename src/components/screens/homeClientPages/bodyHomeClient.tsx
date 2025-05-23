import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { GlobalButton } from '../../atoms/globalButton';
import { GlobalInputs } from '../../atoms/globalInputs';


export default function BodyHomeClient() {
    return (
        <View className='w-full max-sm:items-center mt-[2.5%] max-sm:mt-[0%] mb-[0px]  h-fit   ' >
            {/* User */}
            <View className='w-full max-sm:justify-center gap-[20px]  '>
                {/* tag User */}
                <View
                    className='h-fit  items-center flex-row gap-[12px] w-fit pr-[20px] pb-[1.1px] '>
                    <Image source={{ uri: 'https://github.com/SHAN-ischad.png' }} className='h-[70px] w-[70px] rounded-3xl max-sm:h-[60px] max-sm:w-[60px]' />
                    {/* Text User */}
                    <View className='h-full flex-col justify-center'>
                        <Text className='font-semibold text-[13pt] max-sm:text-[10pt] ]'>Bem vindo de volta{'\n'}{ }Iago Viera</Text>
                    </View>

                </View>

                {/* Actions */}
                <View className='w-full min-[600px]:ml-[5px] '>
                    {/* Input */}
                    <View className='w-[700px] flex-row items-center justify-center  max-sm:w-full  '>

                        <GlobalInputs setAtribute={() => { }} backgroundColor='bg-slate-200' borderRadius='10px' padding='10px' placeholder='Pesquisar' value='' marginBottom='0px' marginLeft='0' marginRight='0' marginTop='0px' />
                        <Ionicons name='search' size={25} color={"black"} className='right-[40px] ' />
                    </View>

                    {/* Buttons */}
                    <View className='w-full  max-sm:flex-wrap max-sm:justify-start flex-row  justify-start  gap-[20px]'>

                        <GlobalButton
                            action={() => router.push('/Drawer/history')}
                            fontBold='semibold' backgroundColor='bg-gray-300' fontSize='11pt' marginBottom='0'
                            marginTop='20px' paddindg='10' height='0' text='Histórico'
                            width='100px' />

                        <GlobalButton
                            action={() => router.push('/Drawer/vehicle')}
                            fontBold='semibold' backgroundColor='bg-gray-300' fontSize='11pt' marginBottom='0'
                            marginTop='20px' paddindg='10' height='0' text='Veículos'
                            width='100px' />

                    </View>
                </View>
            </View>
        </View>
    );
}
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, NativeSyntheticEvent, Pressable, Text, TextInputChangeEventData, View } from 'react-native';
import { GlobalInputs } from '../../atoms/globalInputs';
import { TechCar } from '../../atoms/logoTechCar';

export function HeaderGlobalHome() {
    return (
        <View className=" border-b-[0.1px] max-[400px]:justify-center max-[400px]:gap-[50%]  border-gray-300 pb-[20px] w-full ml-[10%] mr-[10%] justify-around items-center flex-row">
            {/* Logo */}
            <View >
                <TechCar height={79} width={79} />
            </View>
            {/* Inputs for Search */}
            <View className="h-fit max-[400px]:hidden flex-row items-center  max-[900px]:w-[300px] w-[500px]">
                <GlobalInputs
                    backgroundColor=""
                    borderRadius="10px"
                    marginBottom=""
                    marginLeft=""
                    marginRight=""
                    marginTop=""
                    padding="10px"
                    placeholder="Pesquise"
                    value="" setAtribute={function (e: NativeSyntheticEvent<TextInputChangeEventData>): void {
                        throw new Error('Function not implemented.');
                    }} />
                <Ionicons className='right-[30px]' name='search' size={20} />
            </View>
            {/* User Area */}
            <View className="w-fit mr-[10%]">
                <View className="flex-row  items-center gap-[20px] relative">
                    {/* Image with Hover */}
                    <Pressable className="relative  flex-row group/calendar ">
                        <Image
                            className="w-[50px]  rounded-full h-[50px]"
                            source={{ uri: 'https://github.com/SHAN-ischad.png' }}

                        />
                        {/* Hover Area */}
                        <View className="absolute p-[15px] top-[40px] left-[-90px] shadow-md w-fit bg-white text-black text-[8pt] rounded-lg  hidden group-hover/calendar:block">
                            {/* User Options */}
                            <View className="items-center w-[200px]">
                                <Pressable className="p-[10px] rounded-lg items-center bg-green-500 w-[130px]">
                                    <Text className="text-[12pt] text-white font-semibold">Entrar</Text>
                                </Pressable>
                                <Text className="mt-2 text-center border-b w-full">Opções do Usuário</Text>
                                {/* User Options */}
                                <View className="mt-[10px] gap-[7px]">
                                    {/* Settings */}
                                    <Pressable onPress={() => console.log('apertou')} className="w-full gap-[3px] flex-row group/pressables1">
                                        <Ionicons name="settings-outline" size={22} color={'orange'} />
                                        <Text className="text-[12pt] font-medium group-hover/pressables1:ml-[20px] duration-300">
                                            Configurações
                                        </Text>
                                    </Pressable>

                                    {/* Home */}
                                    <Pressable className="w-full gap-[5px] flex-row group/pressables2"
                                        onPress={() => router.push('/Drawer/home')}>
                                        <Ionicons name="home-outline" size={22} color={'orange'} />
                                        <Text className="text-[12pt] font-medium ml-0 group-hover/pressables2:ml-[20px] duration-300">
                                            Tela Principal
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
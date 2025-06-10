import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import ServiceCard from '../../organisms/ServicesComponents/serviceCard';


export function ContentPage() {


    return (
        <View className="flex-1 ">
            <View className='w-full gap-[20px] items-center mt-[1%]'>
                {/* Top Text */}
                <View className='items-center'>
                    <Text className='font-bold text-[20pt]'>Bem vindo a área de serviços.</Text>
                    <Text className='font-bold text-[20pt]'>Crie seus serviços e configure-os</Text>
                </View>

                {/* Pesquisa */}
                <View className="gap-5 ">
                    <TextInput
                        placeholder="Pesquisar"
                        className="mb-2 w-[300px] p-2.5 border border-solid rounded-lg focus:rounded-md duration-300 placeholder:text-[12pt]"
                    />
                    <Ionicons name="search" size={20} className="absolute left-[90%] top-[10px]" />
                </View>

                {/* Botões de ação */}
                <View className="flex-col md:flex-row gap-5">
                    <Pressable className="bg-slate-500/10 
                    w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 gap-[2px] duration-300 flex-row">
                        <Text className="font-bold text-[12pt]">
                            Criar
                        </Text>
                        <Ionicons name="create" size={26} />
                    </Pressable>
                    <Pressable
                        onPress={() => router.push('/Drawer/OwnerPages/completedServices')}
                        className="bg-slate-500/10 w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 gap-[2px] duration-300 flex-row">
                        <Text className="font-bold text-[12pt]">
                            Ver todos
                        </Text>
                        <Ionicons name="albums-outline" size={26} />
                    </Pressable>
                </View>
            </View>
            {/* Top Text */}
            <View className='w-[96%] border-b-[2px] ml-[1%]'>
                <Text className='text-[20pt]'>Serviços Ativos</Text>
            </View>
            {/* Services Area */}
            <View className='w-full mt-[20px] min-h-[200px] max-h-fit grid grid-cols-3 max-[1200px]:flex max-[1200px]:flex-col  max-[1200px]:items-center max-[1200px]:ml-[0%] gap-[20px]  '>
                {/* Service */}
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </View>
        </View>
    );
}
import GlobalHeader from '@/src/components/organisms/header';
import { useEffect, useState } from 'react';
import { Text, View, } from 'react-native';
import { ContentPage } from '../../components/screens/servicePage/content';

export default function Service() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <View className='h-full w-full bg-white justify-center 
        items-center'><Text>Carregando...</Text></View>
    } else {
        return (
            <View className='h-full w-full bg-white overflow-auto overflow-x-hidden ' >
                <View className=''>
                    <GlobalHeader />
                </View>

                <View className='w-full items-center mt-[5%]'>
                    {/* Top Text */}
                    <Text className='font-bold text-[20pt]'>Bem vindo a área de serviços.</Text>
                    <Text className='font-bold text-[20pt]'>Crie seus serviços e configure-os</Text>
                </View>

                <View className='w-full' >
                    <ContentPage />
                </View>
            </View>
        );
    }

}
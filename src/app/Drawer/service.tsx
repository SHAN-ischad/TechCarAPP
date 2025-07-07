import GlobalHeader from '@/src/components/organisms/header';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View, } from 'react-native';
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
            <ScrollView className='flex-1 bg-white overflow-auto  ' >

                <GlobalHeader />

                <ContentPage />

            </ScrollView>
        );
    }

}
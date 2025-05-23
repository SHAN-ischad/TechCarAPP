import { useEffect, useState } from 'react';
import { Text, View, } from 'react-native';

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

            </View>
        );
    }

}

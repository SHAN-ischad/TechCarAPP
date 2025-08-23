import React from 'react';
import { Text, View } from 'react-native';
import { TechCar } from '../atoms/logoTechCar';

const year = new Date().getFullYear()
export default function GlobalBottom() {
    return (
        // Bottom
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TechCar width={120} height={120} />
            <Text className='text-[10pt] text-gray-400 font-bold'>
                © {year} TechCar. Todos os direitos reservados.
            </Text>
        </View>
    );
}
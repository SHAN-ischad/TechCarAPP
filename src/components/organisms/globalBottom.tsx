import React from 'react';
import { Text, View } from 'react-native';
import { TechCar } from '../atoms/logoTechCar';

export default function GlobalBottom() {
    return (
        // Bottom
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TechCar width={150} height={150} />
            <Text className='text-[10pt] text-gray-400 font-bold'>
                © 2025 TechCar. Todos os direitos reservados.
            </Text>
        </View>
    );
}
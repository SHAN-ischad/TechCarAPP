import GlobalHeader from '@/src/components/organisms/header';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { BodyHome } from '../../components/screens/homePages/bodyHome';
import { BottomHome } from '../../components/screens/homePages/bottomHome';

export default function Home() {
    return (
        <ScrollView className='flex-1 bg-white ' >
            {/* Header */}
            <View>
                <GlobalHeader />
            </View>

            <BodyHome />

            <BottomHome />
        </ScrollView>
    );
}
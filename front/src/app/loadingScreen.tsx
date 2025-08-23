import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';

export default function LoadingScreen() {
    const { tipoConta } = useLocalSearchParams();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (tipoConta === 'cliente') {
                router.replace('/Drawer/homeClient');
            } else if (tipoConta === 'proprietário') {
                router.replace('/Drawer/home');
            } else {
                toast.error('algo deu errado, reinicie o app')
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [tipoConta]);

    return (
        <View className="flex-1 items-center justify-center">
            <View className="w-full items-center flex-col gap-[10px]">
                <View className="flex-row items-center">
                    <Text className="text-[15pt] font-sourceSans3">Preparando seu perfil</Text>
                    <Image
                        style={{ height: 90, width: 90 }}
                        source={require('@/assets/images/MinimalistTechCarFinal.png')}
                    />
                </View>
                <ActivityIndicator size={60} />
            </View>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable />
        </View>

    );
}

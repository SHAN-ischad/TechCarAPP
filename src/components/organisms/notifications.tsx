import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export default function Notifications() {
    const notifications = [
        { id: 1, title: 'Notification 1', content: 'This is the first notification.' },
        // Adicione mais notificações para testar
    ];

    return (
        <Pressable
            onPress={() => console.log('Notifications pressed')}
            className='flex-1  relative'>
            <Ionicons name='notifications' size={20} />
            {notifications.length > 0 && (
                <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white" />
            )}
        </Pressable>
    );
}
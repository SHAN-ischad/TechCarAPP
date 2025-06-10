import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

const contacts = [
    {
        id: 1,
        name: 'Iago Vieira',
        lastMessage: 'Seu carro está pronto!',
        time: '09:10',
        avatar: 'https://github.com/SHAN-ischad.png',
        unread: 2,
    },
    {
        id: 2,
        name: 'Maria Souza',
        lastMessage: 'Obrigada!',
        time: '08:45',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        unread: 0,
    },
    {
        id: 3,
        name: 'Oficina TechCar',
        lastMessage: 'Agendamento confirmado.',
        time: 'Ontem',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        unread: 1,
    },
];

export default function Chat() {
    return (
        <ScrollView className='flex-1'>
            {/* Header */}
            <View className='w-full flex-row items-center'>
                {/* ReturnButton */}
                <Pressable
                    onPress={() => router.push('/Drawer/home')}
                    className="w-fit px-[10px] top-[10px]">
                    <Ionicons name='caret-back' size={30} />
                </Pressable>
                <Text className='text-[20pt] font-sourceSans3 top-[10px]'>Menu de Chat</Text>
            </View>

            {/* Contacts */}
            <View className='min-h-[500px] max-h-fit items-center w-full py-6'>
                {contacts.map(contact => (
                    <Pressable
                        key={contact.id}
                        className="w-[98%] max-w-[500px] flex-row items-center bg-white rounded-[12px] mb-4 px-4 py-3 shadow border border-gray-200 hover:bg-slate-100"
                        onPress={() => router.push('/Drawer/ChatAmbient/chatMessage')}
                    >
                        <Image
                            source={{ uri: contact.avatar }}
                            className="rounded-full mr-4"
                            style={{ width: 54, height: 54 }}
                        />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between">
                                <Text className="text-[15pt] font-sourceSans3 font-bold">{contact.name}</Text>
                                <Text className="text-xs text-gray-400">{contact.time}</Text>
                            </View>
                            <View className="flex-row items-center justify-between mt-1">
                                <Text className="text-[12pt] text-gray-700 truncate max-w-[220px]">{contact.lastMessage}</Text>
                                {contact.unread > 0 && (
                                    <View className="ml-2 bg-blue-500 rounded-full w-6 h-6 items-center justify-center">
                                        <Text className="text-white text-xs font-bold">{contact.unread}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}
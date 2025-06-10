import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Pressable, ScrollView as RNScrollView, ScrollView, Text, TextInput, View } from 'react-native';

export default function ChatMessage() {
    // Exemplo de mensagens
    const [messages, setMessages] = useState([
        { id: 1, text: 'Olá! Como posso ajudar?', sender: 'other', time: '09:00' },
        { id: 2, text: 'Preciso de informações sobre meu carro.', sender: 'me', time: '09:01' },
        { id: 3, text: 'Claro! Qual é o modelo?', sender: 'other', time: '09:02' },
    ]);
    const [input, setInput] = useState('');
    const scrollViewRef = useRef<RNScrollView>(null);

    const sendMessage = () => {
        if (input.trim() === '') return;
        setMessages([
            ...messages,
            { id: Date.now(), text: input, sender: 'me', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
        ]);
        setInput('');
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    };

    return (
        <View className="flex-1 bg-slate-100">
            {/* Header */}
            <View className='w-full border-b-[2px] flex-row p-[10px] gap-[2px] bg-slate-500/20 border-b-slate-600/20 items-start'>
                {/* ReturnButton */}
                <Pressable
                    onPress={() => router.push('/Drawer/ChatAmbient/chat')}
                    className="w-fit flex-row px-[10px] top-[10px]">
                    <Ionicons name='caret-back' size={30} />
                </Pressable>
                <View className='min-w-200px flex-row items-center gap-[10px] max-w-fit'>
                    {/* Image */}
                    <Image
                        className='rounded-full'
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://github.com/SHAN-ischad.png' }} />
                    {/* Name */}
                    <Text className='text-[15pt] font-sourceSans3'>
                        Iago Vieira
                    </Text>
                </View>
            </View>

            {/* Chat */}
            <ScrollView
                className='flex-1 px-2 py-4'
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                <View className="gap-3">
                    {messages.map(msg => (
                        <View
                            key={msg.id}
                            className={`
                                max-w-[75%] px-4 py-2 rounded-xl
                                ${msg.sender === 'me'
                                    ? 'self-end bg-blue-500'
                                    : 'self-start bg-gray-300'}
                                shadow
                            `}
                            style={{
                                borderBottomRightRadius: msg.sender === 'me' ? 0 : 16,
                                borderBottomLeftRadius: msg.sender === 'me' ? 16 : 0,
                            }}
                        >
                            <Text className={`text-[13pt] ${msg.sender === 'me' ? 'text-white' : 'text-gray-900'} font-sourceSans3`}>
                                {msg.text}
                            </Text>
                            <Text className={`text-[10pt] mt-1 ${msg.sender === 'me' ? 'text-blue-200' : 'text-gray-500'} text-right`}>
                                {msg.time}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Input Area */}
            <View className="flex-row items-center px-3 py-2 bg-white border-t border-gray-300">
                <TextInput
                    className="flex-1 min-h-[40px] rounded-full px-4 bg-gray-100 border border-gray-300 font-sourceSans3"
                    placeholder="Digite sua mensagem..."
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={sendMessage}
                    returnKeyType="send"
                />
                <Pressable
                    className="ml-2 bg-blue-500 rounded-full p-2"
                    onPress={sendMessage}
                >
                    <Ionicons name="send" size={22} color="#fff" />
                </Pressable>
            </View>
        </View>
    );
}
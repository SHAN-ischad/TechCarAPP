import { Text, View } from 'react-native';





export function NotificationsArea() {
    type Message = {
        ownerName: string;
        message: string;
        date: string;
    };

    const Messages: Message[] = [
        {
            ownerName: "John Doe",
            message: "Your car is ready for pickup.",
            date: "2024-06-01"
        }
    ];
    const message = Messages[0]
    return (
        <>
            <View className='min-w-[600px] max-w-fit bg-slate-500/20 max-[1200px]:min-w-full  rounded-[10px] p-[20px]' >
                <Text className='text-[17pt] font-tintNeon font-bold text-start'>
                    {message.ownerName}
                </Text>
                <Text className='text-[12pt] font-tintNeon '>{message.message}</Text>
                <Text className='text-[11pt] font-tintNeon text-end'>{message.date}</Text>
            </View>
        </>
    );
}
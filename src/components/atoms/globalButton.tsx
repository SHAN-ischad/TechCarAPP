import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';



interface GlobalButtonProps {
    text: string,
    backgroundColor: string,
    width: string,
    height: string,
    paddindg: string,
    fontSize: string,
    fontBold: "semibold" | "bold" | "normal",
    marginTop: string,
    marginBottom: string,
    action: () => void,
}

export function GlobalButton({ height, text, backgroundColor, width, paddindg, fontSize, fontBold, marginBottom, marginTop, action, }: GlobalButtonProps) {
    return (
        <>
            <Pressable
                onPress={action}
                className={`w-[${width}] max-[400px]:p-[3.5px] min-w-fit h-[${height}px] flex-row items-center ${backgroundColor} p-[${paddindg}px] mt-[${marginTop}] mb-[${marginBottom}] rounded-xl hover:opacity-90 active:opacity-40 duration-[300ms] group gap-[5px]`}>
                <Text className={`text-[${fontSize}] font-${fontBold}`}>{text}</Text>
                <Ionicons name='caret-forward' size={15} className='top-[1.5px] group-hover:animate-move-side' />
            </Pressable>
        </>
    );
}
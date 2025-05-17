import { Image } from 'react-native';

interface Scale {
    width: number,
    height: number,
    marginBottom?: number,
}

export function TechCar({ width, height, marginBottom }: Scale) {
    return (
        <>
            <Image source={require("@/assets/images/Techcar.png")}
                className='max-sm:w-[50px] max-sm:h-[50px] max-md:h-[100px] max-md:w-[100px]'
                style={{
                    width: width,
                    height: height,
                    marginBottom: marginBottom
                }} />
        </>
    );
}
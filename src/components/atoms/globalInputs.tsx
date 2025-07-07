import { TextInput } from 'react-native';


import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

interface GlobalInputsProps {
    placeholder: string;
    value: string,
    backgroundColor: string,
    padding: string,
    borderRadius: string,
    marginTop: string,
    marginLeft: string,
    marginRight: string,
    marginBottom: string,
    setAtribute: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    onchangeText?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
    secureTextEntry: boolean
}


export function GlobalInputs({ placeholder, value, backgroundColor, padding, borderRadius, marginTop, marginLeft, marginRight, marginBottom, setAtribute, secureTextEntry }: GlobalInputsProps) {

    return (
        <>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder} onChange={setAtribute} value={value}
                className={`w-full p-[${padding}] font-tintNeon font-bold max-sm:w-full rounded-[${borderRadius}] text-[12pt] max-sm:w-[300px] border-[1px] duration-[300ms] focus:rounded-[5px] ${backgroundColor} mt-[${marginTop}] ml-[${marginLeft}] mr-[${marginRight}] mb-[${marginBottom}]`} />

        </>
    );
}
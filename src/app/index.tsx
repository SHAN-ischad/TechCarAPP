import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalInputs } from '../components/atoms/globalInputs';
import { TechCar } from '../components/atoms/logoTechCar';
import '../style/global.css';
import { styled } from '../style/style';

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        if (!email.trim()) {
            toast.error('O campo Email está vazio.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        if (!password.trim()) {
            toast.error('O campo Senha está vazio.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        toast.success('Todos os campos estão preenchidos!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            router.replace('/Drawer/home');
        }, 1500);
    };

    const casdasterPage = () => {
        router.replace('./cadastro');
    };

    return (
        <>
            <View className="h-full w-full justify-center items-center bg-white flex-row max-[800px]:flex-col max-[800px]:overflow-visible overflow-hidden">
                {/* Lado esquerdo: imagem e texto (esconde em telas pequenas) */}
                <View className="h-full items-center justify-center mr-[10%] flex-[100%] max-[800px]:hidden">
                    <View className="h-fit pb-[5%] items-center mt-0 max-[730px]:mt-[10px]">
                        <Text
                            className="font-bold"
                            style={{
                                fontFamily: styled.fonts.fontFamily,
                                fontSize: 40,
                            }}
                        >
                            Bem vindo ao nosso site. Faça seu Login
                        </Text>
                        <Image source={require('@/assets/images/car.gif')} />
                    </View>
                </View>

                {/* Formulário de login */}
                <View className="h-full w-fit p-[5%] bg-blue-300 rounded-[5px] items-center justify-center flex-[60%] max-[1000px]:w-full max-[800px]:bg-white">
                    <TechCar height={150} width={150} marginBottom={15} />
                    <Text className="text-[22pt] text-center font-bold text-blue-700">TechCar</Text>

                    {/* Inputs com ícones Ionicons e estilização personalizada */}
                    <View className="w-full gap-[20px] mt-4">
                        <View className="flex-row-reverse  items-center ">
                            <Ionicons name="mail-outline" size={22} color="black" className="right-[30px]" />
                            <GlobalInputs
                                placeholder="Email"
                                value={email}
                                backgroundColor="bg-white"
                                padding="10px"
                                borderRadius="8"
                                marginTop=""
                                marginLeft=""
                                marginRight=""
                                marginBottom=""
                                setAtribute={(e) => setEmail(e.nativeEvent.text)}
                            />
                        </View>
                        <View className="flex-row-reverse  items-center ">
                            <Ionicons name="lock-closed-outline" size={22} color="black" className="right-[30px]" />
                            <GlobalInputs
                                placeholder="Senha"
                                value={password}
                                backgroundColor="bg-white"
                                padding="10px"
                                borderRadius="8"
                                marginTop=""
                                marginLeft=""
                                marginRight=""
                                marginBottom=""
                                setAtribute={(e) => setPassword(e.nativeEvent.text)}
                            />
                        </View>
                    </View>

                    <View className='mt-[20px] w-full items-center'>
                        <Pressable
                            className="p-[15px] w-[50%] rounded-[10px] max-[800px]:bg-slate-200 bg-white items-center hover:shadow-md duration-[100ms] transition-all active:bg-gray-800 group/loginButton"
                            onPress={handleSubmit}
                        >
                            <Text className="font-semibold text-[12pt] group-active/loginButton:text-white" selectable={false}>
                                Entrar
                            </Text>
                        </Pressable>
                    </View>

                    <View className="mt-[10px] flex-row gap-2">
                        <Text className="font-bold text-[11pt]" selectable={false}>
                            Não tem conta?
                        </Text>
                        <Pressable onPress={casdasterPage}>
                            <Text className="text-[11pt] font-bold text-blue-600 hover:text-red-950 duration-400">
                                Faça Seu cadastro
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <ToastContainer />
        </>
    );
}
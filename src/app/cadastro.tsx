import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonEnv } from '../components/atoms/buttonEnv';
import { GlobalInputs } from '../components/atoms/globalInputs';
import { TechCar } from '../components/atoms/logoTechCar';
import { styled } from '../style/style';

export default function Cadastro() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const redirect = () => {
        if (userName.trim() === '' || userEmail.trim() === '' || userPassword.trim() === '') {
            toast.error('Preencha todos os campos para se cadastrar', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        } else {
            toast.success('Cadastro feito com sucesso', {
                position: 'top-right',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            setTimeout(() => {
                router.replace('/postCadaster');
            }, 2000);
        }
    };

    const goToLogin = () => {
        router.push('/');
    };

    if (isLoading) {
        return (
            <View className='h-full w-full bg-white justify-center items-center'>
                <Image
                    style={{ height: 200, width: 200 }}
                    source={require('../../assets/images/Techcar.png')}
                />
            </View>
        );
    }

    return (
        <>
            <View className="h-full justify-center items-center flex-row max-[800px]:flex-col-reverse gap-[10%] bg-white">
                {/* Lado esquerdo: imagem e texto (esconde em telas pequenas) */}
                <View className="items-center justify-center max-[800px]:hidden">
                    <Text
                        className="text-[22pt] font-bold"
                        style={{
                            fontFamily: styled.fonts.fontFamily,
                            fontSize: 35,
                        }}
                    >
                        Seja bem vindo.
                    </Text>
                    <Text
                        className="text-[22pt] font-bold"
                        style={{
                            fontFamily: styled.fonts.fontFamily,
                        }}
                    >
                        Crie sua conta para fazer uso de nosso aplicativo
                    </Text>
                    <Image
                        style={{
                            height: 450,
                            width: 400,
                            marginTop: 20,
                        }}
                        source={require('../../assets/images/Computer.gif')}
                    />
                </View>

                {/* Formulário de cadastro */}
                <View className="h-fit pb-[2%] w-[35%] max-[800px]:w-[90%] rounded-[8px] bg-white items-center justify-center">
                    <TechCar height={170} width={170} />
                    <Text className="text-[15pt] mb-[12px] font-bold">Cadastro</Text>

                    {/* Inputs responsivos */}
                    <View className="w-full items-center gap-[15px] my-[20px]">
                        <GlobalInputs
                            placeholder="Nome"
                            value={userName}
                            backgroundColor="bg-white"
                            padding="10px"
                            borderRadius="10px"
                            marginTop=""
                            marginLeft=""
                            marginRight=""
                            marginBottom=""
                            setAtribute={(e) => setUserName(e.nativeEvent.text)}
                        />
                        <GlobalInputs
                            placeholder="Email"
                            value={userEmail}
                            backgroundColor="bg-white"
                            padding="10px"
                            borderRadius="10px"
                            marginTop=""
                            marginLeft=""
                            marginRight=""
                            marginBottom=""
                            setAtribute={(e) => setUserEmail(e.nativeEvent.text)}
                        />
                        <GlobalInputs
                            placeholder="Senha"
                            value={userPassword}
                            backgroundColor="bg-white"
                            padding="10px"
                            borderRadius="10px"
                            marginTop=""
                            marginLeft=""
                            marginRight=""
                            marginBottom=""
                            setAtribute={(e) => setUserPassword(e.nativeEvent.text)}
                        />
                    </View>
                    <View className='w-[45%]'>
                        <ButtonEnv textButton="Cadastrar" action={redirect} />
                    </View>

                    <View className="mt-[10px] flex-row gap-2">
                        <Text className="font-bold text-[11pt]" selectable={false}>
                            Já tem conta?
                        </Text>
                        <Pressable>
                            <Text
                                className="text-[11pt] font-bold text-blue-600 hover:text-red-500 duration-[0.4s]"
                                onPress={goToLogin}
                            >
                                Faça Seu Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <ToastContainer />
        </>
    );
}
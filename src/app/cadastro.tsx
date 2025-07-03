import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import { ButtonEnv } from '../components/atoms/buttonEnv';
import { GlobalInputs } from '../components/atoms/globalInputs';
import { TechCar } from '../components/atoms/logoTechCar';
import { checkEmailExists } from '../hooks/uniqueCheck';
import { styled } from '../style/style';
import { useCadastro } from './CadastroProvider';

export default function Cadastro() {
    const { cadastro, setCadastro } = useCadastro()
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    const redirect = async () => {
        if (userName.length < 2) {
            toast.error('número de caracteres em nome inválido', {});
            return
        }
        if (userEmail.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
            toast.error('Email inválido', {})
            return
        }

        if (await checkEmailExists(userEmail)) {
            toast.error('Email já cadastrado')
            return
        }

        if (userPassword.length < 6) {
            toast.error('Senha deve ter no mínimo 6 caracteres', {});
            return
        }
        else {
            toast.success('Redirecionando', {});
            setCadastro({
                ...cadastro,
                nome: userName,
                email: userEmail,
                senha: userPassword,
            })
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
                            onchangeText={() => setUserName}
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
                            onchangeText={() => setUserEmail}

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
                            onchangeText={() => setUserPassword}
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
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable />
        </>
    );
}
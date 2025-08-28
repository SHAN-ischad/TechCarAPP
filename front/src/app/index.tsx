import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalInputs } from '../components/atoms/globalInputs';
import { TechCar } from '../components/atoms/logoTechCar';
import { API_URL } from '../hooks/apiUrl';
import '../style/global.css';
import { styled } from '../style/style';
import { useCadastro } from './CadastroProvider';


export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { setCadastro } = useCadastro();
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = async () => {
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
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, { email, senha: password });
            const data = res.data as { usuario: { tipoConta: string; cpf: string;[key: string]: any } };
            if (data.usuario.tipoConta === 'cliente' || data.usuario.tipoConta === 'proprietário') {
                setCadastro({
                    nome: data.usuario.nome ?? '',
                    email: data.usuario.email ?? '',
                    senha: '', // nunca retorne a senha do back-end, deixe vazia
                    tipoConta: data.usuario.tipoConta as "cliente" | "proprietário",
                    cpf: data.usuario.cpf ?? '',
                    dataNascimento: data.usuario.dataNascimento ?? '',
                    idade: data.usuario.idade ?? '',
                    estado: data.usuario.estado ?? '',
                    telefone: data.usuario.telefone ?? '',
                    modelo: data.usuario.modelo ?? '',
                    marca: data.usuario.marca ?? '',
                    anoFabricacao: data.usuario.anoFabricacao ?? '',
                    cor: data.usuario.cor ?? '',
                    categoria: data.usuario.categoria ?? '',
                    quilometragem: data.usuario.quilometragem ?? '',
                    placa: data.usuario.placa ?? '',
                    nomeOficina: data.usuario.nomeOficina ?? '',
                    cnpj: data.usuario.cnpj ?? '',
                    endereco: data.usuario.endereco ?? '',
                    cidade: data.usuario.cidade ?? '',
                    horarioFuncionamento: data.usuario.horarioFuncionamento ?? '',
                    descricao: data.usuario.descricao ?? '',
                    cidadeOficina: data.usuario.cidadeOficina ?? '',
                    descricaoOficina: data.usuario.descricaoOficina ?? '',
                    clientImage: data.usuario.clientImage ?? '',
                    carImage: data.usuario.carImage ?? '',
                    ownerImage: data.usuario.ownerImage ?? '',
                    proprietyImage: data.usuario.proprietyImage ?? '',
                    carro: data.usuario ?? ''
                });
            } else {
                throw new Error('Tipo de conta desconhecido!');
            }

            toast.success('Login realizado!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                if (data.usuario.tipoConta === 'cliente') {
                    router.replace('/Drawer/homeClient');
                } else if (data.usuario.tipoConta === 'proprietário') {
                    const idVeiculo = data.usuario.carroId || data.usuario._idCarro; // ajuste para o campo correto
                    router.replace({ pathname: '/Drawer/home', params: { id: idVeiculo } });
                } else {
                    toast.error('Tipo de conta desconhecido!');
                }
            }, 1500);
        } catch (err: any) {
            toast.error(err?.response?.data?.message || 'Email ou senha inválidos');
        }
    };

    const casdasterPage = () => {
        router.replace('/cadastro');
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
                        <View className="flex-row-reverse relative  items-center ">
                            <Pressable className='absolute right-[-20px] cursor-default'>
                                <Ionicons name="mail-outline" size={22} color="black" className="right-[30px]" />
                            </Pressable>
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
                                setAtribute={(e) => setEmail(e.nativeEvent.text)} secureTextEntry={false} />
                        </View>
                        <View className="flex-row-reverse relative items-center ">
                            <Pressable
                                onPress={() => setShowPassword((prev) => !prev)}
                                className='absolute w-fit right-[10px] items-center justify-center'
                            >
                                <Ionicons name={!showPassword ? "eye-off" : "eye"} size={22} color="black" />
                            </Pressable>
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
                                secureTextEntry={!showPassword} />

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
                            <Text className="text-[11pt] font-bold text-blue-600 hover:text-black duration-400">
                                Faça Seu cadastro
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View >
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
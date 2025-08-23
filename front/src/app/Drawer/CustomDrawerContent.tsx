import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useState } from 'react';
import { ActivityIndicator, Image, Modal, Pressable, Text, View } from 'react-native';
import { toast, ToastContainer } from 'react-toastify';
import { useCadastro } from '../CadastroProvider';

import type { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
    const { cadastro, setCadastro } = useCadastro();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    // Função de logout
    const handleLogout = async () => {
        setShowModal(false);
        setLoading(true);

        setTimeout(() => {
            setCadastro({
                nome: '',
                email: '',
                senha: '',
                tipoConta: '',
                cpf: '',
                dataNascimento: '',
                idade: '',
                estado: '',
                telefone: '',
                modelo: '',
                marca: '',
                anoFabricacao: '',
                cor: '',
                categoria: '',
                quilometragem: '',
                placa: '',
                nomeOficina: '',
                cnpj: '',
                endereco: '',
                cidade: '',
                horarioFuncionamento: '',
                descricao: '',
                cidadeOficina: '',
                descricaoOficina: '',
                clientImage: '',
                carImage: '',
                ownerImage: '',
                proprietyImage: '',
                carro: ''
            });
            localStorage.removeItem('cadastro');
            setLoading(false);
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'index' }],
            });
            toast.success('Saida efetuada com sucesso!')
        }, 1500); // tempo do loading
    };

    return (
        <>
            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white', minHeight: '100%' }}>
                    {/* X para mobile */}
                    <View className="w-full items-end px-4 pt-2 sm:hidden">
                        <Pressable onPress={() => props.navigation.closeDrawer()}>
                            <Ionicons name="close" size={28} color="#333" />
                        </Pressable>
                    </View>
                    <View className="items-center my-4">
                        <Image
                            source={{ uri: cadastro?.clientImage || cadastro?.ownerImage || 'https://github.com/SHAN-ischad.png' }}
                            style={{ width: 80, height: 80, borderRadius: 40 }}
                        />
                        <Text className="font-tintNeon font-bold text-lg mt-2">{cadastro?.nome || cadastro?.nomeOficina}</Text>
                        <Text className="text-gray-500">{cadastro?.email}</Text>
                    </View>
                    {/* Buttons(userConfig and logout) */}
                    <View className="px-4 justify-center py-2 flex-row gap-[10px]">
                        <Text
                            onPress={() => props.navigation.navigate('userConfig')}
                            className="text-blue-500 font-tintNeon font-semibold mb-2"
                        >
                            Configurações
                        </Text>
                        <Text
                            onPress={() => setShowModal(true)}
                            className="text-red-500 font-tintNeon font-semibold"
                        >
                            Sair
                        </Text>
                    </View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            {/* Modal de confirmação */}
            <Modal
                visible={showModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/40">
                    <View className="bg-white rounded-xl p-6 w-[80%] items-center">
                        <Text className="text-lg font-tintNeon font-bold mb-2">Tem certeza disso?</Text>
                        <Text className="mb-6 font-tintNeon text-gray-600">Você realmente deseja sair?</Text>
                        <View className="flex-row gap-4">
                            <Pressable
                                className="bg-gray-200 px-6 py-2 rounded-lg"
                                onPress={() => setShowModal(false)}
                            >
                                <Text className=" font-tintNeon text-gray-700 font-semibold">Cancelar</Text>
                            </Pressable>
                            <Pressable
                                className="bg-red-500 px-6 py-2 rounded-lg"
                                onPress={handleLogout}
                            >
                                <Text className="font-tintNeon text-white font-semibold">Sair</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal de loading */}
            <Modal
                visible={loading}
                transparent
                animationType="fade"
            >
                <View className="flex-1 justify-center items-center bg-black/40">
                    <View className="bg-white rounded-xl p-8 items-center">
                        <ActivityIndicator size="large" color="#446AF5" />
                        <Text className="mt-4 text-base font-semibold">Saindo...</Text>
                    </View>
                </View>
                <ToastContainer position="top-right"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable />
            </Modal>
        </>
    );
}
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Modal, Pressable, Text, TextInput, View } from 'react-native';
import ServiceCard from '../../organisms/ServicesComponents/serviceCard';

export function ContentPage() {
    const [modalVisible, setModalVisible] = useState(false);

    // Campos do formulário de criação de serviço
    const [cliente, setCliente] = useState('');
    const [carro, setCarro] = useState('');
    const [servico, setServico] = useState('');
    const [descricao, setDescricao] = useState('');

    return (
        <View className="flex-1 ">
            <View className='w-full gap-[20px] items-center mt-[1%]'>
                {/* Top Text */}
                <View className='items-center'>
                    <Text className='font-bold font-tintNeon text-[20pt]'>Bem vindo a área de serviços.</Text>
                    <Text className='font-bold font-tintNeon text-[20pt]'>Crie seus serviços e configure-os</Text>
                </View>

                {/* Pesquisa */}
                <View className="gap-5 ">
                    <TextInput
                        placeholder="Pesquisar"
                        className="mb-2 w-[300px] p-2.5 border border-solid rounded-lg focus:rounded-md duration-300 placeholder:text-[12pt] placeholder:font-tintNeon "
                    />
                    <Ionicons name="search" size={20} className="absolute left-[90%] top-[10px]" />
                </View>

                {/* Botões de ação */}
                <View className="flex-col md:flex-row gap-5">

                    <Pressable
                        onPress={() => setModalVisible(true)}
                        className="bg-slate-300/20 border-[1px] hover:rounded-[1px] w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 gap-[2px] duration-300 flex-row">
                        < Text className="font-bold font-tintNeon text-[12pt]" >
                            Criar
                        </Text >
                        <Ionicons name="create" size={26} />
                    </Pressable >

                    {/* Modal de Criação */}
                    < Modal
                        visible={modalVisible}
                        transparent
                        animationType='fade'
                        onRequestClose={() => setModalVisible(false)
                        }
                    >
                        <View className="flex-1 bg-black/10 justify-center items-center">
                            <View className="bg-white rounded-lg p-8 w-[90%] max-w-[400px] items-center">
                                {/* Top Text */}
                                <View className='w-full flex-row justify-between items-center'>
                                    <Text className="text-xl font-tintNeon font-bold ">Criar Serviço</Text>
                                    <Image
                                        style={{ height: 60, width: 60 }}
                                        source={require('@/assets/images/MinimalistTechCarFinal.png')} />
                                </View>

                                <View className="w-full gap-3">
                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Cliente"
                                        value={cliente}
                                        onChangeText={setCliente}
                                    />
                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Carro"
                                        value={carro}
                                        onChangeText={setCarro}
                                    />
                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Serviço"
                                        value={servico}
                                        onChangeText={setServico}
                                    />

                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Forma de Pagamento"
                                        value={servico}
                                        onChangeText={setServico}
                                    />

                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Previsão de Entrega"
                                        value={servico}
                                        onChangeText={setServico}
                                    />

                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Possíveis Peças requeridas"
                                        value={servico}
                                        onChangeText={setServico}
                                    />

                                    <TextInput
                                        className="border font-tintNeon rounded px-3 py-2 w-full"
                                        placeholder="Descrição do Serviço"
                                        value={descricao}
                                        onChangeText={setDescricao}
                                        multiline
                                        numberOfLines={3}
                                    />
                                </View>
                                <View className="flex-row gap-4 mt-6">
                                    <Pressable
                                        className="bg-blue-500 px-4 py-2 rounded"
                                        onPress={() => {

                                            setModalVisible(false);
                                            setCliente('');
                                            setCarro('');
                                            setServico('');
                                            setDescricao('');
                                        }}
                                    >
                                        <Text className="text-white font-tintNeon text-center">Salvar</Text>
                                    </Pressable>
                                    <Pressable
                                        className="bg-gray-400 font-tintNeon px-4 py-2 rounded"
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Text className="text-white text-center">Cancelar</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal >
                    <Pressable
                        onPress={() => router.push('/Drawer/OwnerPages/completedServices')}
                        className="bg-slate-300/20 border-[1px] hover:rounded-[1px] w-[180px] min-h-[100px] rounded-lg p-5 items-center justify-center hover:bg-blue-200 gap-[2px] duration-300 flex-row">
                        <Text className="font-bold font-tintNeon text-[12pt]">
                            Ver todos
                        </Text>
                        <Ionicons name="albums-outline" size={26} />
                    </Pressable>
                </View >
            </View >
            {/* Top Text */}
            < View className='w-[96%] border-b-[2px] ml-[1%]' >
                <Text className='text-[20pt] font-tintNeon'>Serviços Ativos</Text>
            </View >
            {/* Services Area */}
            < View className='w-[99%] mb-[20px] ml-[1%] mt-[20px] min-h-[200px] max-h-fit grid grid-cols-3 max-[1300px]:flex max-[1300px]:flex-col max-[1300px]:items-center max-[1300px]:ml-[0%] gap-[20px] max-[1300px]:w-full  ' >
                {/* Service */}
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </View >
        </View >
    );
}
import axios from 'axios';
import { useState } from 'react';

export interface UserData {
    tipoConta: 'cliente' | 'proprietário';
    nome: string;
    email: string;
    senha: string;
    cpf: string
    dataNascimento: string
    idade: string
    estado: string
    telefone: string
    // Cliente
    modelo: string;
    marca: string;
    anoFabricacao: string;
    cor: string;
    categoria: string;
    quilometragem: string;
    placa: string
    // Proprietário
    nomeOficina: string;
    cnpj: string;
    endereco: string;
    cidade: string;
    horarioFuncionamento: string;
    descricao: string;
    cidadeOficina: string;
    descricaoOficina: string;
    // Imagens
    clientImage: string;
    carImage: string;
    ownerImage: string;
    proprietyImage: string;
}

export function useCadasterUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const cadastrarUsuario = async (userData: UserData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Validação básica
        if (!userData.nome || !userData.email || !userData.senha) {
            setError('Preencha nome, email e senha');
            setLoading(false);
            return;
        }
        if (userData.tipoConta === 'cliente') {
            if (!userData.modelo || !userData.marca || !userData.anoFabricacao) {
                setError('Preencha todos os dados do veículo');
                setLoading(false);
                return;
            }
        } else {
            if (
                !userData.nomeOficina ||
                !userData.cnpj ||
                !userData.endereco ||
                !userData.cidadeOficina ||
                !userData.descricaoOficina
            ) {
                setError('Preencha todos os dados da oficina');
                setLoading(false);
                return;
            }
        }

        try {
            const endpoint = 'http://localhost:5000/api/usuarios';
            await axios.post(endpoint, userData);
            setSuccess(true);
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Erro ao cadastrar usuário');
        } finally {
            setLoading(false);
        }
    };

    return { cadastrarUsuario, loading, error, success };
}
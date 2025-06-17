import axios from 'axios';
import { useState } from 'react';

interface UserData {
    tipoConta: 'cliente' | 'proprietário';
    nome?: string;
    email?: string;
    senha?: string;
    // Cliente
    modelo?: string;
    marca?: string;
    anoFabricacao?: string;
    cor?: string;
    categoria?: string;
    quilometragem?: string;
    // Proprietário
    nomeOficina?: string;
    cnpj?: string;
    endereco?: string;
    cidade?: string;
    horarioFuncionamento?: string;
    descricao?: string;
}

export function useCadasterUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const cadastrarUsuario = async (userData: UserData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            // Altere a URL para o endpoint real da sua API
            await axios.post('https://sua-api.com/cadastro', userData);
            setSuccess(true);
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Erro ao cadastrar usuário');
        } finally {
            setLoading(false);
        }
    };

    return { cadastrarUsuario, loading, error, success };
}
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import type { UserData } from '../hooks/cadasterUser';

type CadastroContextType = {
    cadastro: UserData;
    setCadastro: Dispatch<SetStateAction<UserData>>;
};

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

const initialCadastro: UserData = {
    nome: '',
    email: '',
    senha: '',
    tipoConta: 'cliente',
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
    proprietyImage: ''
};

export function CadastroProvider({ children }: { children: ReactNode }) {
    const [cadastro, setCadastro] = useState<UserData>(initialCadastro);

    // Carregar do localStorage ao iniciar
    useEffect(() => {
        const saved = localStorage.getItem('cadastro');
        if (saved) {
            setCadastro(JSON.parse(saved));
        }
    }, []);

    // Salvar no localStorage sempre que mudar
    useEffect(() => {
        localStorage.setItem('cadastro', JSON.stringify(cadastro));
    }, [cadastro]);

    return (
        <CadastroContext.Provider value={{ cadastro, setCadastro }}>
            {children}
        </CadastroContext.Provider>
    );
}

export function useCadastro() {
    const context = useContext(CadastroContext);
    if (!context) {
        throw new Error('useCadastro must be used within a CadastroProvider');
    }
    return context;
}
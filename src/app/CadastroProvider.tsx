import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import type { UserData } from '../hooks/cadasterUser'; // Importe o tipo correto

type CadastroContextType = {
    cadastro: UserData;
    setCadastro: Dispatch<SetStateAction<UserData>>;
};

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

export function CadastroProvider({ children }: { children: ReactNode }) {
    const [cadastro, setCadastro] = useState<UserData>({} as UserData);
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
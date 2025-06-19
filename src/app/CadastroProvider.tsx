import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type CadastroContextType = {
    cadastro: object;
    setCadastro: Dispatch<SetStateAction<object>>;
};

const CadastroContext = createContext<CadastroContextType | undefined>(undefined);

export function CadastroProvider({ children }: { children: ReactNode }) {
    const [cadastro, setCadastro] = useState<object>({});
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
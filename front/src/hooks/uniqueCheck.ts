import axios from 'axios';

type ExistsResponse = { exists: boolean };

export async function checkEmailExists(email: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`http://localhost:5000/api/usuarios/check-email?email=${encodeURIComponent(email)}`);
    return res.data.exists;
}

export async function checkCpfExists(cpf: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`http://localhost:5000/api/usuarios/check-cpf?cpf=${cpf}`);
    return res.data.exists;
}

export async function checkCnpjExists(cnpj: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`http://localhost:5000/api/oficinas/check-cnpj?cnpj=${cnpj}`);
    return res.data.exists;
}

export async function checkPlacaExists(placa: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`http://localhost:5000/api/carros/check-placa?placa=${placa}`);
    return res.data.exists;
}
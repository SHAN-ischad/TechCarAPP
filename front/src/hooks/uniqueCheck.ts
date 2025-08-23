import axios from 'axios';
import { API_URL } from './apiUrl';


type ExistsResponse = { exists: boolean };

export async function checkEmailExists(email: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`${API_URL}/api/usuarios/check-email?email=${encodeURIComponent(email)}`);
    return res.data.exists;
}

export async function checkCpfExists(cpf: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`${API_URL}/api/usuarios/check-cpf?cpf=${cpf}`);
    return res.data.exists;
}

export async function checkCnpjExists(cnpj: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`${API_URL}/api/oficinas/check-cnpj?cnpj=${cnpj}`);
    return res.data.exists;
}

export async function checkPlacaExists(placa: string): Promise<boolean> {
    const res = await axios.get<ExistsResponse>(`${API_URL}/api/carros/check-placa?placa=${placa}`);
    return res.data.exists;
}
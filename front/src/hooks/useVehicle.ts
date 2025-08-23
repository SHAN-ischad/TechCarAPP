import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from './apiUrl';


export function useVehicle(id: string) {
    const [vehicle, setVehicle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVehicle() {
            try {
                const response = await axios.get(`http://${API_URL}/api/carros/${id}`);
                setVehicle(response.data);
            } catch (error) {
                setVehicle(null);
            } finally {
                setLoading(false);
            }
        }
        fetchVehicle();
    }, [id]);

    return { vehicle, loading };
}
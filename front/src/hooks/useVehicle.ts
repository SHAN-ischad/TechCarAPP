import axios from 'axios';
import { useEffect, useState } from 'react';

export function useVehicle(id: string) {
    const [vehicle, setVehicle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVehicle() {
            try {
                const response = await axios.get(`http://localhost:5000/api/carros/${id}`);
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
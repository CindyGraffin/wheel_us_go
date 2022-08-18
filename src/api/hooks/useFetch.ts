import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url: string) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async(): Promise<void> => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError('Axios error: ' + error.message);
                } else {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [data, error, loading] as const;
};

export default useFetch;
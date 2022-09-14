import { useEffect, useState } from "react";
import { api } from "../utils/dryconfig";

/**
 * le hook useFetch permet de lancer une requête via axios en passant a ce hook l'url cible
 * retoune les data récupérer, l'etat de chargement, les erreurs relevées et la fonction reFetch
 * @param {string} url
 * @returns
 */
const useFetch = (url: string) => {
    // state
    // TODO: Typer le state Data
    const [data, setData] = useState<any[] | any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(false);

    /**
     * lance la requête quand l'url est modifier
     * recupère la reponse de la requete est transmet au stat data le resultat
     * lève une erreur en cas d'echec
     */
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setLoading(true);
            try {
                const res = await api.get(url);
                setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    /**
     * Relance la requête axios
     */
    const reFetch = async (): Promise<void> => {
        setLoading(true);
        try {
            const res = await api.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;

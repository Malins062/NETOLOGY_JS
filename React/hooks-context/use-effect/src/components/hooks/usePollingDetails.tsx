import { useState, useEffect} from 'react';
import { initialDetailsUser } from '../../App';

export const usePollingDetails = (url: string | undefined) => {
    const [data, setData] = useState(initialDetailsUser);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    if (url) {
        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);

                try {
                    const response = await fetch(url);
                    if (!response.ok) { 
                        throw new Error(response.statusText); 
                    }
                    const dataValues = await response.json();
                    setData(dataValues);
                    setError(null);
                } catch (e: any) {
                    setError(e);
                    console.error(e);
                } finally { 
                    setLoading(false); 
                }
            };
    
            fetchData();
        }, [url]);
    }

    return [{data, isLoading, hasError}];
}

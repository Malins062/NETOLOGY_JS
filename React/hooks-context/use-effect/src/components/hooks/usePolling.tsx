import { useState, useEffect, useRef} from 'react';
import { User } from '../../App';

export const usePolling = (url: string | undefined, interval: number, initialData: Array<User>) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    const timestampRef = useRef<Number>(0);

    if (url) {
        useEffect(() => {
            const fetchData = async () => {
                const timestamp = Date.now();
                timestampRef.current = timestamp;
                setLoading(true);
                // console.log(timestampRef.current);

                try {
                    const response = await fetch(url);
                    if (!response.ok) { 
                        throw new Error(response.statusText); 
                    }
                    const dataValues = await response.json();
                    if (timestampRef.current === timestamp) { setData(dataValues); }
                    setError(null);
                } catch (e: any) {
                    setError(e);
                    console.error(e);
                } finally { 
                    setLoading(false); 
                }
            };
    
            fetchData();
            if (interval > 0) {
                const intervalId = setInterval(fetchData, interval * 1000);
                return () => clearInterval(intervalId);
            }                
        }, [url, interval]);
    }

    return [{data, isLoading, hasError}];
}

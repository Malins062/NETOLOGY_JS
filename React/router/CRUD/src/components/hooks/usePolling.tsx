import { useState, useEffect, useRef} from 'react';
import { PostData } from '../Post';

const usePolling = (url: string | undefined, interval: number, 
    initData: Array<PostData>,
    options?: object) => {
    const [data, setData] = useState(initData);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    const timestampRef = useRef<Number>(0);

    if (url) {
        useEffect(() => {
            const fetchData = async () => {
                const timestamp = Date.now();
                timestampRef.current = timestamp;
                setLoading(true);

                try {
                    const response = await fetch(url, options);
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

const setData = async (url: string, options?: object) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) { 
            throw new Error(response.statusText); 
        }
    } catch (e: any) {
        console.error(e);
    }
}

const getData = async (url: string, options?: object) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) { 
            throw new Error(response.statusText); 
        } else {
            return response.json();
        }
    } catch (e: any) {
        console.error(e);
        return null;
    }
}

export { usePolling, setData, getData }
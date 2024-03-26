import { useEffect, useState } from 'react';

export const useFetchQuery = <T, U>(
    service: (signal: AbortSignal, params: U) => Promise<T>,
    params?: U
) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);

        const controller = new AbortController();

        service(controller.signal, params as U)
            .then((response) => {
                response && setData(response);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, [params]);

    return { data, isLoading, error };
};

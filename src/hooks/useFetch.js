import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const apiURL = "https://62f40773a84d8c9681317867.mockapi.io/";

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(apiURL + url, { signal: abortCont.signal })
            .then(res => {

                if (!res.ok) {
                    throw Error("Couldn't fetch data for that resource");
                }

                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })

            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }

            })


        // return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;
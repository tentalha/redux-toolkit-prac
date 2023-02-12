import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const _data = getData();
        setData(_data);

    }, [url])

    const getData = async () => {

        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response?.data)
        } catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }

    }

    return { data, error, isLoading }

}


// https://dummyjson.com/todos


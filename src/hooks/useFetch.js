import { useState, useEffect } from 'react';
import { GetData } from '../helpers/GetData';

export const useFetch = (categoria) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
        vacio: true
    })

    useEffect(() => {
        async function fetchData() {
            let resp = await GetData(categoria)

            if (resp.length === 0) {
                setState({
                    data: null,
                    loading: false,
                    error: null,
                    vacio: true
                })
            }
            else {
                setState({
                    data: resp,
                    loading: false,
                    error: null,
                    vacio: false
                })
            }
        }
        fetchData();
    }, [categoria]);

    return state
}

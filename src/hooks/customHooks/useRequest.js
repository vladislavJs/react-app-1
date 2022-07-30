import {useEffect, useState} from "react";

export const useRequest = (request) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        request()
            .then(response => setData(response.data))
            .then(() => console.log(data))
            .catch(e => setError(e.message))
            .finally(setLoading(false))
    }, [])

    return [data, loading, error]
}
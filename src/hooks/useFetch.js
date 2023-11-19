import { useContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'
import { Context } from '../utils/context'

const useFetch = (endpoint) => {

    const {loading, setLoading} = useContext(Context)
    const [data, setData] = useState()

    useEffect(()=>{
        makeCallApi()
        //eslint-disable-next-line
    }, [endpoint])

    const makeCallApi = async () =>{
        setLoading(true)
        const res = await fetchDataFromApi(endpoint)
        setData(res)
        setLoading(false)
    }
    return {data};
}

export default useFetch

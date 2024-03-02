import { useEffect, useState } from "react"

export default function useData (search: string = '', ascending: boolean | undefined, page: number = 1, limit: number = 15) {
    const [data, setData] = useState<TData>();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/users?search=${search}&ascending=${ascending != undefined ? ascending : ''}&page=${page}&limit=${limit}`)
            .then((req) => req.json())
            .then((res)=>{
                setLoading(false);
                setData(res)
            })
            .catch(()=>{
                setLoading(false);
            })
    }, [ascending, limit, page, search])

    return {data, loading}
}
export type TData = {
    docs?: TUser[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    limit: number,
    nextPage: number,
    page: number,
    pagingCounter: number,
    prevPage: number,
    totalDocs: number,
    totalPages: number,
}
export type TUser = {
    _id?: string,
    userName: string
    userPlace: string
    ratings: number
    age: number
    gender: string
    avatar: string
}
import { useState } from "react"
import useDebounceEffect from "./useDebouncedEffect";

export default function useData (search: string = '', ascending: boolean | undefined, page: number = 1, limit: number = 15) {
    const [data, setData] = useState<TData>();
    
    useDebounceEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users?search=${search}&ascending${ascending ? ascending : ''}&page=${page}&limit=${limit}`)
            .then((req) => req.json())
            .then(setData)
    }, 500, [ascending, limit, page, search])

    return data
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
}
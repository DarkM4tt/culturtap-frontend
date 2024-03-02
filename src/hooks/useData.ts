export default function useData () {
    return {
        count: 20,
        results: [{
            "_id": "65e334acd1d5d4931a14145e",
            "userName": "John Doe",
            "userPlace": "New York",
            "ratings": 4.5,
            "age": "30",
            "gender": "Male"
        }, {
            "_id": "65e334acd1d5d4931a14145f",
            "userName": "Alice Smith",
            "userPlace": "Los Angeles",
            "ratings": 4.8,
            "age": "25",
            "gender": "Female"
        }, {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }, {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }
        , {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }
        , {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }
        , {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }
        , {
            "_id": "65e334acd1d5d4931a141460",
            "userName": "Robert Johnson",
            "userPlace": "Chicago",
            "ratings": 4.2,
            "age": "35",
            "gender": "Male"
        }]
    }
}

export type TUser = {
    _id?: string,
    userName: string
    userPlace: string
    ratings: number
    age: string
    gender: string
}
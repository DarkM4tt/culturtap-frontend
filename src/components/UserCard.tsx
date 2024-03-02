import { TUser } from "../hooks/useData";
import './userCard.scss'

export default function UserCard ({data}: {data: TUser}) {
    const { userName, userPlace, ratings, age, gender, avatar } = data;
    return (
        <div className="userCard">
            <img src={avatar} alt='avatar' />
            <div className="userInfo">
                <p className="name">{userName}</p>
                <p>{userPlace}</p>
                <p>{gender} • {age} Years</p>
                <p>{ratings} ⭐️</p>
            </div>
        </div>
    )
}
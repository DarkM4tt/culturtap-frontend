import { useAvatar } from "../hooks/useAvatar";
import { TUser } from "../hooks/useData";
import './userCard.scss'

export default function UserCard ({data}: {data: TUser}) {
    const { userName, userPlace, ratings, age, gender } = data;
    const avatar = useAvatar();
    
    return (
        <div className="userCard">
            <img src={avatar} alt='avatar' />
        </div>
    )
}
import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import './ProfileCard.css'

export default function ProfileCard(){
    return(
        <div className="card">
            <ProfileInfo nombre="Ronny" apellido="Gerónimo" />
            <ProfileBio  />

        </div>
    )
}
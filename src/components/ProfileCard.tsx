import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import './ProfileCard.css'

export default function ProfileCard(props: any){
    return(
        <div className="card">
            <ProfileInfo />
            <ProfileBio bio="Aprendiendo un curso de react" />

        </div>
    )
}
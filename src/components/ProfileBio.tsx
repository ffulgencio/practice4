import './ProfileBio.css'
export default function PofileBio(props:any){
    return (
        <div className="profile-bio">
            {/* <h4>Bio</h4> */}
            <p>{props.bio}</p>
        </div>
    )
}
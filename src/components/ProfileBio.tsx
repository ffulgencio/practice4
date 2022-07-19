import './ProfileBio.css'
export default function PofileBio(props:any){

    const objetivos = "Aprender React";

    return (
        <div className="profile-bio">
            {/* <h4>Bio</h4> */}
            <p>{props.bio}</p>
            <p>{objetivos}</p>
            
        </div>
    )
}
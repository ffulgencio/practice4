import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import './ProfileCard.css'

export default function ProfileCard(props:any){
     const {nombre, apellido, urlImagen, correo, bios} = props;

    return(
        <div className="card">
            <ProfileInfo nombre={nombre} apellido={apellido} urlImagen={urlImagen} correo={correo}/>
            <ProfileBio bios={bios} />

        </div>
    )
}
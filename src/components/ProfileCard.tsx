import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import './ProfileCard.css'

export default function ProfileCard(props:any){
    return(
        <div className="card">

            <ProfileInfo
            nombre = {props.nombre}
            apellido = {props.apellido}
            urlImagen ={props.urlImagen}
            correo = {props.correo}
            />

            <ProfileBio 
            //bio="Aprendiendo un curso de react" mostrarTitulo={true} 
            bio = {props.bio}
            />

        </div>
    )
}
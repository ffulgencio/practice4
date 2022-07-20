import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import './ProfileCard.css'

export default function ProfileCard(props:any){
    const {nombre, apellido, correo, urlImagen, bio} =props;
    return(
        <div className="card">

            <ProfileInfo
            nombre = {nombre}
            apellido = {apellido}
            urlImagen ={urlImagen}
            correo = {correo}
            />

            <ProfileBio 
            //bio="Aprendiendo un curso de react" mostrarTitulo={true} 
            bio = {bio}
            />

        </div>
    )
}
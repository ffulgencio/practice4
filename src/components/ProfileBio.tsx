import './ProfileBio.css'
export default function PofileBio(props:any){

    const objetivos = "Aprender React";
    const Titulo = <h4> Mostrando el Titulo con Renderizado Condicional </h4>;

    return (
        <div className="profile-bio">
            {/* <h4>Bio</h4> */}
            <p>{props.mostrarTitulo && Titulo}</p>
            <p>{props.bio}</p>
            <p>{objetivos}</p>
            
        </div>
    )
}
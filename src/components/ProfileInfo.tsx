import "./ProfileInfo.css";

export default function ProfileInfo(props:any) {

  return (
    <div>
      <img
        className="avatar"
        src= {props.urlImagen}
        alt=""
      />
      <div className="profile-info">
        <h2>{props.nombre} {props.apellido}</h2>
        <h2>{props.telefono}</h2>
        <a href="#">{props.correo}</a>
      </div>
    </div>
  );
}

import "./ProfileInfo.css";

export default function ProfileInfo(props:any) {
    const {nombre, apellido, urlImagen, correo} = props;

  return (
    <div>
      <img
        className="avatar"
        src={urlImagen}
        alt=""
      />
      <div className="profile-info">
        <h2>{nombre} {apellido}</h2>
        <a href="#">{correo}</a>
      </div>
    </div>
  );
}

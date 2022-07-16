import "./ProfileInfo.css";

export default function ProfileInfo(props:{nombre:'', apellido:''}) {

  return (
    <div>
      <img
        className="avatar"
        src="https://educa.org.do/wp-content/uploads/2022/04/ALAN-IMG_5845.png"
        alt=""
      />
      <div className="profile-info">
        <h2>{props.nombre} {props.apellido}</h2>
        <a href="#">john.doe@domain.com</a>
      </div>
    </div>
  );
}

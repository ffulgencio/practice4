import "./ProfileInfo.css";

export default function ProfileInfo(props:{nombre:'', apellido:''}) {

  return (
    <div>
      <img
        className="avatar"
        src="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg"
        alt=""
      />
      <div className="profile-info">
        <h2>{props.nombre} {props.apellido}</h2>
        <a href="#">john.doe@domain.com</a>
      </div>
    </div>
  );
}

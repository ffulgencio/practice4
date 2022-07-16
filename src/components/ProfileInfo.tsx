import "./ProfileInfo.css";

export default function ProfileInfo() {
  return (
    <div>
      <img
        className="avatar"
        src="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg"
        alt=""
      />
      <div className="profile-info">
        <h2>Francis Fulgencio</h2>
        <a href="#">john.doe@domain.com</a>
      </div>
    </div>
  );
}

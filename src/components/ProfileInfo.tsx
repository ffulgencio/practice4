import "./ProfileInfo.css";

export default function ProfileInfo() {
  return (
    <div>
      <img
        className="avatar"
        src="https://educa.org.do/wp-content/uploads/2022/04/ALAN-IMG_5845.png"
        alt=""
      />
      <div className="profile-info">
        <h2>Alan Aquino</h2>
        <a href="#">me@alanaquino.com</a>
      </div>
    </div>
  );
}

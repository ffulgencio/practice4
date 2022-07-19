import ProfileCard from "./components/ProfileCard";
import { users } from "./data/users";

export default function App() {

  return (
    <div>
      <h1>User Profile Card</h1>
     
      {users.map((user)=>{
        return <ProfileCard {...user} />
      })}

    </div>
  );
}

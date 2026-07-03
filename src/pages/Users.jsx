import { Link } from "react-router-dom";
import users from "../data/users";
import "../styles/Users.css";

function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      {users.map((user, index) => (
      <div key={user.id} className="user-card">

       <div className={`profile-icon icon-${index}`}>
         👤 </div>

      <div className="user-info">
      <h3>{user.name}</h3>
      <p>{user.email}</p>

       <Link to={`/users/${user.id}`}>
        View Details
      </Link>
    </div>

    <hr />
  </div>
))}
</div>
  );
}

export default Users;
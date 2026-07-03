import { useParams } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();

  const user = users.find(
    (user) => user.id === parseInt(id)
  );

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>

      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}

export default UserDetail;
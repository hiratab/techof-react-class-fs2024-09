import { useEffect } from "react";
import { useParams } from "react-router";

function UserPage() {
  const params = useParams();

  const getUser = () => null;

  useEffect(() => {
    const user = getUser(params.id);
  }, [params]);

  return (
    <div>
      <h1>User Page</h1>
      <p>Id do usuario: {params.id}</p>
    </div>
  )
}

export default UserPage;
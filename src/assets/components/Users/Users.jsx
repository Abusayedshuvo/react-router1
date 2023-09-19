// import PropTypes from "prop-types";

import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl my-10">Users: {users.length} </h1>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;

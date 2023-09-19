import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email } = user;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="border-2 p-5 rounded-lg">
      <h1>{name}</h1>
      <p>{email}</p>
      <div className="mt-6">
        <button
          onClick={handleDetails}
          className="bg-black px-6 py-2 text-white rounded-lg"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;

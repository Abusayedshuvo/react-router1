// import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="container mx-auto">
      <p className="text-4xl">User Details Here</p>
      <div className="shadow-lg p-6">
        <p>User Name: {name}</p>
        <p>Email: {email}</p>
        <button
          onClick={handleGoBack}
          className="bg-black px-6 py-2 text-white rounded-lg mt-10"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

UserDetails.propTypes = {};

export default UserDetails;

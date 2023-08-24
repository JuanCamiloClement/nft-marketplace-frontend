import { Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';

const PrivateRoute = ({ children }) => {
  // const { isAdmin } = useContext(UsersAndNFTsContext);
  const role = localStorage.getItem('role');

  let isAdmin = false;
  if (role === 'ADMIN') {
    isAdmin = true;
  }

  return isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRoute;

import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext);

  return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

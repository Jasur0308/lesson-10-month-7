import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Auth = () => {
  const { token } = useSelector(state => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if(token) {
      navigate("/profile")
    }
  }, [pathname])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
  <div id="button-ctnr">
  <i onClick={onLogout} class="fa-solid fa-right-from-bracket"></i>
  <p className='hide text'>LOG OUT</p>
  </div>)
};

export default LogoutButton;

import React from 'react';
import { getInitialData } from '../../services/actions/get-data';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout';
import LoginPage from '../pages/login-page';
import HomePage from '../pages/home-page';
import RegisterPage from '../pages/register-page';
import ForgotPasswordPage from '../pages/forgot-password-page';
import ResetPasswordPage from '../pages/reset-password-page';
import ProfilePage from '../pages/profile-page';
import IngredientPage from '../pages/ingredient-page';
import NotFoundPage from '../pages/not-found-page';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getInitialData());
   },[dispatch]);

   return (
    <>
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='forgot-password' element={<ForgotPasswordPage />} />
            <Route path='reset-password' element={<ResetPasswordPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='ingredients/:id' element={<IngredientPage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Route>
      </Routes>
    </>
   );
}

export default App;

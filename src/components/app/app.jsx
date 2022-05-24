import React from 'react';
import { getInitialData } from '../../services/actions/get-data';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../pages/layout';
import LoginPage from '../../pages/login-page';
import HomePage from '../../pages/home-page';
import RegisterPage from '../../pages/register-page';
import ForgotPasswordPage from '../../pages/forgot-password-page';
import ResetPasswordPage from '../../pages/reset-password-page';
import ProfilePage from '../../pages/profile-page';
import IngredientPage from '../../pages/ingredient-page';
import OrderFeedPage from '../../pages/order-feed-page';
import NotFoundPage from '../../pages/not-found-page';
import ProtectedRoute from '../protected-route/protected-route';
import NoAuthRoute from '../no-auth-route/no-auth-route';
import { getUserData } from '../../services/actions/login';

function App() {
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getUserData())
   }, [dispatch]);

   React.useEffect(() => {
      dispatch(getInitialData());
   },[dispatch]);

   return (
    <>
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={
               <NoAuthRoute>
                  <LoginPage />
               </NoAuthRoute>     
            } />
            <Route path='register' element={
               <NoAuthRoute>
                  <RegisterPage />
               </NoAuthRoute>  
            } />
            <Route path='forgot-password' element={
               <NoAuthRoute>
                  <ForgotPasswordPage />     
               </NoAuthRoute>
            } />
            <Route path='reset-password' element={
               <NoAuthRoute>
                  <ResetPasswordPage />
               </NoAuthRoute>
            } />
            <Route path='profile' element={
               <ProtectedRoute>
                  <ProfilePage />
               </ProtectedRoute>
            } />
            <Route path='order-feed' element={
               <ProtectedRoute>
                  <OrderFeedPage />
               </ProtectedRoute>
            } />
            <Route path='ingredients/:id' element={<IngredientPage />} />
            <Route path='*' element={<NotFoundPage />} />
         </Route>
      </Routes>
    </>
   );
}

export default App;

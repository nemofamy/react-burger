import React from 'react';
import { getInitialData } from '../../services/actions/get-data';
import { useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
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
import { getUserData } from '../../services/actions/login';
import { useSelector } from 'react-redux';
import { getCookie } from '../../services/utilities/get-cookie';

function App() {
   const isModalVisible = useSelector(store => store.modalIngredient.isVisible);
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
               <ProtectedRoute needAuth={false}>
                  <LoginPage />
               </ProtectedRoute>     
            } />
            <Route path='register' element={
               <ProtectedRoute needAuth={false}>
                  <RegisterPage />
               </ProtectedRoute>  
            } />
            <Route path='forgot-password' element={
               <ProtectedRoute needAuth={false}>
                  <ForgotPasswordPage />     
               </ProtectedRoute>
            } />
            <Route path='reset-password' element={
               <ProtectedRoute needAuth={false}>
                  <ResetPasswordPage />
               </ProtectedRoute>
            } />
            <Route path='profile' element={
               <ProtectedRoute needAuth={true}>
                  <ProfilePage />
               </ProtectedRoute>
            } />
            <Route path='order-feed' element={
               <ProtectedRoute needAuth={true}>
                  <OrderFeedPage />
               </ProtectedRoute>
            } />
            <Route path='/ingredients/:id' element={
               isModalVisible ? <HomePage /> : <IngredientPage />
            } /> 

            <Route path='*' element={<NotFoundPage />} />
            
         </Route>
      </Routes>
    </>
   );
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../containers';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="*" element={<Navigate to={'/'}/>} />
  </Routes>
);

export default AppRoutes;

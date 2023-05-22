import React, { useState } from 'react';
import { Container } from '@mui/material';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={`199993944696-0lelc1sdau17tuhfh4ccvi8tmdia01s7.apps.googleusercontent.com`}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/posts/search" element={<Home />} />
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default App;

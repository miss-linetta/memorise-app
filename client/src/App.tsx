import { Container } from '@material-ui/core';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import dotenv from 'dotenv';

const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={`199993944696-0lelc1sdau17tuhfh4ccvi8tmdia01s7.apps.googleusercontent.com`}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default App;

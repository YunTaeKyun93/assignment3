import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Home from './pages/home';
import SignUp from './pages/sign-up';
import Login from './pages/login';
import MyPage from './pages/my-page';
import MyOrder from './pages/my-page/detail';
import Layout from './layout';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { OrderProvider } from './context/order';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <OrderProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage/order" element={<MyPage />} />
                <Route path="/mypage/order/:id" element={<MyOrder />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </OrderProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;

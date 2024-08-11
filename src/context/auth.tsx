import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = (id: string, password: string) => {
    if (id === 'test' && password === 'test!234') {
      Swal.fire({
        title: '로그인 성공',
        text: '로그인이 성공적으로 완료되었습니다 >_0',
        icon: 'success',
        confirmButtonText: '확인',
      }).then((result) => {
        if (result.isConfirmed) {
          setIsAuthenticated(true);
          navigate('/');
        }
      });
    } else {
      Swal.fire({
        title: '로그인 정보 확인',
        text: '로그인이 실패 했습니다 ;ㅅ;',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider를 포함한 컴포넌트 에서');
  }
  return context;
};

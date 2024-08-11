import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import {
  StyledHeaderInnerWrapper,
  StyledHeaderWrapper,
  StyledLogo,
  StyledMenu,
  StyledNav,
  StyledMobileMenuButton,
  StyledMobileMenu,
  StyledCloseButton,
  StyledUserState,
} from './styles';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const path = '/assets/imgs/sign1.png';

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <StyledHeaderWrapper>
      <StyledHeaderInnerWrapper>
        <StyledLogo to="/">
          <img src={path} alt="logo" height={50} />
        </StyledLogo>
        <StyledNav>
          <StyledMenu to="/">서비스</StyledMenu>
          <StyledMenu to={isAuthenticated ? '/mypage/order' : '/sign-up'}>
            {isAuthenticated ? '마이페이지' : '회원가입'}
          </StyledMenu>
        </StyledNav>
        <StyledUserState
          to={isAuthenticated ? '/' : '/login'}
          onClick={isAuthenticated ? logout : undefined}
        >
          {isAuthenticated ? '로그아웃' : '로그인'}
        </StyledUserState>
        <StyledMobileMenuButton onClick={handleMobileMenuToggle}>
          ☰
        </StyledMobileMenuButton>
      </StyledHeaderInnerWrapper>

      <StyledMobileMenu $isOpen={isMobileMenuOpen}>
        <StyledCloseButton onClick={handleMobileMenuClose}>✕</StyledCloseButton>
        <Link to="/" onClick={handleMobileMenuClose}>
          서비스
        </Link>
        <Link
          to={isAuthenticated ? '/mypage/order' : '/sign-up'}
          onClick={handleMobileMenuClose}
        >
          {isAuthenticated ? '마이페이지' : '회원가입'}
        </Link>
        <Link
          to={isAuthenticated ? '/' : '/login'}
          onClick={() => {
            if (isAuthenticated) {
              logout();
              handleMobileMenuClose();
            } else {
              handleMobileMenuClose();
            }
          }}
        >
          {isAuthenticated ? '로그아웃' : '로그인'}
        </Link>
      </StyledMobileMenu>
    </StyledHeaderWrapper>
  );
};

export default Header;

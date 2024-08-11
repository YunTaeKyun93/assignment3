import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1180px;
`;

export const StyledHeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  background-color: #f2abb6;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

interface MenuProps {
  $isActive?: boolean;
}

export const StyledMenu = styled(Link)<MenuProps>`
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? '#408FBA' : '#E7E212')};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;
  font-size: 18px;
  &:hover {
    color: #408fba;
  }
`;

export const StyledUserState = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #408fba;
  }
`;

export const StyledMobileMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

interface MobileMenuProps {
  $isOpen: boolean;
}

export const StyledMobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 70vw; // Width of the sliding menu
  height: 100%;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  overflow-y: auto;

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color: #333;
    font-weight: normal;

    &.active {
      color: #ff5722;
      font-weight: bold;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff5722;
  }
`;

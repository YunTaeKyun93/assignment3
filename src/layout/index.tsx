import Header from '../components/header';
import { StyledLayoutWrapper, StyledMainContent } from './styles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Header />
      <StyledMainContent>{children}</StyledMainContent>
    </StyledLayoutWrapper>
  );
};

export default Layout;

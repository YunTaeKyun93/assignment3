import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.spacing.padding};
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

export const StyledMainContent = styled.main`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.headerHeight};
  max-width: 1180px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

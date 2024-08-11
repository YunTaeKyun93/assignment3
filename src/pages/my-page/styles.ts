import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyledOrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledOrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  gap: 30px;
`;

export const StyledPageButton = styled.button<{ disabled?: boolean }>`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

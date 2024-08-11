import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledContainer,
  StyledTitle,
  StyledOrderList,
  StyledOrderItem,
  StyledPagination,
  StyledPageButton,
} from './styles';
import { useOrder } from '../../context/order';

// const Dumb_Data = {
//   totalPages: 3,
//   currentPage: 0,
//   content: [
//     { id: 1, itemName: '아이템1' },
//     { id: 2, itemName: '아이템2' },
//     { id: 3, itemName: '아이템3' },
//     { id: 4, itemName: '아이템4' },
//     { id: 5, itemName: '아이템5' },
//     { id: 6, itemName: '아이템6' },
//     { id: 7, itemName: '아이템7' },
//     { id: 8, itemName: '아이템8' },
//     { id: 9, itemName: '아이템9' },
//     { id: 10, itemName: '아이템10' },
//   ],
// };

const ITEMS_PER_PAGE = 3;

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const { orderData } = useOrder();
  const [currentPage, setCurrentPage] = useState<number>(orderData.currentPage);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = orderData.content.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemClick = (id: number) => {
    navigate(`/mypage/order/${id}`);
  };

  return (
    <StyledContainer>
      <StyledTitle>주문 목록</StyledTitle>
      <StyledOrderList>
        {paginatedItems.map((item) => (
          <StyledOrderItem
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <span>{item.id}</span> <span>{item.itemName}</span>
          </StyledOrderItem>
        ))}
      </StyledOrderList>
      <StyledPagination>
        <StyledPageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          이전
        </StyledPageButton>
        <span>
          {currentPage + 1} / {orderData.totalPages}
        </span>
        <StyledPageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= orderData.totalPages - 1}
        >
          다음
        </StyledPageButton>
      </StyledPagination>
    </StyledContainer>
  );
};

export default MyPage;

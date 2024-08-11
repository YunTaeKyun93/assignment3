import React from 'react';

import { useParams } from 'react-router-dom';
import { StyledOrderDetailWrapper } from './styles';
import { useOrder } from '../../../context/order';

const MyOrder: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orderData } = useOrder();

  const order = orderData.content.find(
    (item: any) => item.id === parseInt(id || '', 10),
  );

  return (
    <StyledOrderDetailWrapper>
      {order ? (
        <>
          <div>ID: {order.id}</div>
          <div>Item Name: {order.itemName}</div>
        </>
      ) : (
        <div>주문을 찾을 수 없습니다.</div>
      )}
    </StyledOrderDetailWrapper>
  );
};

export default MyOrder;

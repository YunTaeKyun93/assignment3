import React, { createContext, useContext, ReactNode } from 'react';

const orderData: OrderData = {
  totalPages: 3,
  currentPage: 0,
  content: [
    { id: 1, itemName: '아이템1' },
    { id: 2, itemName: '아이템2' },
    { id: 3, itemName: '아이템3' },
    { id: 4, itemName: '아이템4' },
    { id: 5, itemName: '아이템5' },
    { id: 6, itemName: '아이템6' },
    { id: 7, itemName: '아이템7' },
    { id: 8, itemName: '아이템8' },
    { id: 9, itemName: '아이템9' },
    { id: 10, itemName: '아이템10' },
  ],
};

interface OrderContextType {
  orderData: OrderData;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  return (
    <OrderContext.Provider value={{ orderData }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('');
  }
  return context;
};

interface OrderData {
  totalPages: number;
  currentPage: number;
  content: { id: number; itemName: string }[];
}

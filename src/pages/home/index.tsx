import React from 'react';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { StyledHomePageWrapper, StyledImage } from './styles';
import * as Coms from '../../common-components';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const path = '/assets/imgs/bocchi.png';

  const orderClick = () => {
    if (isAuthenticated) {
      Swal.fire({
        title: '주문 성공',
        text: '주문이 성공적으로 완료되었습니다!',
        icon: 'success',
        confirmButtonText: '확인',
      });
    } else {
      Swal.fire({
        title: '로그인 필요',
        text: '주문을 하려면 로그인이 필요합니다.',
        icon: 'warning',
        confirmButtonText: '로그인',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };
  return (
    <StyledHomePageWrapper>
      <StyledImage src={path} alt="bocchi band" />
      <Coms.Button onClick={orderClick} label="주문하기" />
    </StyledHomePageWrapper>
  );
};

export default Home;

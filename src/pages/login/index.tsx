import React, { useState } from 'react';
import { StyledInnerWrapper, StyledLoginWrapper } from './styles';
import * as Comps from '../../common-components';
import * as ExComps from '../../extended-components';
import { useAuth } from '../../context/auth';
const Login = () => {
  const { login, isAuthenticated } = useAuth();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(id, password);
  };

  return (
    <StyledLoginWrapper>
      <StyledInnerWrapper>
        <Comps.Input
          inputSize="medium"
          variant="primary"
          onChangeText={setId}
          placeholder="이메일 입력"
        />
        <Comps.Input
          type="password"
          inputSize="medium"
          variant="primary"
          onChangeText={setPassword}
          placeholder="비밀번호 입력"
        />
        <Comps.Button label="로그인" onClick={handleLogin} />
      </StyledInnerWrapper>
    </StyledLoginWrapper>
  );
};

export default Login;

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Comps from '../../common-components';
import * as ExComps from '../../extended-components';
import { StyledSignUpWrapper, StyledForm } from './styles'; // styled-components
import { emailValidate } from '../../validate/email';
import {
  passwordConfirmValidate,
  passwordValidate,
} from '../../validate/password';
import { phoneNumberValidate } from '../../validate/phone-number';

const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (emailValidate(email)) {
      Swal.fire({
        title: '이메일 확인',
        text: '유효하지 않은 이메일 주소입니다.',
        icon: 'error',
        confirmButtonText: '확인',
      }).then(() => {
        emailRef.current?.focus();
      });
      return;
    }
    if (phoneNumberValidate(phone)) {
      Swal.fire({
        title: '비밀번호 확인',
        text: '비밀번호는 4~8자여야 합니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: '비밀번호 불일치',
        text: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
      return;
    }

    Swal.fire({
      title: '회원가입 성공',
      text: '회원가입이 완료되었습니다.',
      icon: 'success',
      confirmButtonText: '확인',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <StyledSignUpWrapper>
      <StyledForm>
        <ExComps.InputWithValidate
          ref={emailRef}
          type="email"
          placeholder="이메일"
          value={email}
          validate={[emailValidate]}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <ExComps.InputPassword
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          validate={[passwordValidate]}
        />
        <ExComps.InputPassword
          placeholder="비밀번호 확인"
          value={confirmPassword}
          validate={[passwordValidate]}
          confirmValidate={(value) => passwordConfirmValidate(value, password)}
          onChangeText={setConfirmPassword}
          password={password}
        />
        <ExComps.InputPhone placeholder="연락처" onChangeText={setPhone} />

        <Comps.Button label="회원가입" onClick={handleSubmit} />
      </StyledForm>
    </StyledSignUpWrapper>
  );
};

export default SignUp;

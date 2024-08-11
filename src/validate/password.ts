export const passwordValidate = (value: string): string | null => {
  if (value.length < 4 || value.length > 8) {
    return '비밀번호는 4~8자 이어야 합니다.';
  }
  return null;
};

export const passwordConfirmValidate = (
  value: string,
  password: string,
): string | null => {
  if (value !== password) {
    return '비밀번호가 일치하지 않습니다.';
  }
  return null;
};

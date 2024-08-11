export const emailValidate = (value: string): string | null => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(value)) {
    return '유효한 이메일 주소가 아닙니다.';
  }
  return null;
};

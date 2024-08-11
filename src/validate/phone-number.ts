export const phoneNumberValidate = (value: string): string | null => {
  const phoneNumberPattern = /^[0-9]{10,11}$/;
  if (!phoneNumberPattern.test(value)) {
    return "휴대폰 번호 형식에 맞게 입력해주세요.";
  }
  return null;
};

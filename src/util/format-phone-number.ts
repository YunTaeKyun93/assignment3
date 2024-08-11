const FormatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, ""); // 숫자만 추출
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 7) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(
    7,
    11
  )}`;
};

export default FormatPhoneNumber;

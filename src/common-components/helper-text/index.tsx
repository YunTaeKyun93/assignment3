import { StyledHelperText } from "./styles";

/**
 * HeperText 컴포넌트는 에러 발생시 검증조건을 보여주는 컴포넌트입니다.
 * HeperText의 현재 사이즈는 아무것도 설정 하지 않았으며, 각 프로젝트의
 * 제공하는 디바이스별 폰트 사이즈에 맞게 설정합니다.
 */
export const HelperText = ({ text }: { text: string }) => {
  return <StyledHelperText>{text}</StyledHelperText>;
};

import styled from "styled-components";
import { StyledButton } from "../../common-components/button/styles";

export const StyledButtonWithIconWrapper = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

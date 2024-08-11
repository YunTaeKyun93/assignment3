import styled from "styled-components";
import { StyledInput } from "../../common-components/input/styles";

export const StyledInputWithButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInputWithButton = styled(StyledInput)`
  flex-grow: 1;
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 10px;
  transform: translateY(-50%);
  top: 50%;
`;

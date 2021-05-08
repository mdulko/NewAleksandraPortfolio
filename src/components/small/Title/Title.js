import styled, { css } from "styled-components";
import Text from "../Text/Text";

const Title = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.pxToRem(30)};
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    padding-top: ${theme.spacing(3)}px;
    margin-bottom: ${theme.spacing(4)}px;
    ${theme.breakpoints.up("lg")} {
      font-size: ${theme.typography.pxToRem(34)};
    }
  `}
`;

export default Title;

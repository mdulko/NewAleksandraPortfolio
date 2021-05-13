import styled, { css } from "styled-components";
import Text from "../Text/Text";

const Description = styled(Text)`
  ${({ theme }) => css`
    text-align: justify;

    margin-bottom: ${theme.spacing(3)}px;
  `}
`;

export default Description;

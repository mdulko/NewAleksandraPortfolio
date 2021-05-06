import React from "react";
import { Link } from "@material-ui/core";
import styled, { css } from "styled-components";
import themes from "../../../theme/theme";

const LinkStyled = styled(Link)`
  ${() => css`
    color: ${themes.palette.black};
    :hover {
      color: ${themes.palette.red};
      text-decoration: none;
    }
  `}
`;

const LinkTo = ({ to, label }) => <LinkStyled href={to}>{label}</LinkStyled>;
export default LinkTo;

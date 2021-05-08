import React from "react";
import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";
import themes from "../../../theme/theme";

const ButtonStyled = styled(Button)`
  ${() => css`
    background-color: transparent;
    color: ${themes.palette.white};
    border: 1px solid ${themes.palette.gray};
    margin-top: 10px;
    box-shadow: none;
    :hover {
      background-color: #3c3c3d;
    }
  `}
`;

const Btn = ({ label }) => {
  return <ButtonStyled variant="contained">{label}</ButtonStyled>;
};

export default Btn;

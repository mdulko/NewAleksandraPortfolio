import React from "react";
import styled, { css } from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const contentHeight = "(100vh - 64px)";

const LoadingContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(${contentHeight} - 56px - 59px);
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.breakpoints.up("sm")} {
      height: calc(${contentHeight} - 64px - 59px);
    }

    ${theme.breakpoints.up("md")} {
      height: calc(${contentHeight} - 80px);
    }
  `}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <LoadingContainer>
    <CircularProgress disableShrink size={50} />
  </LoadingContainer>
);

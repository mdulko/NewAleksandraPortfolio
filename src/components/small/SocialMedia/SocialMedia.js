import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import LinkTo from "../LinkTo/LinkTo";
import themes from "../../../theme/theme";

const LogoWithLink = styled(Box)`
  ${({ theme }) => css`
    display: flex;

    min-width: 400px;
    align-items: center;
    padding-left: ${theme.spacing(18)}px;
    font-size: ${theme.typography.pxToRem(22)};
    & a {
      color: ${themes.palette.white};
    }
    :hover {
      & svg {
        fill: ${themes.palette.red};
      }
      & a {
        color: ${themes.palette.red};
      }
    }
    & svg {
      font-size: ${theme.typography.pxToRem(42)};
      margin-right: ${theme.spacing(2)}px;
    }
    ${theme.breakpoints.down("md")} {
      padding-left: ${theme.spacing(8)}px;
      font-size: ${theme.typography.pxToRem(18)};
    }
    ${theme.breakpoints.down("xs")} {
      padding-left: ${theme.spacing(10)}px;
    }
  `}
`;

const SocialMedia = ({ logo, label }) => {
  return (
    <LogoWithLink>
      {logo}
      <LinkTo label={label}></LinkTo>
    </LogoWithLink>
  );
};

SocialMedia.propTypes = {
  logo: PropTypes.element,
  label: PropTypes.string,
};

export default SocialMedia;

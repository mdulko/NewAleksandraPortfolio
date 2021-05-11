import React from "react";
import styled, { css } from "styled-components";
import emailjs from "emailjs-com";
import { TextField } from "@material-ui/core";
import themes from "../../../theme/theme";

const FormInput = styled(TextField)`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 15px;

    & label,
    textarea {
      color: ${themes.palette.gray};
    }
    & input {
      color: ${themes.palette.white};
    }
    & .MuiInput-underline {
      border-color: ${themes.palette.gray};
      ::before {
        border-bottom: 1px solid gray;
        :hover {}
    }
    & .Mui-focused {
      color: ${themes.palette.white};
      ::after {
        border-bottom: 1px solid ${themes.palette.white};
      }
    }
  `}
`;

const FormBox = styled.form`
  ${() => css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;
const InputStyled = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${themes.palette.white};
    border: 1px solid ${themes.palette.gray};
    margin-top: 10px;
    box-shadow: none;
    padding: ${theme.spacing(0, 2)};
    font-size: 1.125rem;
    line-height: 2.2rem;
    border-radius: 8px;
    :hover {
      background-color: #3c3c3d;
      cursor: pointer;
    }
  `}
`;

const FormEmail = (e) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6q7dk2j",
        "template_si8kc7i",
        e.target,
        "user_0oF4aMnPDL62XlnpMjaPB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form">
      <FormBox onSubmit={sendEmail}>
        <FormInput id="standard-secondary" label="Your Name" name="name" />
        <FormInput id="standard-secondary" label="Your Email" name="email" />
        <FormInput id="standard-secondary" label="Subject" name="subject" />
        <FormInput
          id="standard-textarea"
          label="Your Message..."
          multiline
          name="message"
          rowsMax={4}
        />
        <InputStyled type="submit" value="Send Message" />
      </FormBox>
    </div>
  );
};

export default FormEmail;

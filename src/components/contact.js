import React from "react";
import styled from "styled-components";
import { useForm } from "@statickit/react";
import { color } from "../theme";
import { ContentBlock } from "./";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0;

  @media all and (min-width: 768px) {
    margin: 24px auto;
    width 50%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const Label = styled.label`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  text-align: left;
  input {
    width: 80%;
  }
`;

const Submit = styled.input`
  width: 150px;
  margin-top: 48px;
  font-size: 24px;
  font-weight: bold;
  background-color: ${color.accentColor};
  color: ${color.baseColor2};
  height: 50px;
  border-radius: 25px;
  border: none;
`;

export const Contact = (props) => {
  const [state, handleSubmit] = useForm("contactForm");

  return (
    <ContentBlock
      ref={props.ref}
      background={color.baseColor1}
      color={color.baseColor2}
      title="Contact"
      titleId="contact"
    >
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input type="text" id="name" name="name" />
        </Label>

        <Label>
          Email
          <input type="text" id="email" name="email" />
        </Label>

        <Label>
          Subject
          <input type="text" id="subject" name="subject" />
        </Label>

        <Label style={{ flexDirection: "column", textAlign: "center" }}>
          What can I help you with?
          <textarea name="message" rows="10" cols="30" />
        </Label>

        <Submit type="submit" />
      </Form>
    </ContentBlock>
  );
};

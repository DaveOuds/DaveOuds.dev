import React from "react";
import styled from "styled-components";

export const ContentBlock = (props) => {
  const StyledBlock = styled.div`
    padding: 150px 16px;
    text-align: center;
    background: ${props.background};
    color: ${props.color};

    @media all and (min-width: 768px) {
      padding: 120px 160px;
    }
  `;
  return (
    <StyledBlock>
      <h2>{props.title}</h2>
      {props.children}
    </StyledBlock>
    )
};

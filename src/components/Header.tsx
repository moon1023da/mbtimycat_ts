import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from "react-bootstrap";

interface props {
  type: string;
}

function Header(props:props) {
  return (
    <Wrapper>{props.type==="progress" ? (
      <ProgressBar
      now={60}
      label={`${60}%`}
      style={{ width:"100%", height:"20px"}}
      />
    ) :(
      <div>😺예비집사 판별기😻 </div>
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background: #ffa07a;
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "양진체";
`;
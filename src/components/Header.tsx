import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from "react-bootstrap";
import { QuestionData } from '../stores/Question/QuestionData';

interface props {
  type: string;
  questionNo: number;
}

function Header(props:props) {
  return (
    <>
    {props.type==="progress" ? (
      <ProgressWrapper>
        <ProgressBar
          now={Math.round((props.questionNo / QuestionData.length) *100)}
          label={`${Math.round((props.questionNo / QuestionData.length) *100)}%`}
          style={{ width:"100%", height:"30px"}}
        />
      </ProgressWrapper>
      ):(
        <TitleWrapper style={{backgroundColor:"#ffa07a"}}>
          😺예비집사 판별기😻
        </TitleWrapper>
        )}
    </>
  );
}    
export default Header;

const ProgressWrapper = styled.div`
  font-size: 40px;
  font-family: "양진체";
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const TitleWrapper = styled.div`
  background: #ffa07a;
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "양진체";
  padding-top: 10px;
`;
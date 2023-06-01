import React from 'react';
import styled from 'styled-components';
import { Button } from "react-bootstrap";

import { QuestionData } from "../stores/Question/QuestionData";
import Header from '../components/Header';

function QuestionPage(): React.ReactElement{
  return (
    <Wrapper>
      <ContentsWrapper>
        <Header type="progress"/>
        <Title>{QuestionData[0].title}</Title>
        <ButtonGroup>
          <Button>{QuestionData[0].anwsera}</Button>
          <Button>{QuestionData[0].anwserb}</Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default QuestionPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100:vh;
  background: #fffacd;
  font-family: "양진체";

`;

// const Header = styled.div`
//   background: #ffa07a;
//   font-size: 40px;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   font-family: "양진체";
// `;

const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const ButtonGroup = styled.div`
 display:flex;
 justify-content: center;
 flex-direction: row;
`
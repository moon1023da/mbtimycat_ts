import React from 'react';
import styled from 'styled-components';
import { Button } from "react-bootstrap";

import { QuestionData } from "../stores/Question/QuestionData";
import Header from '../components/Header';

function QuestionPage(): React.ReactElement{

  const [questionNo, setQuestionNo] =React.useState(0);

  const handleCickAnswer = () => {
    setQuestionNo(questionNo +1);
  };

  return (
    <Wrapper>
      <ContentsWrapper>
        <Header type="progress" questionNo={questionNo}/>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button className="btn-warning" style={{marginRight: "20px"}} onClick={handleCickAnswer}>{QuestionData[questionNo].anwsera}</Button>
          <Button className="btn-warning">{QuestionData[questionNo].anwserb}</Button>
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
  height: 100vh;
  background: #fffacd;
  font-family: "양진체";

`;


const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;

`;

const ButtonGroup = styled.div`
 display:flex;
 justify-content: center;
 flex-direction: row;
 margin-top: 20px;
 font-size: 25pt;
 button{
  font-size: 18pt;
 };
`
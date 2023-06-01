import React from 'react';
import styled from 'styled-components';
import {Button, Image} from "react-bootstrap"
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import CatImage from '../assets/img/치즈냥.jpg';
import { IResult } from '../stores/Result/types';

function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti"); //예비집사의mbti
  const testResult = ResultData.find((cat: IResult) => cat.best === mbti);
  const friendCat = ResultData.find(friend => friend.best === testResult?.mbti);

  console.log({testResult});

  return (
    <>
      <Wrapper>
      <Header type="title" questionNo={0}/>
      <ContentsWrapper>
        <Title>결과보기</Title>
        <ResultImage>
          <Image 
          className="rounded-circle" 
          src={testResult?.image} 
          width={300} 
          height={300}/>
          
        </ResultImage>
        <Dsc>
          {testResult?.best}형 예비집사님과 찰떡궁합인 고양이는?{testResult?.mbti}형 고양이{" "}{testResult?.name}입니다.
        </Dsc>
        <Dsc>
          {testResult?.name} 고양이는 {testResult?.desc}
        </Dsc>
        <BestDsc>나의 고양이와 잘맞는 형제묘는? {friendCat?.name} 추천드려요😸</BestDsc>
      </ContentsWrapper>
    </Wrapper>
  </>);
}

export default ResultPage;

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
  margin-top: 20px;
  padding: 60px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 28pt;

`;
const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Dsc = styled.div`
  font-size: 16pt;
`;

const BestDsc = styled.div`
font-size: 14pt;
 color: tomato;
`;
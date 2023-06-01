import React from 'react';
import styled from 'styled-components';
import { Image} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';
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
        <FirstDsc>
          {testResult?.best}형 당신과 찰떡궁합인 냥이는?
        </FirstDsc>  
        <TwiceDsc>
          {testResult?.mbti}형 {" "}{testResult?.name}입니다.
        </TwiceDsc>
        <TriDsc>
          {testResult?.name} 고양이는 {testResult?.desc}
        </TriDsc>
        <Commend>
          <BestDsc>나의 고양이와 잘맞는 형제묘는? </BestDsc>
          <BestDsc>{friendCat?.name} 을(를) 추천드려요😸</BestDsc>
        </Commend>
      </ContentsWrapper>
    </Wrapper>
  </>);
}

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fffacd;
  font-family: "양진체";

`;

const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 50px;
`;

const Title = styled.div`
  font-size: 28pt;
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;


const FirstDsc = styled.div`
  font-size: 14pt;
  color: rgb(96 92 92);
`;

const TwiceDsc = styled.div`
  background: pink;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 18pt;
  text-align: center;
`;

const TriDsc = styled.div`
  font-size: 14pt;
`;

const Commend = styled.div`
  display: block;
  font-size: 14pt;
  color: white;
  background-color:tomato;
  border-radius:10px;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
`;

const BestDsc = styled.div`
  
`;





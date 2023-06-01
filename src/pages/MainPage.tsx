import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import CatImage from '../assets/img/치즈냥.jpg';
import Header from '../components/Header';

function MainPage() :React.ReactElement {
  const navigate = useNavigate();
  const handleClickButton = () =>{
    navigate("./question");
  }
  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0}/>
        <ContentsWrapper>
          <Title>고양이와 나의 mbti궁합</Title>
          <LogoImage>
            <img className="rounded-circle" src={CatImage} width={300} height={300}/>
          </LogoImage>
          <Dsc>나의 MBTI와 잘 맞는 주인님은 누굴까?</Dsc>
          <Button className="btn-danger" onClick={handleClickButton} style={{fontSize:25, marginTop:20, marginBottom:20, padding:20}}>테스트 시작하기</Button>
        </ContentsWrapper>
        <div className="adfit"/>
      </Wrapper>
    </>
  );
}

export default MainPage;

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
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 18pt;

`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Dsc = styled.div`
  padding: 10px 20px;
  font-size: 20pt;
  text-align: center;
`;


import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import CatImage from '../assets/img/치즈냥.jpg';

function MainPage() :React.ReactElement {
  const navigate = useNavigate();
  const handleClickButton = () =>{
    navigate("./question");
  }
  return (
    <>
      <Wrapper>
        {/* <Header></Header> */}
        <ContentsWrapper>
          <Title>나와 맞는 주인님은?!!</Title>
          <LogoImage>
            <img className="rounded-circle" src={CatImage} width={300} height={300}/>
          </LogoImage>
          <Dsc>MBTI를 기반으로 하는 나와 잘맞는 고양이 찾기!</Dsc>
          <Dsc>내가 집사가 되어 고양이를 키운다면 ??</Dsc>
          <Button className="btn-danger" onClick={handleClickButton} style={{fontSize:25, marginTop:20, marginBottom:20}}>테스트 시작하기</Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

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

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Dsc = styled.div`
  font-weight: 600;
`;


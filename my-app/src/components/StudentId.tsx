import React from "react";
import styled, { keyframes } from "styled-components";

const StudentId = () => {
  return (
    <Container>
      <StudentImg src="/김찬호.png" />
      <UpSide></UpSide>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
      <DownSide></DownSide>
      <Back>
        <ColorContainer>
          <Blue></Blue>
          <Yellow></Yellow>
          <Red></Red>
        </ColorContainer>
        <LogoImg src="/dsmLogo.png" />
        <ColorContainer>
          <Blue></Blue>
          <Yellow></Yellow>
          <Red></Red>
        </ColorContainer>
      </Back>
    </Container>
  );
};

const rotateIdCard = keyframes`
  0% {
    transform: rotate3d(-1, 14, 0, 0deg);
  }
  100% {
    transform: rotate3d(-1, 14, 0, 360deg);
  }
`;

const Container = styled.div`
  width: 500px;
  transform: rotate3d(-1, 14, 0, 0deg);
  transform-style: preserve-3d;
  position: relative;
  animation: ${rotateIdCard} 7s infinite linear;
`;

const StudentImg = styled.img`
  width: 100%;
  perspective: 700px;
  position: absolute;
  transform: translateZ(2px);
`;

const Back = styled.div`
  width: 100%;
  height: 803.4px;
  background-color: #f8f8f8;
  transform: rotateY(180deg) translateZ(2px);
  backface-visibility: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const LeftSide = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  transform: rotateY(-90deg) translateZ(2px);
`;

const RightSide = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  transform: rotateY(90deg) translateZ(498px);
`;

const UpSide = styled.div`
  position: absolute;
  width: 2px;
  height: 500px;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  transform: rotateX(90deg) rotateZ(90deg) translateY(-250px) translateZ(251px);
`;

const DownSide = styled.div`
  position: absolute;
  width: 2px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  transform: rotateX(90deg) rotateZ(90deg) translateY(-250px) translateZ(-551px);
`;

const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

const ColorContainer = styled.div`
  display: flex;
  height: 3%;
  width: 100%;
  position: relative;
`;

const Red = styled.div`
  background-color: #bd0000;
  flex-grow: 1;
`;

const Blue = styled.div`
  background-color: #001ba8;
  flex-grow: 1;
`;

const Yellow = styled.div`
  background-color: #ffaf51;
  flex-grow: 1;
`;

export default StudentId;

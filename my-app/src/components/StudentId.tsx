import React from "react";
import styled from "styled-components";

const StudentId = () => {
  return (
    <Container>
      <StudentImg src="/김찬호.png" />
      <UpSide></UpSide>
      <DownSide></DownSide>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
      <Back>
        <LogoImg src="/dsmLogo.png" />
      </Back>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  transform: rotate3d(-1, 14, 0, 0deg);
  transform-style: preserve-3d;
  position: relative;
`;

const StudentImg = styled.img`
  width: 100%;
  perspective: 700px;
  position: absolute;
  backface-visibility: hidden;
  transform: translateZ(2px);
`;

const Back = styled.div`
  width: 100%;
  height: 803.4px;
  perspective: 1000px;
  background-color: aliceblue;
  transform: rotateY(180deg) translateZ(2px);
  backface-visibility: hidden;
`;

const LeftSide = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ccc;
  transform: rotateY(-90deg) translateZ(2px);
`;

const RightSide = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ccc;
  transform: rotateY(90deg) translateZ(498px);
`;

const UpSide = styled.div`
  position: absolute;
  width: 2px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ccc;
  transform: rotateX(90deg) rotateZ(90deg) translateY(-197px) translateZ(251px);
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
  border: 1px solid #ccc;
  transform: rotateX(90deg) rotateZ(90deg) translateY(-249px) translateZ(-554px);
`;

const LogoImg = styled.img``;

export default StudentId;

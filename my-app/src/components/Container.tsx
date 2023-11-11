import React from "react";
import styled from "styled-components";
import StudentId from "./StudentId";

const Container = () => {
  return (
    <Box>
      <StudentId />
    </Box>
  );
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export default Container;

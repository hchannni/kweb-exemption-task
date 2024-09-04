import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
`;

const InstructorMainPage: React.FC = () => {
  return (
    <Container>
      <Title>교수자 메인 페이지</Title>
      <Message>환영합니다! 이곳은 교수자 메인 페이지입니다.</Message>
    </Container>
  );
};

export default InstructorMainPage;

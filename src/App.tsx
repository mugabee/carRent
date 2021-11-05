import React from 'react';
import './App.css';
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

export function HomePage() {
  return (
    <PageContainer>
      light up the darkness
    </PageContainer>
  );
}
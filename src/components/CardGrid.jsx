import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Main = styled.div`
  margin-top: 110px;
  margin-left: 100px;
  position: absolute;
  width: 90%;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export default function CardGrid() {
  return (
    <Main>
      <Card
        avatar="https://picsum.photos/id/32/230/130"
        channel="Allan Howard"
        title="He is just a good boy !"
        image="https://picsum.photos/id/237/230/130"
        views="5,6 mil visualizações"
        time="há 2 dias"
        />
      <Card
        avatar="https://picsum.photos/id/123/230/130"
        channel="Ambience mixes"
        title="1 hour forest ambience / ambience mix"
        image="https://picsum.photos/id/28/230/130"
        views="12 mil visualizações"
        time="há 10 meses"
      />
      <Card
        avatar="https://picsum.photos/id/55/230/130"
        channel="Scary Nature"
        title="YOU WON'T BELIEVE WHAT THIS JAGUAR DID TO THIS ALLIGATOR"
        image="https://picsum.photos/id/219/230/130"
        views="187 visualizações"
        time="há 8 dias"
        />
      <Card
        avatar="https://picsum.photos/id/64/230/130"
        channel="Car Lover"
        title="the story of the oldest car in my collection - kombi 1975 "
        image="https://picsum.photos/id/183/230/130"
        views="12,2 mi visualizações"
        time="há 2 meses"
      />
      <Card
        avatar="https://picsum.photos/id/61/230/130"
        channel="Car Lover"
        title="how albert einstein invented time"
        image="https://picsum.photos/id/175/230/130"
        views="176 mil visualizações"
        time="há 2 meses"
      />
    </Main>
  );
}

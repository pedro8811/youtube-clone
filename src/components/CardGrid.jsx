import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Main = styled.div`
  margin-top: 110px;
  margin-right: 30px;
  position: absolute;
  width: 88%;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: 1080px){
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
  }
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  z-index: 1;
`;

export default function CardGrid() {
  return (
    <Main>
      <Card
        duration="00:37"
        avatar="https://picsum.photos/id/32/230/130"
        channel="Alan"
        title="He is just a good boy !"
        image="https://picsum.photos/id/237/230/130/?dog"
        views="5,6 mil visualizações"
        time="há 2 dias"
        />
      <Card
        duration="59:58"
        avatar="https://picsum.photos/id/123/230/130"
        channel="Ambience mixes"
        title="1 hour forest ambience / ambience mix"
        image="https://picsum.photos/id/28/230/130"
        views="12 mil visualizações"
        time="há 10 meses"
      />
      <Card
        duration="05:29"
        avatar="https://picsum.photos/id/55/230/130"
        channel="Scary Nature"
        title="YOU WON'T BELIEVE WHAT THIS JAGUAR DID TO THIS ALLIGATOR"
        image="https://picsum.photos/id/219/230/130"
        views="187 visualizações"
        time="há 8 dias"
        />
      <Card
        duration="34:12"
        avatar="https://picsum.photos/id/64/230/130"
        channel="Car Lover"
        title="the story of the oldest car in my collection - kombi 1975 "
        image="https://picsum.photos/id/183/230/130"
        views="12,2 mi visualizações"
        time="há 5 meses"
      />
      <Card
        duration="07:12"
        avatar="https://picsum.photos/id/42/230/130"
        channel="Acredite ou não"
        title="why albert einstein is a genius"
        image="https://picsum.photos/id/175/230/130"
        views="176 mil visualizações"
        time="há 2 meses"
      />
      <Card
        duration="00:37"
        avatar="https://picsum.photos/id/32/230/130"
        channel="Alan"
        title="He is just a good boy !"
        image="https://picsum.photos/id/237/230/130"
        views="5,6 mil visualizações"
        time="há 2 dias"
        />
      <Card
        duration="59:58"
        avatar="https://picsum.photos/id/123/230/130"
        channel="Ambience mixes"
        title="1 hour forest ambience / ambience mix"
        image="https://picsum.photos/id/28/230/130"
        views="12 mil visualizações"
        time="há 10 meses"
      />
      <Card
        duration="05:29"
        avatar="https://picsum.photos/id/55/230/130"
        channel="Scary Nature"
        title="YOU WON'T BELIEVE WHAT THIS JAGUAR DID TO THIS ALLIGATOR"
        image="https://picsum.photos/id/219/230/130"
        views="187 visualizações"
        time="há 8 dias"
        />
      <Card
        duration="34:12"
        avatar="https://picsum.photos/id/64/230/130"
        channel="Car Lover"
        title="the story of the oldest car in my collection - kombi 1975 "
        image="https://picsum.photos/id/183/230/130"
        views="12,2 mi visualizações"
        time="há 5 meses"
      />
      <Card
        duration="07:12"
        avatar="https://picsum.photos/id/42/230/130"
        channel="Acredite ou não"
        title="why albert einstein is a genius"
        image="https://picsum.photos/id/175/230/130"
        views="176 mil visualizações"
        time="há 2 meses"
      />
    </Main>
  );
}

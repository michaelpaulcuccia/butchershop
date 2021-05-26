import React from "react";
import '../styles/reset.css';
import {
  MainWrapper,
  Container,
  FullWidth,
  SubCenteredWidth
} from "../components/layoutComponents";
import Features from '../components/Features';
import ImageBlock from '../components/ImageBlock';
import Social from '../components/Social';
import Card from '../components/Card';
import Block from '../components/Block';

const IndexPage = () => (
  <MainWrapper>

    <Container>

      <FullWidth>
        <ImageBlock
          title='Welcome'
          textOne='Try me on desktop'
          textTwo='and try me on mobile'
        />
      </FullWidth>

      <FullWidth>
        <Features />
      </FullWidth>

      <FullWidth>
        <Block
          bgColor='dark'
          title='Corned beef swine buffalo.'
        />
      </FullWidth>

      <FullWidth>
        <Block
          title='Brisket pork pastrami sirloin.'
        />
      </FullWidth>

      <SubCenteredWidth>
        <Card title='Hello' content='I am a card. Please add text!' />
        <Card title='Bacon Ispum' content='Doner prosciutto sausage, cupim ham kevin tri-tip shankle buffalo flank filet mignon ribeye pancetta pork chop capicola. Ball tip spare ribs tail drumstick shankle cupim.' />
        <Card title='Yo' content="What's up with all the bacon on this page???" />
      </SubCenteredWidth>

      <FullWidth>
        <ImageBlock
          title='Bacon'
          textOne='Kielbasa andouille chislic ground round, prosciutto alcatra short loin.'
          textTwo='Pig swine boudin cupim.'
        />
      </FullWidth>

      <SubCenteredWidth>
        <Card title='Bacon' content='Filet mignon alcatra ground round, swine tail pastrami pig biltong meatloaf ham fatback capicola ball tip.' />
        <Card title='More Bacon' content='Turkey chuck flank meatball, beef ribs bacon drumstick andouille doner cow short ribs shoulder venison jerky.' />
      </SubCenteredWidth>

      <FullWidth>
        <Social />
      </FullWidth>

    </Container>
  </MainWrapper>


)

export default IndexPage

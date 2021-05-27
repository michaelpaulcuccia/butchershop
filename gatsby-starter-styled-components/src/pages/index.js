import React from "react";
import '../styles/reset.css';
import {
  MainWrapper,
  Container,
  FullWidth,
  SubCenteredWidth
} from "../components/layoutComponents";
import Features from '../components/Features';
import HeroAndHeader from '../components/HeroAndHeader';
import Social from '../components/Social';
import Card from '../components/Card';
import Menu from '../components/Menu';
import Beef from '../images/beef.svg';
import Chicken from '../images/chicken.svg';

const itemsAndPrice_Beef = [
  { cut: 'Kobe Wagyu Burgers', price: '20.99' },
  { cut: 'Sirloin Burgers', price: '12.99' },
  { cut: 'All Natural Beef Hot Dogs', price: '9.99' },
  { cut: 'Boned-In Rib-Eye', price: '17.99' },
  { cut: 'New York Strip', price: '15.99' },
  { cut: 'Porterhouse T-Bone', price: '22.99' },
];

const itemsAndPrice_Chicken = [
  { cut: 'Whole Chicken', price: '10.99' },
  { cut: '8 Piece Chicken', price: '12.99' },
  { cut: 'Boneless Cutlets', price: '10.99' },
  { cut: 'Boneless Breasts', price: '9.99' },
  { cut: 'Boned-In Breast', price: '8.99' },
  { cut: 'Chicken Thighs', price: '10.99' },
];



const IndexPage = () => (
  <MainWrapper>

    <Container>

      <FullWidth>
        <HeroAndHeader />
      </FullWidth>

      <FullWidth>
        <Features />
      </FullWidth>

      <FullWidth>
        <Menu
          bgColor='dark'
          title='Beef'
          itemsAndPrice={itemsAndPrice_Beef}
          icon={Beef}
        />
      </FullWidth>

      <FullWidth>
        <Menu
          title='Chicken'
          itemsAndPrice={itemsAndPrice_Chicken}
          icon={Chicken}
        />
      </FullWidth>

      <SubCenteredWidth>
        <Card title='Hello' content='I am a card. Please add text!' />
        <Card title='Bacon Ispum' content='Doner prosciutto sausage, cupim ham kevin tri-tip shankle buffalo flank filet mignon ribeye pancetta pork chop capicola. Ball tip spare ribs tail drumstick shankle cupim.' />
        <Card title='Yo' content="What's up with all the bacon on this page???" />
      </SubCenteredWidth>

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

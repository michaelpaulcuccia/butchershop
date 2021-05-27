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
import Footer from '../components/Footer';
import Card from '../components/Card';
import Menu from '../components/Menu';
import ComingSoon from '../components/ComingSoon';
import Beef from '../images/beef.svg';
import Chicken from '../images/chicken.svg';
import Pork from '../images/pork.svg';
import Fish from '../images/fish.svg';


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

const itemsAndPrice_Pork = [
  { cut: 'Provolone Sausage', price: '10.99' },
  { cut: 'Hot Italian Sausage ', price: '9.99' },
  { cut: 'Sweet Italian Sausage ', price: '9.99' },
  { cut: 'Pork Hot Dogs', price: '9.99' },
  { cut: 'Double Smoked Bacon', price: '12.99' },
  { cut: 'Baby Back Ribs', price: '19.99' },
  { cut: 'Spare Ribs', price: '15.99' },
  { cut: 'Boneless Pork Loin', price: '17.99' },
  { cut: 'Pork Tenderloin', price: '15.99' },
  { cut: 'Bone-In Pork Chops', price: '15.99' },
  { cut: 'BonelessPork Chops', price: '17.99' },
];

const itemsAndPrice_Fish = [
  { cut: 'UPeel Shrimp', price: '19.99' },
  { cut: 'Mussells', price: '12.99' },
  { cut: 'Diver Scallops', price: '20.99' },
  { cut: 'Tuna', price: '19.99' },
  { cut: 'Salmon', price: '18.99' },
  { cut: 'Sea Bass', price: '19.99' },
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
          title='Beef - Grass Fed and Pasture Raised'
          itemsAndPrice={itemsAndPrice_Beef}
          icon={Beef}
        />
      </FullWidth>

      <SubCenteredWidth>
        <ComingSoon />
      </SubCenteredWidth>

      <FullWidth>
        <Menu
          title='Chicken - Free Range, Free Range Organic, Pasture Raised'
          itemsAndPrice={itemsAndPrice_Chicken}
          icon={Chicken}
        />
      </FullWidth>

      <FullWidth>
        <Menu
          bgColor='cream'
          title='Pork - Heritage and Cross Breeds'
          itemsAndPrice={itemsAndPrice_Pork}
          icon={Pork}
        />
      </FullWidth>

      <FullWidth>
        <Menu
          bgColor='redish'
          title='Fish - Wild Caught and Farm Raised'
          itemsAndPrice={itemsAndPrice_Fish}
          icon={Fish}
        />
      </FullWidth>

      <SubCenteredWidth>
        <Card title='Jane Plain' content='These hamburgers are so incredibly good! Eat bite tastes like steak.' />
        <Card title='Bob McKnob' content='I cooked the NY Strip tonight and it was AWESOME!!! From frozen to done in just 15 minutes. Cast iron sear and then a 525 oven on the rack.' />
        <Card title='Turd Ferguson' content="Got my beef! All is wonderful! We want to thank you SO much! The process was so easy, and the notifications were excellent. Best of all, the beef was AMAZING in quality and taste. We will definitely be ordering more in the future." />
      </SubCenteredWidth>


      <FullWidth>
        <Footer />
      </FullWidth>

    </Container>
  </MainWrapper>


)

export default IndexPage

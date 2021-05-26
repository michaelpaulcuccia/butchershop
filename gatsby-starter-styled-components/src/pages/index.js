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

const IndexPage = () => (
  <MainWrapper>
    <Container>
      <FullWidth>
        <Features />
      </FullWidth>
      <FullWidth>
        <ImageBlock />
      </FullWidth>
      <FullWidth>
        <Social />
      </FullWidth>
    </Container>
  </MainWrapper>


)

export default IndexPage

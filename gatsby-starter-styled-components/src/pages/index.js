import React from "react";
import '../styles/reset.css';
import {
  MainWrapper,
  Container,
  FullWidth,
  SubCenteredWidth
} from "../components/layoutComponents";
import Features from '../components/Features';

const IndexPage = () => (
  <MainWrapper>
    <Container>
      <FullWidth>
        <Features />
      </FullWidth>
    </Container>
  </MainWrapper>


)

export default IndexPage

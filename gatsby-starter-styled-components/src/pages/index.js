import React from "react";
import '../styles/reset.css';
import {
  MainWrapper,
  Container,
  FullWidth,
  SubCenteredWidth
} from "../components/layoutComponents";
import Features from '../components/Features';
import ImageBlock from '../components/ImageBlock'

const IndexPage = () => (
  <MainWrapper>
    <Container>
      <FullWidth>
        <Features />
      </FullWidth>
      <FullWidth>
        <ImageBlock />
      </FullWidth>
    </Container>
  </MainWrapper>


)

export default IndexPage

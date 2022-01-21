import React from 'react';
import styled from 'styled-components';
import hero from '../images/hero.jpg';

const Container = styled.div`
    background-image: url(${hero});
    background-repeat: no-repeat;
    //background-position: right center;
    background-position: center;
    background-size: cover;
    width: 100%;
    //height: 300px;
    height: 30vh;
`;

const TextContainer = styled.div`
    color: #fff;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {

        font-family: Montez;
        font-size: 70px;
        //color: #ff0000;

        @media (max-width: 1000px) {
            font-size: 32px;
        }
    }

`;

const HeroAndHeader = () => {
    return (
        <Container>
            <TextContainer>
                <h1>Welcome to the Butcher Shop</h1>
            </TextContainer>
        </Container>
    )
}

export default HeroAndHeader

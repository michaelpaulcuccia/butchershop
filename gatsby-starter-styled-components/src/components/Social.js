import React from 'react';
import styled from 'styled-components';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import YouTube from '../images/youtube.svg';

const Container = styled.div`
    width: 100%;
    height: 100px;
    //to set icons at bottom
    position: relative;
`;

const TextContainer = styled.div`
    text-align: center;
    font-family: Montez;

    h1 {
        padding-top: 5px;
        

        @media (max-width: 1000px) {
            font-size: 20px;
        }
    }

    p {
        font-size: 20px;

        @media (max-width: 1000px) {
            font-size: 16px;
        }
    }

`;

const IconContainer = styled.div`
    //sets icons at bottom
    position: absolute;
    bottom: 15px;
    right: 15px;

    display: flex;
    justify-content: flex-end;
    
    
    @media (max-width: 1000px) {
        position: relative;
        justify-content: center;
        margin-top: 30px;
        //needed to center
        margin-left: 40px;
    }
     
    img {
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }
`;

const Social = () => {
    return (
        <Container>
            <TextContainer>
                <h1>The Butcher Shop</h1>
                <p>100 Main Street</p>
                <p>Metuchen, NJ 08840</p>
            </TextContainer>
            <IconContainer>
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={LinkedIn} />
                <img src={Twitter} />
                <img src={YouTube} />
            </IconContainer>
        </Container>
    )
}

export default Social

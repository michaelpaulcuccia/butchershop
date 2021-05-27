import React from 'react';
import styled from 'styled-components';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import YouTube from '../images/youtube.svg';

const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
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
    border-left: 1px solid #000000;
    padding-left: 25px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: flex-start;
    }
     
    img {
        height: 25px;
        width: 25px;
        margin-right: 10px;       
        
        @media (max-width: 1000px) {
            
            height: 20px;
            width: 20px;
            margin-bottom: 10px;  
        }
    }
`;

const ShopContainer = styled.div`
    border-right: 1px solid #000000;
    padding-right: 25px;
    font-family: Montserrat; 
`;

const Footer = () => {
    return (
        <Container>
            <ShopContainer>
                <p><strong>Shop</strong></p>
                <p>Beef</p>
                <p>Pork</p>
                <p>Chicken</p>
                <p>Fish</p>
            </ShopContainer>
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

export default Footer

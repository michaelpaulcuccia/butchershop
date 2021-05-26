import React from 'react';
import styled from 'styled-components';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import YouTube from '../images/youtube.svg';

const Container = styled.div`
    width: 100%;
    height: 200px;
    background: #d3d3d3;
    //to set icons at bottom
    position: relative;
`;

const TextContainer = styled.div`
    text-align: center;

    h1 {
        padding-top: 5px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    ul {
        list-style-type: none;
        margin-top: 5px;
    }

`;

const IconContainer = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;

    display: flex;
    justify-content: flex-end;
    
    
    @media (max-width: 768px) {
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
                <h1>Porchetta rump ribeye boudin brisket. </h1>
                <ul>
                    <li>beef pastrami</li>
                    <li>steak turducken</li>
                    <li>swine spare ribs</li>
                </ul>
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

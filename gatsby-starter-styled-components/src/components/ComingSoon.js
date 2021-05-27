import React from 'react';
import styled from 'styled-components';
import Kobe from '../images/kobe.jpg';

const Container = styled.div`
    background-image: url(${Kobe});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 30vh;
`;

const TextContainer = styled.div`
    color: #10314D;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 125px;

    @media (max-width: 1000px) {
        margin-top: 75px;
    }

    h1 {
        font-size: 60px;

        @media (max-width: 1000px) {
            font-size: 40px;
        }
    }

    .line-top {
        border-bottom: 5px solid #10314D;
        width: 50%;
        margin: 0 auto;

        @media (max-width: 1000px) {
            width: 65%;
        }
    }

    .line-bottom {
        border-top: 5px solid #10314D;
        width: 50%;
        margin: 0 auto;

        @media (max-width: 1000px) {
            width: 65%;
        }
    }

`;

const ComingSoon = () => {
    return (
        <Container>
            <TextContainer>
                <div className='line-top' />
                <h1>Coming Soon</h1>
                <div className='line-bottom' />
            </TextContainer>
        </Container>
    )
}

export default ComingSoon

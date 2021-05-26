import React from 'react';
import styled from 'styled-components';
import Image from '../images/imageOne.jpg'

const Container = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    width: 100%;
    height: 200px;
`;

const TextContainer = styled.div`
    color: #000000;
    padding: 25px;
    display: flex;
    flex-direction: column;

    h1 {
        @media (max-width: 1000px) {
            font-size: 24px;
        }
    }

    p {
        font-size: 24px;
        font-weight: bold;

        @media (max-width: 1000px) {
            font-size: 16px;
        }
    }
`;

const ImageBlock = props => {
    return (
        <Container>
            <TextContainer>
                <h1>{props.title}</h1>
                <p>{props.textOne}</p>
                <p>{props.textTwo}</p>
            </TextContainer>
        </Container>
    )
}

export default ImageBlock

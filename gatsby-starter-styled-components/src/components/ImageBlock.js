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

const ImageBlock = () => {
    return (
        <Container>

        </Container>
    )
}

export default ImageBlock

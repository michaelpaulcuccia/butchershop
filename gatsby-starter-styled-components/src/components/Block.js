import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    height: 300px;
    width: 100%;
`;

const StyledContainer = props => {
    switch (props.bgColor) {
        case 'light':
            return <Gray {...props} />
        case 'dark':
            return <Dark {...props} />
        default:
            return <Gray {...props} />
    }
}

const Gray = styled(Container)`
    background: #d3d3d3;
  
    p {
        color: #000000;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Dark = styled(Container)`
    background: #000000;

    p {
        color: #fff;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;


const Block = props => {
    return (
        <StyledContainer bgColor={props.bgColor}>
            <p>{props.text}</p>
        </StyledContainer>
    )
}

export default Block

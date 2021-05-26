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
};

const Gray = styled(Container)`
    background: linear-gradient(90deg, rgba(99,97,119,1) 0%, rgba(201,201,213,1) 100%, rgba(0,212,255,1) 100%);
  
    h1 {
        color: #000000;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        font-style: italic;
    }

    .line {
        border: 1px solid #fff;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const Dark = styled(Container)`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,8,84,1) 100%, rgba(0,212,255,1) 100%);

    h1 {
        color: #fff;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        font-style: italic;
    }

    .line {
        border: 1px solid #fff;
        margin-left: 20px;
        margin-right: 20px;
    }
`;


const Block = props => {
    return (
        <StyledContainer bgColor={props.bgColor}>
            <h1>{props.title}</h1>
            <div className='line' />
        </StyledContainer>
    )
}

export default Block

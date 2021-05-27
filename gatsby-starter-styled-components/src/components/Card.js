import React from 'react';
import styled from 'styled-components';
//import Cards from '../images/cards.png';
import Star from '../images/star.svg';

const Container = styled.div`
    height: 250px;
    width: 300px;
    border: 3px solid blue;
    border-radius: 15px;
    background: linear-gradient(to right, #D763CD, #8F44Fd);
    margin: 10px;

    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-around;

        p {
            color: #fff;
            font-size: 24px;
        }

        img {
            height: 20px;
            width: 20px;
            margin-right: 2px;
        }
    }

    .line {
        width: 100%;
        border: 1px solid #fff;
    }

    .content {
        padding: 10px;

        p {
            color: #fff;
        }
    }
`;

const Card = props => {
    return (
        <Container>
            <div className='title-container'>
                <p>{props.title}</p>
                <span>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                </span>
            </div>
            <div className='line' />
            <div className='content'>
                <p><i>"{props.content}"</i></p>
            </div>
        </Container>
    )
}

export default Card

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    margin-left: 20px;
    margin-top: 5px;
    padding-bottom: 10px;
    
    p {
        color: #fff;       
    }
`;

const ItemsAndPrices = props => {
    console.log(props.itemsAndPrice)
    return (
        <Container>
            {props.itemsAndPrice && props.itemsAndPrice.map((item, index) => {
                return <p key={index}><strong>Cut:</strong> {item.cut}.... <strong>Price Per Pound: $</strong>{item.price} </p>;
            })}
        </Container>
    );
};

export default ItemsAndPrices;
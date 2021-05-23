import React from 'react';
import styled from 'styled-components';
//import ArrowPoints from './ArrowPoints';
import Arrow from '../images/Arrow.svg';


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const Points = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-start;

    img {
        height: 25px;
        width: 25px;
        margin-right: 15px;
        margin-left: 5px;
    }
    
    p {
        display: inline;
    }

`;

const Features = () => {
    return (
        <Container>
            <Points>
                <img src={Arrow} />
                <p>chislic spare ribs pastrami doner andouille. Flank porchetta capicola, shoulder pork biltong turducken prosciutto</p>
            </Points>
            <Points>
                <img src={Arrow} />
                <p>landjaeger brisket flank t-bone frankfurter pork. Strip steak turkey tongue, pastrami</p>
            </Points>
            <Points>
                <img src={Arrow} />
                <p>chislic spare ribs pastrami doner andouille. Flank porchetta capicola, shoulder pork biltong turducken prosciutto</p>
            </Points>
            <Points>
                <img src={Arrow} />
                <p>landjaeger brisket flank t-bone frankfurter pork. Strip steak turkey tongue.</p>
            </Points>
            <Points>
                <img src={Arrow} />
                <p>landjaeger brisket flank t-bone frankfurter pork. Strip steak turkey tongue. </p>
            </Points>

        </Container>
    )
}

export default Features

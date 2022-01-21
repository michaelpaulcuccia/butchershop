import React from 'react';
import styled from 'styled-components';
//import ArrowPoints from './ArrowPoints';
import Clever from '../images/clever.svg';


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;

    @media (max-width: 1000px) {
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
                <img src={Clever} />
                <p>100% grass-fed beef and pasture-raised beef (raised on grass then finished on natural grains)</p>

            </Points>
            <Points>
                <img src={Clever} />
                <p>Heritage breed pork (Berkshire, Tamsworth, and Duroc, and cross breeds)</p>
            </Points>
            <Points>
                <img src={Clever} />
                <p>Free-range and free-range organic chicken as well as truly-pasture raised chicken</p>
            </Points>
            <Points>
                <img src={Clever} />
                <p>Wild-caught and farm-raised seafood from some of the most sustainable sources in the world</p>
            </Points>
            <Points>
                <img src={Clever} />
                <p>Homemade sausages & burgers made with pride & passion</p>
            </Points>
            <Points>
                <img src={Clever} />
                <p>Locally sourced - we strive to work with farmers and ranchers within a 150-mile radius</p>
            </Points>
            <Points>
                <img src={Clever} />
                <p>Quality and freshness ALWAYS guaranteed</p>
            </Points>

        </Container>
    )
}

export default Features

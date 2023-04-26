import React from 'react';
import styled from 'styled-components';


export default function FoodMenu(){

  
    return (
        <Container>
            Food Menu page
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    @media only screen and (max-width: 1100px) {
        width: 90%;
    }
`

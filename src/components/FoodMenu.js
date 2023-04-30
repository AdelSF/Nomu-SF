import React from 'react';
import styled from 'styled-components';


export default function FoodMenu(){

  
    return (
        <Container>
            Food Menu page
            <Button>
                <a href="https://drive.google.com/file/d/1vYWpBbuSSjm8cQkv9dnmUJcsxIkxAOHt/view?usp=share_link" target="_blank" >See the menu </a>
            </Button>
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
const Button = styled.button`
    width: 100px;
    margin: 100px;
`

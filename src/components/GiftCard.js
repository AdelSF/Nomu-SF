import React from 'react';
import styled from 'styled-components';


export default function GiftCard(){

  
    return (
        <Container>
            Gift card page
            <Button>
                <a href="https://pos.toasttab.com/" target="_blank" >Buy Gift Card </a>
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

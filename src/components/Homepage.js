import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/backgorund-img-min.png'

export default function Homepage(){

  
    return (
        <Container>
            <BackgroundImage src={BackgroundImg} />
        </Container>
    )
}

const Container = styled.div`
    
`

const BackgroundImage = styled.img`
    width: 100%;
`
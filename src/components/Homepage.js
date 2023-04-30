import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../assets/table-background-img.jpg';

export default function Homepage(){

  
    return (
        <Container>
            <ImageBox>
                <BackgroundImage alt="table" src={BackgroundImg} />
                <H2>Nomu Skewers</H2>
                <Title>Japanese Restaurant</Title>
            </ImageBox>
            <ContentSection>
                <LeftBox>
                    <p>left</p>
                    <ContentImg src="#" alt="food" />
                </LeftBox>
                <RightBox>
                    <Header>Right</Header>
                    <Paragraph>Right</Paragraph>
                    <Button>Link Button</Button>
                </RightBox>
            </ContentSection>
        </Container>
    )
}

const Container = styled.div`
    
`

const ContentSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftBox = styled.div`

`
const RightBox = styled.div`

`

const ContentImg = styled.img`

`
const Header = styled.h3`

`

const Paragraph = styled.p`

`
const Button = styled.button`

`


const BackgroundImage = styled.img`
    width: 100%;
    opacity: .9;
`

const ImageBox = styled.div`
    position: relative;
    text-align: center;
    color: white;
    width: 100%;
`

const H2 = styled.h2`
    font-size: 5rem;
    color: white;
    text-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-bottom: 2px solid white;
    @media only screen and (max-width: 1100px) {
        font-size: 3rem;
    }
    @media only screen and (max-width: 700px) {
        position: relative;
        margin-bottom: 0;
    }
`

const Title = styled.p`
    font-size: 2.2rem;
    position: absolute;
    top: 55%;
    left: 50%;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    transform: translate(-50%, -50%);
    @media only screen and (max-width: 1100px) {
        font-size: 1.2rem;
    }
  @media only screen and (max-width: 700px) {
        position: relative;
        margin: 0;
    }
`


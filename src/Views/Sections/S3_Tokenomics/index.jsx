import emotionStyled from '@emotion/styled'
import React from 'react'
import bg1 from '../../../assets/about-bg1.png'
import mainimg from '../../../assets/Twitter-Header.jpg'
import tokenomics1 from '../../../assets/tokenomics1.jpg'
import tokenomics2 from '../../../assets/tokenomics2.jpg'
import tokenomics3 from '../../../assets/tokenomics3.jpg'

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { buySellTax, supply, tgLink, xLink } from '../../../links'

const Wrapper = emotionStyled.div`
    min-height: 100vh;
    padding: 10vh 20px;

    @media(max-width: 1600px){
        padding: 15vh 20px;
    
    }
    @media(max-width: 1100px){
        padding: 80px 20px;
        background-size: 80%;
    }
    @media(max-width: 800px){
        padding: 50px 20px;
        background-size: 90%;
    }
`
const CardBoxImg = emotionStyled.img`
    border: 3px solid #00732F;
    box-shadow: 0 0 1.5vw 0.2vw #00732F;
`
const CardBox = emotionStyled(Grid)`
    
    .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    }

    .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    }

    .flip-card:focus {
        outline: 0;
    }

    .flip-card:hover .flip-card-inner,
    .flip-card:focus .flip-card-inner{
    transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    }

    .flip-card-front {
    background: linear-gradient(to left, #4364f7, #6fb1fc);
    color: black;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .flip-card-back {
    background: linear-gradient(to right, #4364f7, #6fb1fc);
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    }    

`
const Card = ({imgsrc, text}) => {
    return(
        <Grid xs={12} sm={6} md={4} padding={{xs: '15px 0',sm:3}}>
            <Box>
                <CardBoxImg src={imgsrc} style={{width:'100%', height: 'auto'}}/>
                <Button href={xLink} className='green' target='_blank'>{text}</Button>
            </Box>
        </Grid>
    )
}
export const Tokenomics = () => {
  return (
    <Wrapper id="tokenomics">
        <Container maxWidth="lg">
            <Typography variant='h2'>Tokenomics</Typography>
            <Grid container justifyContent={'center'}>
                <Card 
                    text={buySellTax}
                    imgsrc={tokenomics1}
                />
                <Card 
                    text={'LP Burned'}
                    imgsrc={tokenomics2}
                />
                <Card 
                    text={supply}
                    imgsrc={tokenomics3}
                />
            </Grid>
            <Grid xs={12} sm={6} md={4} padding={{sx: 0,sm:3}}>
                
            </Grid>
        </Container>
        <Container maxWidth="xl">
            <Grid xs={12} sm={6} md={4} padding={{sx: 0,sm:3}}>
                <img src={mainimg} style={{width:'100%', height:'auto'}} />
            </Grid>
        </Container>
    </Wrapper>
  )
}

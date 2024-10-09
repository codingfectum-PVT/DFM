import emotionStyled from '@emotion/styled'
import React from 'react'
import bg1 from '../../../assets/about-bg1.png'
import mainimg from '../../../assets/Twitter-Header.jpg'
import Meme1 from '../../../assets/Meme1.jpg'
import Meme2 from '../../../assets/Meme2.jpg'
import Meme3 from '../../../assets/Meme3.jpg'
import Meme4 from '../../../assets/Meme4.jpg'
import Meme5 from '../../../assets/Meme5.jpg'
import Meme6 from '../../../assets/Meme6.jpg'

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

const CardShaker = emotionStyled(Grid)`
    img{
        transition: transform 350ms ease;
        animation: shake 1000ms ease-in infinite;

        

        @keyframes shake {
            45% {
                transform: rotate(5deg);
            }
            60% {
                transform: rotate(-5deg);
            }
            70% {
                transform: rotate(2deg);
            }
            80% {
                transform: rotate(-5deg);
            }
            95% {
                transform: rotate(-2deg);
            }
        }
    }
`

const Card = ({imgsrc, text}) => {
    return(
        <CardShaker xs={12} sm={6} md={4} padding={{xs: '10px 0',sm:3}}>
            <img src={imgsrc} style={{width:'100%', height: 'auto'}}/>
        </CardShaker>
    )
}
export const Memes = () => {
  return (
    <Wrapper id="memes">
        <Container maxWidth="xl">
            <Typography variant='h2'>Memes</Typography>
            <Grid container justifyContent={'center'}>
                <Card 
                    imgsrc={Meme1}
                />
                <Card 
                    imgsrc={Meme2}
                />
                <Card 
                    imgsrc={Meme3}
                />
                <Card 
                    imgsrc={Meme4}
                />
                <Card 
                    imgsrc={Meme5}
                />
                <Card 
                    imgsrc={Meme6}
                />
            </Grid>
        </Container>
    </Wrapper>
  )
}

import emotionStyled from '@emotion/styled'
import React from 'react'
import bg1 from '../../../assets/about-bg1.png'
import bg2 from '../../../assets/about-bg2.png'
import { Box, Button, Typography } from '@mui/material'
import { tgLink, xLink } from '../../../links'

const Wrapper = emotionStyled.div`
    min-height: 100vh;
    background-image: url(${bg1}),url(${bg2});
    background-repeat: no-repeat;
    background-size: 35vw;
    background-position: bottom left, bottom right;
    padding: 10vh 20px;

    @media(max-width: 1600px){
        padding: 15vh 20px;
    background-size: 25vw;
    
    }
    @media(max-width: 1100px){
        padding: 80px 20px;
        background-image: url(${bg1});
        background-size: 80%;
    }
    @media(max-width: 800px){
        padding: 50px 20px;
        background-image: url(${bg1});
        background-size: 90%;
    }
`
export const About = () => {
  return (
    <Wrapper id="about">
        <Typography variant='h3'>$DFMGI is a bold ERC-20 token designed to capture the extravagant wealth of Dubai’s elite, featuring Arabs with luxury mansions, private jets, supercars, and oil riches. With a limited supply of 100 million tokens, burnt liquidity pool for long-term security, and 0% taxes on transactions, DFMGI offers an exclusive, tax-free investment opportunity. Rooted in the power of the symbolic 786, this token is more than just crypto, it's a gateway to prestige and limitless ambition.</Typography>
        <Box padding={'5vh 20px'} textAlign={'center'}>
            <Button href={tgLink} target='_blank'>Telegram</Button>
            <Button href={xLink} target='_blank'>Twitter</Button>
        </Box>
    </Wrapper>
  )
}

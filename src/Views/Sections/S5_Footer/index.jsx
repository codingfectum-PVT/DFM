import emotionStyled from '@emotion/styled'
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { tgLink, xLink } from '../../../links'

const Wrapper = emotionStyled.div`
    padding: 10vh 20px;
    text-align: center;
    @media(max-width: 1600px){
        padding: 15vh 20px;
    
    }
    @media(max-width: 1100px){
        padding: 80px 20px;
    }
    @media(max-width: 800px){
        padding: 50px 20px;
    }
`
export const Footer = () => {
  return (
    <Wrapper>
        <Box style={{padding: 20, backgroundColor:'#000', display: 'inline-block'}}>
        <Typography variant='h3'>$DFMGI Token is a meme token created for entertainment purposes only and has no association with DFM, equities, or securities. Any resemblance or association between $DFMGI Token and the "Stock Market" is purely coincidental and intended for satirical or humorous purposes. $DFMGI Token is a meme token with no intrinsic value or expectation of financial return.</Typography>
        </Box>
        <Box style={{padding: 9, marginTop:'100px', backgroundColor:'#000', display: 'inline-block'}}>
            <Typography variant='h3'>info@dfmgi786.com</Typography>
        </Box>
    </Wrapper>
  )
}

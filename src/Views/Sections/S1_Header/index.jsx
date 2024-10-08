import emotionStyled from '@emotion/styled'
import React, { useState } from 'react'
import bgVideo from '../../../assets/Dubai-bg-updated.mp4'
import logo from '../../../assets/Dubau-logo.webm'
import oldContainer from '../../../assets/old-container.png'
import { Box, Button, Container, Grid, Link, Menu, Typography } from '@mui/material'
import { CA, dexToolsLink, tgLink, uniSwapLink, xLink } from '../../../links'
const Wrapper = emotionStyled.div`
    min-height: 100vh;
    position: relative;
    z-index: 1;
    padding: 40px 0 80px;
`
const LogoVideo = emotionStyled(Box)`
  height: 40vh;
  width: auto;
`

const BackGroundVideo = emotionStyled(Box)`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    object-fit: cover;
    object-position: center;
`
const MenuLinkEx = emotionStyled(Link)`
  padding-left: 50px;
  position: relative;
  margin-top: 20px;
  display: inline-block;

  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background-image: url('${oldContainer}'); /* Replace with your image URL */
    background-size: contain; /* Make the image cover the entire area */
    background-position: center; /* Center the image */
    z-index: -1; /* Ensure the image appears behind the content */
  }
  &:first-child{
    &:after{
    background-image: unset;
    }
  }
  p{
    padding: 0px 3px;
  }
`

const MenuLink = ({targetLink, text}) => {
  return(
    <MenuLinkEx href={targetLink}>
      <Typography textAlign={'center'} color={'#FF3131'} backgroundColor={'#ffffff'} display={'inline-block'} margin={'auto'} >{text}</Typography>
    </MenuLinkEx>
  )
}

const HeaderSection = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyText = () => {
    // Get the text to copy
    const textToCopy = document.getElementById('textToCopy').innerText;

    // Use navigator.clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess('Text copied!');
      })
      .catch(err => {
        setCopySuccess('Failed to copy text.');
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <Wrapper>
        <BackGroundVideo component="video" autoPlay muted loop controls={false}>
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </BackGroundVideo>
        <Container maxWidth="xl">
          <Grid container>
            <Grid xs={12} textAlign={'center'}>
              <Typography textAlign={'center'} color={'#FF3131'} backgroundColor={'#ffffff'} display={'inline-block'} margin={'auto'} >Welcome to Dubai Financial Market General Index</Typography>
            </Grid>
            <Grid xs={12} textAlign={'center'}>
              <MenuLink 
                targetLink = "#about"
                text= "About"
              />
              <MenuLink 
                targetLink = "#tokenomics"
                text= "Tokenomics"
              />
              <MenuLink 
                targetLink = "#how-to-buy"
                text= "How to buy"
              />
              <MenuLink 
                targetLink = {tgLink}
                text= "Telegram"
              />
              <MenuLink 
                targetLink = {xLink}
                text= "Twitter"
              />
            </Grid>
            <Grid xs={12} textAlign={'center'} margin={'40px 0'}>
              
              <LogoVideo component="video" autoPlay muted loop controls={false}>
                  <source src={logo} type="video/mp4" />
                  Your browser does not support the video tag.
              </LogoVideo>
            </Grid>
          </Grid>
        </Container>
        
        <Container maxWidth="md">
          <Grid xs={12} container textAlign={'center'}>  
            <Grid xs={12} paddingBottom={4}>
               <Button onClick={copyText} style={{minWidth:'100%',display:'flex', justifyContent: 'space-between'}} target='_blank'>
                <span>CA:</span>
                <span id="textToCopy">{CA}</span>
               </Button>
            </Grid>
            <Grid xs={12} md={6} textAlign={'center'} paddingRight={{xs: 0, md: 2}}>
              <Button href={uniSwapLink} style={{minWidth:"100%"}} marginTop="1vh !important" target='_blank'>Buy Now</Button>
            </Grid>
            <Grid xs={12} md={6} textAlign={'center'} paddingLeft={{xs: 0, md: 2}}>
              <Button href={dexToolsLink} style={{minWidth:"100%", marginTop:"10px !important"}} target='_blank'>Chart</Button>
            </Grid>
          </Grid>
        </Container>
    </Wrapper>
  )
}

export default HeaderSection
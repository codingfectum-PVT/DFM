import React from 'react'
import { PageWrapper } from '../../Styles/style'
import HeaderSection from '../../Sections/S1_Header'
import { About } from '../../Sections/S2_About'
import { Tokenomics } from '../../Sections/S3_Tokenomics'
import { Memes } from '../../Sections/S4_Memes'
import { Footer } from '../../Sections/S5_Footer'
import bgVideo from '../../../assets/background-video.mp4'
import emotionStyled from '@emotion/styled'
import { Box } from '@mui/material'

const VideoWrapper = emotionStyled(Box)`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    @media(max-width: 1000px){
      display: none;
      position: unset;
    }

`
const BackGroundVideo = emotionStyled(Box)`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
    overflow-x: hidden;
    @media(max-width: 1000px){
      display: none;
    }
`
const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <VideoWrapper>
          <BackGroundVideo component="video" autoPlay muted loop controls={false}>
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
          </BackGroundVideo>
        </VideoWrapper> */}
        <HeaderSection />
        <About />
        <Tokenomics />
        <Memes />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage
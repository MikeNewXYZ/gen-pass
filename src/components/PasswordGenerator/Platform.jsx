import React, {useEffect} from "react"
import {
  Paper,
  useMediaQuery,
  Grid
} from "@material-ui/core"
import {useTheme} from "@material-ui/core/styles"
import styled from "styled-components"
import {
  useSpring,
  animated,
  config
} from "react-spring"

// Paper styles
const StyPaper = styled(Paper)`
  padding: ${p => p.padding};
  z-index: 1000;
  width: ${p => p.width};
`
// Paper component becomes animation ready
const AniStyPaper = animated(StyPaper)
// Paper animation states
const aniStatePaper = {
  init: {
    transform: "scale(1, 0)",
    opacity: 0,
    config: {...config.wobbly}
  },
  idle : {
    transform: "scale(1, 1)",
    opacity: 1,
    config: {...config.wobbly}
  }
}

function Platform({children}) {

  const theme = useTheme()
  const matchUpSM = useMediaQuery(theme.breakpoints.up("sm"))

  const [sprPaper, setSprPaper] = useSpring(() => ({...aniStatePaper.init}))

  // On component mount run idle animation on Paper
  useEffect(() => {
    setSprPaper({...aniStatePaper.idle})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AniStyPaper 
      elevation={24}
      width={matchUpSM ? "fit-content" : "100%"}
      style={sprPaper}
      padding={matchUpSM ? "10px 20px" : "10px 10px"}
    >
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        {children}
      </Grid>
    </AniStyPaper>
  )
}

export default Platform
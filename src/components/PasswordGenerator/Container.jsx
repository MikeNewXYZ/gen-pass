import React from "react"
import {
  Container as MuiContainer,
  Grid,
  useMediaQuery
} from "@material-ui/core"
import styled from "styled-components"

const StyContainer = styled(MuiContainer)`
  width: 50%;

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`

const StyGrid = styled(Grid)`
  height: 100vh;
`

function Container({children}) {

  const matchUp500px = useMediaQuery("(min-height:500px)")

  return (
    <StyContainer>
      <StyGrid
        container
        direction="column"
        justify={matchUp500px ? "center" : "flex-start"}
        alignItems="center"
      >
        {children}
      </StyGrid>
    </StyContainer>
  )
}

export default Container
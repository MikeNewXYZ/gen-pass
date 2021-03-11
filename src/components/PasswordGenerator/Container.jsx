import React from "react"
import {
  Container as MuiContainer,
  Grid
} from "@material-ui/core"
import styled from "styled-components"

const StyGrid = styled(Grid)`
  height: 100vh;
`

function Container({children}) {

  return (
    <MuiContainer maxWidth="lg">
      <StyGrid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {children}
      </StyGrid>
    </MuiContainer>
  )
}

export default Container
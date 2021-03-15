import React from "react"
import LinkButton from "./LinkButton"
import {
  Web,
  Twitter,
  GitHub
} from "@material-ui/icons"
import {Grid} from "@material-ui/core"
import styled from "styled-components"

const StyGridContainer = styled(Grid)`
  width: 100%;
`

function Footer() {

  return (
    <StyGridContainer
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <LinkButton
        text="Website"
        icon={Web}
        link="https://NotBaldrick.com"
      />
      <LinkButton
        text="Twitter"
        icon={Twitter}
        link="https://twitter.com/NotBaldrick"
      />
      <LinkButton
        text="GitHub"
        icon={GitHub}
        link="https://github.com/NotBaldrick"
      />
    </StyGridContainer>
  )
}

export default Footer
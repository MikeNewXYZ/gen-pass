import React from "react"
import {Typography} from "@material-ui/core"
import styled from "styled-components"

const StyTypography = styled(Typography)`
  width: 100%;
  padding: 2px 5px;
`

function InputLabel({children}) {

  return (
    <StyTypography
      variant="h6"
      align="left"
    >
      {children}
    </StyTypography>
  )
}

export default InputLabel
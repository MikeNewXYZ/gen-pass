import React from "react"
import {
  Typography,
  useMediaQuery
} from "@material-ui/core"
import {useTheme} from "@material-ui/core/styles"
import styled from "styled-components"

const StyTypography = styled(Typography)`
  width: 100%;
  padding: 0px 5px;
  padding-top: 5px;
  font-size: ${p => p.$fontSize};
  color: ${p => p.$fontColor};
`

function InputHelperText({children, ...props}) {

  const {fontColor} = props

  const theme = useTheme()
  const matchUpSM = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <StyTypography
      align="left"
      $fontSize={matchUpSM ? "20px" : "15px"}
      $fontColor={fontColor}
    >
      {children}
    </StyTypography>
  )
}

export default InputHelperText
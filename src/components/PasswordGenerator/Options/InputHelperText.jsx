import React from "react"
import {Typography} from "@material-ui/core"
import styled from "styled-components"
import {ReactFitty} from "react-fitty"
import {
  useSpring,
  animated,
  config
} from "react-spring"

const StyTypography = styled(Typography)`
  width: 100%;
  padding: 0px 5px;
  padding-top: 5px;
  color: ${p => p.$fontColor};
`
const AnimatedStyTypography = animated(StyTypography)

function InputHelperText({children, ...props}) {

  const {fontColor} = props

  const sprTypography = useSpring({
    color: fontColor ? fontColor : "inherit",
    config: {...config.stiff}
  })

  return (
    <AnimatedStyTypography
      align="left"
      style={sprTypography}
      component="div"
    >
      <ReactFitty 
        minSize={14}
        maxSize={24}
        wrapText
      >
        {children}
      </ReactFitty>
    </AnimatedStyTypography>
  )
}

export default InputHelperText
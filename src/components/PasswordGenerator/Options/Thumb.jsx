import React from "react"
import {
  useSpring,
  animated,
  config
} from "react-spring"
import styled from "styled-components"

const AnimatedStySpan = styled(animated.span)`
  width: 20px;
  height: 20px;
  margin-left: -10px;
  box-shadow: none !important;
`

const stateSprThumb = {
  idle: {
    transform: "scale(1)",
    config: {...config.wobbly}
  },
  hover: {
    transform: "scale(1.1)"
  }
}

function Thumb(props) {

  const [sprThumb, setSprThumb] = useSpring(() => ({...stateSprThumb.idle}))

  return (
    <AnimatedStySpan
      {...props}
      style={{...props.style,...sprThumb}}
      onMouseEnter={() => setSprThumb({...stateSprThumb.hover})}
      onMouseLeave={() => setSprThumb({...stateSprThumb.idle})}
    >
    </AnimatedStySpan>
  )
}

export default Thumb
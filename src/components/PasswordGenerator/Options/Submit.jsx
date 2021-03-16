import React, {useState} from "react"
import {
  Button,
  Typography
} from "@material-ui/core"
import {
  useSpring,
  animated,
  config
} from "react-spring"

const AnimatedButton = animated(Button)

function Submit({...props}) {

  const {text} = props

  const [hover, setHover] = useState(false)

  const sprButton = useSpring({
    transform: hover ? "scale(1.02)" : "scale(1)",
    config: {...config.wobbly}
  })

  return (
    <AnimatedButton
      fullWidth
      variant="contained"
      color="secondary"
      style={sprButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography variant="h3">
        {text}
      </Typography>
    </AnimatedButton>
  )
}

export default Submit
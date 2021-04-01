import React from "react"
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper
} from "@material-ui/core"
import {FileCopy} from "@material-ui/icons"
import styled from "styled-components"
import {
  useSpring,
  animated,
  config
} from "react-spring"
import wait from "wait"

const StyTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border: none;
    }
  }

  
`

const StyIconButton = styled(IconButton)`
  padding: 0px;
`
const AnimatedStyIconButton = animated(StyIconButton)

function PasswordDisplay({...props}) {

  const {password} = props

  const [sprIconButton, setSprIconButton] = useSpring(() => ({
    transform: "scale(1)",
    config: {...config.wobbly}
  }))

  async function handleClick() {
    navigator.clipboard.writeText(password)
    
    setSprIconButton({transform: "scale(0.8)"})
    await wait(300)
    setSprIconButton({transform: "scale(1)"})
  }

  function handleEnter() {
    setSprIconButton({transform: "scale(1.2)"})
  }

  function handleLeave() {
    setSprIconButton({transform: "scale(1)"})
  }


  return (
    <Paper variant="outlined">
      <StyTextField
        fullWidth
        color="secondary"
        size="medium"
        variant="outlined"
        value={password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AnimatedStyIconButton
                disableFocusRipple
                disableTouchRipple
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={handleClick}
                style={sprIconButton}
              >
                <FileCopy color="action"/>
              </AnimatedStyIconButton>
            </InputAdornment>
          )
        }}
      />
    </Paper>
  )
  
}

export default PasswordDisplay
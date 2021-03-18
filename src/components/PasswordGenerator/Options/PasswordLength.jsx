import React, {useState} from "react"
import {Slider} from "@material-ui/core"
import InputLabel from "./InputLabel"
import InputContainer from "./InputContainer"
import InputHelperText from "./InputHelperText"
import styled from "styled-components"
import Thumb from "./Thumb"

const StySlider = styled(Slider)`
  height: 10px;
  
  .MuiSlider-rail {
    height: 10px;
    border-radius: 5px;
  }
  .MuiSlider-track {
    height: 10px;
    border-radius: 5px;
  }
  .MuiSlider-valueLabel {
    left: calc(-50% - -4px);
  }
`

function PasswordLength() {

  const [value, setValue] = useState(64)

  return (
    <InputContainer
      marginTop="10px"
      marginBottom="20px"
    >
      <InputLabel>
        Password Length
      </InputLabel>
      <StySlider
        min={1}
        max={240}
        valueLabelDisplay="auto"
        value={value}
        onChange={(e, value) => setValue(value)}
        ThumbComponent={Thumb}
      />
      <InputHelperText>
        The longer the password the better
      </InputHelperText>
    </InputContainer>
  )
}

export default PasswordLength
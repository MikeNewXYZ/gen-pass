import React, {useEffect, useState} from "react"
import {Slider} from "@material-ui/core"
import InputLabel from "./InputLabel"
import InputContainer from "./InputContainer"
import InputHelperText from "./InputHelperText"
import styled from "styled-components"
import Thumb from "./Thumb"
import {
  useCurrentOptions,
  useNewOptions
} from "../../../context/OptionsContext"
import {useSetColors} from "../../../context/BackgroundContext"
import {
  useSpring,
  animated,
  config
} from "react-spring"

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

  const {passwordLength} = useCurrentOptions()
  const newOptions = useNewOptions()
  const setColors = useSetColors()

  const [value, setValue] = useState(64)

  const sprSliderColor = useSpring({
    color: passwordLength.color.slider,
    config: {...config.slow}
  })

  useEffect(() => {
    setColors([
      passwordLength.color.background.color1,
      passwordLength.color.background.color2
    ])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordLength])

  return (
    <InputContainer
      marginTop="10px"
      marginBottom="20px"
    >
      <InputLabel>
        Password Length
      </InputLabel>
      <animated.div style={sprSliderColor}>
        <StySlider
          min={1}
          max={120}
          valueLabelDisplay="auto"
          value={value}
          onChange={(e, value) => setValue(value)}
          onChangeCommitted={(e, value) => newOptions("passwordLength", value)}
          ThumbComponent={Thumb}
          style={{color: "inherit"}}
        />
      </animated.div>
      <InputHelperText>
        {passwordLength.helperText ||
          "The longer the password the better."}
      </InputHelperText>
    </InputContainer>
  )
}

export default PasswordLength
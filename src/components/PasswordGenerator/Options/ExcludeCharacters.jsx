import React, {useState, useEffect} from "react"
import {TextField} from "@material-ui/core"
import styled from "styled-components"
import {useTheme} from "@material-ui/core/styles"
import InputLabel from "./InputLabel"
import InputContainer from "./InputContainer"
import InputHelperText from "./InputHelperText"
import {
  useSpring,
  animated,
  config
} from "react-spring"
import {
  useCurrentOptions,
  useNewOptions
} from "../../../context/OptionsContext"

const StyTextField = styled(TextField)`
  border-radius: 5px;
  color: black;
  
  background-color: ${p => p.$backgroundColor};
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiOutlinedInput-input {
    font-size: 24px;
    padding: 14px 14px;
  }
`
const AnimatedStyTextField = animated(StyTextField)

function ExcludeCharacters() {

  const theme = useTheme()
  const currentOptions = useCurrentOptions()
  const newOptions = useNewOptions()

  const [value, setValue] = useState("")
  const [hover, setHover] = useState(false)
  const [focus, setFocus] = useState(false)

  const [sprTextField, setSprTextField] = useSpring(() => ({
    boxShadow: theme.shadows[1],
    config: {...config.wobbly}
  }))

  useEffect(() => {
    if (focus) {
      setSprTextField({boxShadow: theme.shadows[10]})
    }
    if (!focus) {
      if (hover) {
        setSprTextField({boxShadow: theme.shadows[5]})
      } else if (!hover) {
        setSprTextField({boxShadow: theme.shadows[1]})
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hover, focus])

  useEffect(() => {
    newOptions("excludeCharacters", value.split(","))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <InputContainer
      marginTop="10px"
      marginBottom="20px"
    >
      <InputLabel>
        Exclude Characters
      </InputLabel>
      <AnimatedStyTextField
        fullWidth
        variant="outlined"
        placeholder="example: e,&,9,3,p"
        $backgroundColor={theme.palette.grey[400]}
        style={sprTextField}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputHelperText
        fontColor={currentOptions.excludeCharacters.color.text}
      >
        {currentOptions.excludeCharacters.helperText ||
          "Separate each character with a comma"}
      </InputHelperText>
    </InputContainer>
  )
}

export default ExcludeCharacters
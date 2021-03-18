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

function ExcludedCharacters() {

  const theme = useTheme()

  const [value, setValue] = useState("")
  const [helperText, setHelperText] = useState("Separate each character with a comma")
  const [helperTextColor, setHelperTextColor] = useState(theme.palette.text.primary)
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
    const valueArray = value.split(",")

    function checkIfValueIsValid() {
      if (valueArray.find((e) => e.length > 1)) {
        setHelperText("There can't be more than one character between each comma")
        setHelperTextColor(theme.palette.error.main)
        return;
      }

      setHelperText("Separate each character with a comma")
      setHelperTextColor(theme.palette.text.primary)
      return;
    }
    checkIfValueIsValid()

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
        fontColor={helperTextColor}
      >
        {helperText}
      </InputHelperText>
    </InputContainer>
  )
}

export default ExcludedCharacters
import React from "react"
import {TextField} from "@material-ui/core"
import styled from "styled-components"
import {useTheme} from "@material-ui/core/styles"
import InputLabel from "./InputLabel"
import InputContainer from "./InputContainer"
import InputHelperText from "./InputHelperText"

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

function ExcludedCharacters() {

  const theme = useTheme()

  return (
    <InputContainer
      marginTop="10px"
      marginBottom="20px"
    >
      <InputLabel>
        Excluded Characters
      </InputLabel>
      <StyTextField
        fullWidth
        variant="outlined"
        placeholder="example: e,&,9,3,p"
        $backgroundColor={theme.palette.grey[400]}
      />
      <InputHelperText>
        Separate each character with a comma
      </InputHelperText>
    </InputContainer>
  )
}

export default ExcludedCharacters
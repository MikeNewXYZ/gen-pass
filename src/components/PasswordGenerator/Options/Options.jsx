import React from "react"
import {Grid} from "@material-ui/core"
import Submit from "./Submit"
import ExcludedCharacters from "./ExcludeCharacters"
import PasswordLength from "./PasswordLength"

function Options() {

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <PasswordLength />
      <ExcludedCharacters />
      <Submit text="Generate"/>
    </Grid>
  )
}

export default Options
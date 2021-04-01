import React, {Fragment, useState} from "react"
import {Grid} from "@material-ui/core"
import Submit from "./Submit"
import ExcludeCharacters from "./ExcludeCharacters"
import PasswordLength from "./PasswordLength"
import GeneratedPasswordModal from "../../GeneratedPassword/GeneratedPasswordModal"
import {useCurrentOptions} from "../../../context/OptionsContext"

function Options() {

  const currentOptions = useCurrentOptions()

  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <PasswordLength/>
        <ExcludeCharacters/>
        <Submit 
          text="Generate"
          click={() => setOpen(true)}
          disabled={currentOptions.excludeCharacters.error}
        />
      </Grid>
      <GeneratedPasswordModal
        open={open}
        close={() => setOpen(false)}
      />
    </Fragment>
  )
}

export default Options
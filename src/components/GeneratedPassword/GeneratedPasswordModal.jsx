import React, {useState, useEffect} from "react"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography
} from "@material-ui/core"
import {ReactFitty} from "react-fitty"
import PasswordDisplay from "./PasswordDisplay"
import {useCurrentOptions} from "../../context/OptionsContext"
import generatePassword from "../../helpers/generatePassword.js"

function GeneratedPasswordModal({...props}) {

  const {open, close} = props

  const currentOptions = useCurrentOptions()

  const [password, setPassword] = useState("34v89n048nc923ydsijfio2x1n89xn8921")

  useEffect(() => {
    if (open) {
      setPassword(generatePassword(
        currentOptions.passwordLength.data,
        currentOptions.excludeCharacters.data
      ))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog
      open={open}
      onBackdropClick={close}
      maxWidth="md"
    >
      {/* HEADER */}
      <DialogTitle 
        disableTypography
        style={{paddingBottom: "0px"}}
      >
        <Typography 
          variant="h2"
          align="center"
        >
          <ReactFitty
            minSize={20}
            maxSize={72}
          >
            Generated Password
          </ReactFitty>
        </Typography>
      </DialogTitle>
      {/* PASSWORD */}
      <DialogContent style={{padding: "8px 20px"}}>
        <PasswordDisplay password={password} />
      </DialogContent>
      {/* BUTTON */}
      <DialogActions>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          size="large"
          onClick={close}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default GeneratedPasswordModal
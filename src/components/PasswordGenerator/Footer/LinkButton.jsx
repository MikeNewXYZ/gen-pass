import React from "react"
import {
  Button,
  Typography
} from "@material-ui/core"


function LinkButton({...props}) {

  const {text, icon, link} = props

  return (
    <Button
      startIcon={<icon.type style={{fontSize: "30px"}}/>}
      href={link}
      target="_blank"
    >
      <Typography
        variant="h6"
      >
        {text}
      </Typography>
    </Button>
  )
}

export default LinkButton
import React from "react"
import {
  Button,
  Typography,
  useMediaQuery
} from "@material-ui/core"


function LinkButton({...props}) {

  const {text, icon, link} = props

  const matchUp450 = useMediaQuery("(min-width: 450px)")

  return (
    <Button
      startIcon={<icon.type style={{
        fontSize: matchUp450 ? "30px" : "20px",
        marginRight: matchUp450 ? "0px" : "-4px"
      }}/>}
      href={link}
      target="_blank"
      style={{padding: matchUp450 ? "6px 8px" : "6px 2px"}}
    >
      <Typography
        variant={matchUp450 ? "h6" : "button"}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default LinkButton
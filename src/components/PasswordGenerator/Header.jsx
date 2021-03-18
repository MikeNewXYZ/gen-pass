import React from "react"
import {Typography} from "@material-ui/core"
import {ReactFitty} from "react-fitty"

function Header({children}) {

  return (
    <Typography
      align="center"
      color="textPrimary"
      component="div"
      style={{width: "100%"}}
    >
      <ReactFitty
        minSize={20}
        maxSize={72}
      >
        {children}
      </ReactFitty>
    </Typography>
  )
}

export default Header
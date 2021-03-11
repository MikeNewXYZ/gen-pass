import React, {useState, useEffect} from "react"
import {
  Typography,
  useMediaQuery
} from "@material-ui/core"
import {useTheme} from "@material-ui/core/styles"


function Header({children}) {

  const theme = useTheme()
  const matchUpMD = useMediaQuery(theme.breakpoints.up("md"))
  const matchUpSM = useMediaQuery(theme.breakpoints.up("sm"))
  const matchUp365 = useMediaQuery("@media (min-width:365px)")

  const [variant, setVariant] = useState("h1")

  useEffect(() => {

    // IF screen width is larger than "md"
    // breakpoint set "variant" to "h1"
    if (matchUpMD) {
      setVariant("h1")
    }

    // IF screen width is smaller than "md"
    // breakpoint but also larger than "sm"
    // breakpoint set "variant" to "h2"
    if (!matchUpMD && matchUpSM) {
      setVariant("h2")
    }

    // IF screen width is smaller than "sm"
    // breakpoint but also larger than 365px
    // set "variant" to "h3"
    if (!matchUpSM && matchUp365) {
      setVariant("h3")
    }

    // IF screen width is smaller than 365px
    // set "variant" to "h4"
    if (!matchUp365) {
      setVariant("h4")
    }

  }, [matchUpMD, matchUpSM, matchUp365])

  return (
    <Typography
      align="center"
      color="textPrimary"
      variant={variant}
    >
      {children}
    </Typography>
  )
}

export default Header
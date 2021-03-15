import React from "react"
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(66,165,245)",
      main: "rgb(30,136,229)",
      dark: "rgb(13,71,161)",
      contrastText: "rgb(245,245,245)"
    },
    secondary: {
      light: "rgb(236,64,122)",
      main: "rgb(216,27,96)",
      dark: "rgb(136,14,79)",
      contrastText: "rgb(245,245,245)"
    },
    error: {
      light: "rgb(239,83,80)",
      main: "rgb(229,57,53)",
      dark: "rgb(183,28,28)",
      contrastText: "rgb(245,245,245)"
    },
    warning: {
      light: "rgb(255,112,67)",
      main: "rgb(244,81,30)",
      dark: "rgb(191,54,12)",
      contrastText: "rgb(245,245,245)"
    },
    info: {
      light: "rgb(41,182,246)",
      main: "rgb(3,155,229)",
      dark: "rgb(1,87,155)",
      contrastText: "rgb(33,33,33)"
    },
    success: {
      light: "rgb(102,187,106)",
      main: "rgb(67,160,71)",
      dark: "rgb(27,94,32)",
      contrastText: "rgb(245,245,245)"
    },
    background: {
      paper: "rgb(245,245,245)",
      default: "rgb(245,245,245)"
    }
  }
})

theme = responsiveFontSizes(theme)

function GlobalTheme({children}) {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default GlobalTheme
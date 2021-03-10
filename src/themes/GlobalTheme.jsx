import React from "react"
import {
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3498db",
      main: "#2980b9",
      contrastText: "#ecf0f1"
    },
    secondary: {
      light: "#34495e",
      main: "#2c3e50",
      contrastText: "#ecf0f1"
    },
    error: {
      light: "#e74c3c",
      main: "#c0392b",
      contrastText: "#ecf0f1"
    },
    warning: {
      light: "#e67e22",
      main: "#d35400",
      contrastText: "#ecf0f1"
    },
    info: {
      light: "#95a5a6",
      main: "#7f8c8d",
      contrastText: "#212121"
    },
    success: {
      light: "#2ecc71",
      main: "#27ae60",
      contrastText: "#ecf0f1"
    },
    background: {
      paper: "#bdc3c7",
      default: "#ecf0f1"
    }
  }
})

function GlobalTheme({children}) {

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default GlobalTheme
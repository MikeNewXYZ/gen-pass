import React from "react"
import Home from "./pages/Home"
import GlobalTheme from "./themes/GlobalTheme"
import {CssBaseline} from "@material-ui/core"

function App() {

  return (
    <GlobalTheme>
      <CssBaseline />
      <Home />
    </GlobalTheme>
  )
}

export default App
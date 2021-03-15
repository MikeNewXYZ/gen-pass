import React from "react"
import Home from "./pages/Home"
import GlobalTheme from "./themes/GlobalTheme"
import {CssBaseline} from "@material-ui/core"
import ContextWrapper from "./context/ContextWrapper"


function App() {

  return (
    <ContextWrapper>
      <GlobalTheme>
        <CssBaseline />
        <Home />
      </GlobalTheme>
    </ContextWrapper>
  )
}

export default App
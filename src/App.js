import React from "react"
import Home from "./pages/Home"
import GlobalTheme from "./themes/GlobalTheme"
import {CssBaseline} from "@material-ui/core"
import ContextWrapper from "./context/ContextWrapper"


function App() {

  return (
    <GlobalTheme>
      <ContextWrapper>
        <CssBaseline />
        <Home />
      </ContextWrapper>
    </GlobalTheme>
  )
}

export default App
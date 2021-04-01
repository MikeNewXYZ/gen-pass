import React from "react"
import BackgroundProvider from "./BackgroundContext"
import OptionsProvider from "./OptionsContext"

function ContextWrapper({children}) {

  return (
    <OptionsProvider>
      <BackgroundProvider>
        {children}
      </BackgroundProvider>
    </OptionsProvider>
  )
}

export default ContextWrapper
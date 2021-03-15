import React from "react"
import BackgroundProvider from "./BackgroundContext"

function ContextWrapper({children}) {

  return (
    <BackgroundProvider>
      {children}
    </BackgroundProvider>
  )
}

export default ContextWrapper
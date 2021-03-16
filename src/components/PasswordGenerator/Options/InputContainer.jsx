import React from "react"
import styled from "styled-components"

const StyDivContainer = styled.div`
  margin-top: ${p => p.$marginTop};
  margin-bottom: ${p => p.$marginBottom};
  width: 100%;
`

function InputContainer({children, ...props}) {

  const {marginTop, marginBottom} = props

  return (
    <StyDivContainer
      $marginTop={marginTop}
      $marginBottom={marginBottom}
    >
      {children}
    </StyDivContainer>
  )
}

export default InputContainer
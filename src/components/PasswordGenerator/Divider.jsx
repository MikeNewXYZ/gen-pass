import React from "react"
import styled from "styled-components"

const StyHr = styled.hr`
  border: none;
  width: 100%;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.10);
`

function Divider() {

  return <StyHr />
}

export default Divider
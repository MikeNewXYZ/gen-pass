import React from "react"
import Container from "../components/PasswordGenerator/Container"
import Platform from "../components/PasswordGenerator/Platform"
import Header from "../components/PasswordGenerator/Header"
import Divider from "../components/PasswordGenerator/Divider"
import Footer from "../components/PasswordGenerator/Footer/Footer"

function PasswordGenerator() {

  return (
    <Container>
      <Platform>
        <Header>
          Password Generator
        </Header>
        <Divider />
        <p>PasswordGenerator</p>
        <Divider />
        <Footer />
      </Platform>
    </Container>
  )
}

export default PasswordGenerator
import React from "react"
import Container from "../components/PasswordGenerator/Container"
import Platform from "../components/PasswordGenerator/Platform"
import Header from "../components/PasswordGenerator/Header"
import Divider from "../components/PasswordGenerator/Divider"
import Footer from "../components/PasswordGenerator/Footer/Footer"
import Options from "../components/PasswordGenerator/Options/Options"

function PasswordGenerator() {

  return (
    <Container>
      <Platform>
        <Header>
          GenPass
        </Header>
        <Divider />
        <Options />
        <Divider />
        <Footer />
      </Platform>
    </Container>
  )
}

export default PasswordGenerator
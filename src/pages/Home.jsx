import React, {useEffect, Fragment} from "react"
import PasswordGenerator from "../layouts/PasswordGenerator"
import {useSetColors} from "../context/BackgroundContext"
import {Helmet} from "react-helmet"
import {useTheme} from "@material-ui/core/styles"
import Particles from "../components/Background/Particles"
import wait from "wait"

function Home(){

  const setColors = useSetColors()
  const theme = useTheme()
  

  useEffect(() => {

    const primary = theme.palette.primary

    async function changeGradient() {
      
      setColors([
        "rgb(236, 240, 241)",
        "rgb(189, 195, 199)"
      ])
      await wait(1000)
      setColors([
        primary.light,
        primary.dark
      ])
    }
    changeGradient()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <PasswordGenerator />
      <Particles />
      <Helmet>
        <style>{`
          body {
            height: 100vh;
          }
        `}</style>
      </Helmet>
    </Fragment>
  )
}

export default Home
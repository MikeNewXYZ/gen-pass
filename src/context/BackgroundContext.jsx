import React, {useContext, useEffect, useState} from "react"
import {useSpring} from "react-spring"

const SetColorsContext = React.createContext()

export const useSetColors = () => useContext(SetColorsContext)

export default function BackgroundProvider({children}) {

  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [windowSize, setWindowSize] = useState({x: null, y: null})
  const [init, setInit] = useState(true)
  const [colors, setColors] = useState(null)
  const [position, setPosition] = useState({x: "50%", y: "50%"})

  const [,setSprBackground] = useSpring(() => ({}))

  useEffect(() => {
    if (!init) {
      setSprBackground({
        background: `
          radial-gradient(
            circle at ${position.x} ${position.y},
            ${colors.join(",")}
          )
        `,
        config: {
          mass: 50,
          tension: 50,
          friction: 100
        },
        onFrame: ({background}) => {
          if (background) {
            document.body.style.background = background
          }
        }
      })
    } else {
      setInit(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, position])

  useEffect(() => {

    function checkNull() {
      if (!mousePosition.x) {
        return false
      }
      if (!mousePosition.y) {
        return false
      }
      if (!windowSize.x) {
        return false
      }
      if (!windowSize.y) {
        return false
      }
      return true
    }

    const allValuesAreNumber = checkNull()

    if (allValuesAreNumber) {
      setPosition({
        x: (mousePosition.x / windowSize.x) * 100,
        y: (mousePosition.y / windowSize.y) * 100
      })
    }

  }, [mousePosition, windowSize])

  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  const updateWindowSize = (event) => {
    setWindowSize({
      x: event.target.innerWidth,
      y: event.target.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("resize", updateWindowSize)

    setWindowSize({
      x: window.innerWidth,
      y: window.innerHeight
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("resize", updateWindowSize)
    }
  }, [])

  return (
    <SetColorsContext.Provider value={setColors}>
      {children}
    </SetColorsContext.Provider>
  )
}
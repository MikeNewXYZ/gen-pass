import React from "react"
import {Particles as ReactParticles} from "react-tsparticles"
import {useSpring, animated} from "react-spring"

function Particles() {

  const spring = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {
      mass: 50,
      tension: 50,
      friction: 100
    }
  })

  return (
    <animated.div style={spring}>
      <ReactParticles
        style={{filter: "blur(2px)"}}
        id="tsparticles"
        options={{
          autoPlay: true,
          fpsLimit: 60,
          pauseOnBlur: false,
          fullScreen: {
            enable: true
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 1,
                speed: 0.05
              }
            }
          },
          particles: {
            move: {
              enable: true,
              random: true,
              speed: 1
            },
            number: {
              value: 20,
              limit: 50,
              density: {
                enable: true,
                area: 1500
              }
            },
            shape: {
              type: "character",
              options: {
                character: {
                  value: "a4865g894585B8989UNfgiuiuj&*&&$%%iunh".split(""),
                  font: "Roboto",
                  weight: "400",
                  style: ""
                }
              }
            },
            size: {
              value: 150,
              random: {
                enable: true,
                minimumValue: 10
              }
            },
            rotate: {
              random: true,
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            opacity: {
              value: 0.7,
              random: {
                enable: true,
                minimumValue: 0.5
              }
            }
          }
        }}
      />
    </animated.div>
  )
}

export default Particles
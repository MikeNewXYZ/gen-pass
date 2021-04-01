import React, {useContext, useState, useEffect} from "react"
import {useTheme} from "@material-ui/core/styles"

const CurrentOptionsContext = React.createContext()
const NewOptionsContext = React.createContext()

export const useCurrentOptions = () => useContext(CurrentOptionsContext)
export const useNewOptions = () => useContext(NewOptionsContext)

export default function OptionsProvider({children}) {

  const theme = useTheme()

  const [options, setOptions] = useState({
    passwordLength: {
      data: 64,
      helperText: null,
      color: {
        background: {
          color1: theme.palette.primary.light,
          color2: theme.palette.primary.dark
        },
        slider: theme.palette.primary.main
      }
    },
    excludeCharacters: {
      data: [],
      helperText: null,
      color: {
        text: theme.palette.text.primary
      },
      error: false
    }
  })

  useEffect(() => {
    const data = options.passwordLength.data

    if (data <= 12) {
      setOptions((prev) => ({
        ...prev,
        passwordLength: {
          ...prev.passwordLength,
          helperText: "A password this short can be easily cracked.",
          color: {
            background: {
              color1: theme.palette.error.light,
              color2: theme.palette.error.dark
            },
            slider: theme.palette.error.main
          }
        }
      }))
    }

    if (data > 12 && data <= 32) {
      setOptions((prev) => ({
        ...prev,
        passwordLength: {
          ...prev.passwordLength,
          helperText: "Consider making the password longer for better security.",
          color: {
            background: {
              color1: theme.palette.warning.light,
              color2: theme.palette.warning.dark
            },
            slider: theme.palette.warning.main
          }
        }
      }))
    }

    if (data > 32 && data <= 64) {
      setOptions((prev) => ({
        ...prev,
        passwordLength: {
          ...prev.passwordLength,
          helperText: "Fantastic! A computer is gonna struggle to crack this.",
          color: {
            background: {
              color1: theme.palette.primary.light,
              color2: theme.palette.primary.dark
            },
            slider: theme.palette.primary.main
          }
        }
      }))
    }

    if (data > 64) {
      setOptions((prev) => ({
        ...prev,
        passwordLength: {
          ...prev.passwordLength,
          helperText: "Might need a password manager for something this big 🍆.",
          color: {
            background: {
              color1: theme.palette.success.light,
              color2: theme.palette.success.dark
            },
            slider: theme.palette.success.main
          }
        }
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.passwordLength.data])

  useEffect(() => {
    const data = options.excludeCharacters.data

    function checkIfValueIsValid() {
      if (data.find((e) => e.length > 1)) {
        setOptions((prev) => ({
          ...prev,
          excludeCharacters: {
            ...prev.excludeCharacters,
            helperText: "There can't be more than one character between each comma",
            color: {
              text: theme.palette.error.main
            },
            error: true
          }
        }))
        return;
      }
      setOptions((prev) => ({
        ...prev,
        excludeCharacters: {
          ...prev.excludeCharacters,
          helperText: "Separate each character with a comma",
          color: {
            text: theme.palette.text.primary
          },
          error: false
        }
      }))
      return;
    }
    checkIfValueIsValid()


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.excludeCharacters.data])

  function setNewOptions(type, data) {
    const typesArray = ["passwordLength", "excludeCharacters"]

    if (typesArray.filter(word => word === type).length === 0) {
      throw new Error(`${type} is not a correct type.`)
    }

    setOptions((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        data: data
      }
    }))
  }

  return (
    <CurrentOptionsContext.Provider value={options}>
      <NewOptionsContext.Provider value={setNewOptions}>
        {children}
      </NewOptionsContext.Provider>
    </CurrentOptionsContext.Provider>
  )
}
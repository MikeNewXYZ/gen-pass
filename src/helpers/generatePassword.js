
const numbers = ["0","1","2","3","4","5","6","7","8","9"]

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const specials = ["@","<",">","_","-","/","!","?","*","&","^","%","£"]

const all = numbers.concat(letters).concat(specials)

export default function generatePassword(length, exclude) {
  let password = ""

  for (let i = 0; i < length; i++) {
    let randomCharacter;

    function genRandom() {
      randomCharacter = all[Math.floor(Math.random() * all.length)]
      if (Math.random() > 0.5) randomCharacter.toUpperCase()
    }
    genRandom()

    // eslint-disable-next-line no-loop-func
    while(exclude.filter((char) => char === randomCharacter).length !== 0) {
      genRandom()
    }

    password = password + randomCharacter
  }


  return password
}
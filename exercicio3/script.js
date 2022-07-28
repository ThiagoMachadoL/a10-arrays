const number = [1,3,7]
const numberCopia = number.slice() 
numberCopia.push(9)
console.log(number) 
console.log(numberCopia) 

const strings = ['carro', 'moto', 'bicicleta']
const stringsCopia = strings.slice()
stringsCopia.pop()
console.log(strings)
console.log(stringsCopia)


const misto = [27, 'spfc', 7>10]
const mistoCopia = misto.slice()
mistoCopia.splice(1,1)
console.log(misto)
console.log(mistoCopia)

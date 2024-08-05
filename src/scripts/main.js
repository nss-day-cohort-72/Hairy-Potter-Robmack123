// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 1, 2)
const plate = makePottery("Plate", 1, 4)
const vase = makePottery("Vase", 4, 32)
const cup = makePottery("Cup", 1, 7)
const jar = makePottery("Jar", 3, 63)



// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedPlate = firePottery(plate, 2301) 
const firedVase = firePottery(vase, 2194)
const firedCup = firePottery(cup, 2287)
const firedJar = firePottery(jar, 2055)
console.log(firedMug)
console.log(firedPlate)
console.log(firedVase)
console.log(firedCup)
console.log(firedJar)
// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list


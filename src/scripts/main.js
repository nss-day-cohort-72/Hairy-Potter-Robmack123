// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 12, 9)
const plate = makePottery("Plate", 6, 2)
const vase = makePottery("Vase", 5, 32)
const cup = makePottery("Cup", 6, 7)
const jar = makePottery("Jar", 22, 63)
const ornament = makePottery("Ornament", 2, 4)

// Fire each piece of pottery in the kiln
debugger
const firedMug = firePottery(mug, 2000)
const firedPlate = firePottery(plate, 2301) 
const firedVase = firePottery(vase, 2194)
const firedCup = firePottery(cup, 2287)
const firedJar = firePottery(jar, 2055)
const firedOrnament = firePottery(ornament, 1997)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedCup)
toSellOrNotToSell(firedJar)
toSellOrNotToSell(firedOrnament)

// Invoke the component function that renders the HTML list
const potteryHTML = potteryList();
document.querySelector('.potteryList').innerHTML = potteryHTML
// Import the usePottery function from the PotteryCatalog module
import { usePottery } from './PotteryCatalog.js';

// Define and export the PotteryList function
export const PotteryList = () => {
    // Get the array of pottery items to be sold
    const potteryItems = usePottery();
    
    // Map over each pottery item to create an HTML representation string
    const potteryHTML = potteryItems.map(pottery => {
        // Destructure properties from the pottery object
        const { shape, weight, height, price, id } = pottery;
        
        // Return an HTML representation string using the provided template
        return `
            <section class="pottery" id="pottery--${id}"><h2 class="pottery__shape">${shape}</h2><div class="pottery__properties">The ${shape} weighs ${weight} grams and is ${height} cm in height.</div><div class="pottery__price">Price is $${price}</div></section>
        `;
    }).join('')

    // Return the combined HTML string
    return potteryHTML;
};
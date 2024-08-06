import { usePottery } from './PotteryCatalog.js';

export const potteryList = () => {

    // Get the array of pottery items to be sold
    const potteryItems = usePottery();
    
    // Map over each pottery item to create an HTML representation string
    const potteryHTML = potteryItems.map(pottery => {
        const { shape, weight, height, price, id } = pottery;
        return `
            <section class="pottery" id="pottery--${id}">
                <h2 class="pottery__shape">${shape}</h2>
                <div class="pottery__properties">
                    The ${shape} weighs ${weight} grams and is ${height} cm in height.</div>
                <div class="pottery__price">Price is $${price}</div>
            </section>
        `;
    }).join("");

    return potteryHTML;
};
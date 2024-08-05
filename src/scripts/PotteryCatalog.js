const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
    // check to see if pottery is cracked
    if (pottery.cracked) {
        // if cracked returns to pottery
        return pottery;
    }
    // if not cracked checks weight of pottery
    if (pottery.weight >= 6) {
        pottery.price = 40;
    } else {
        pottery.price = 20;
    }
    // pushes pottery potteryToSell array
    potteryToSell.push(pottery);

    
}

export const usePottery = () => {
    return potteryToSell
}
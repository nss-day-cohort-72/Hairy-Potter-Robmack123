const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked) {
        return pottery;
    }

    if (pottery.weight >= 6) {
        pottery.price = "$ " + 40;
    } else {
        pottery.price = "$ " + 20;
    }

    potteryToSell.push(pottery);

    return pottery
}

export const usePottery = () => {
    return potteryToSell
}
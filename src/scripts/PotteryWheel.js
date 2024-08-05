let potteryPrimaryKey = 1 

// function to make pottery
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape, 
        weight: weight,
        height: height,
        id: potteryPrimaryKey,
    };
    potteryPrimaryKey += 1;

    return pottery
}

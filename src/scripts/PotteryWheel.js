let potteryPrimaryKey = 1 

export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape, 
        weight: weight + " lbs",
        height: height +  " inches",
        id: potteryPrimaryKey,
    };
    potteryPrimaryKey += 1;

    return pottery
}


// const potteryPrimaryKey = 1


// export const makePottery = (shape, weight, height) => {
//     const pottery = {
//         shape: "",
//         weight: "",
//         height: "",
//         id: potteryPrimaryKey,
//     };


//     potteryPrimaryKey += 1;


//     return pottery
// }

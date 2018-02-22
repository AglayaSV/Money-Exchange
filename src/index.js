// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchangeObg = {};
    if (currency >= 10001) {
        exchangeObg.error = "You are rich, my friend! We don't have so much coins for exchange";
        return exchangeObg;
    }
    if (currency === 0 || currency < 0) {
        return exchangeObg;
    }
    if (currency >= 50) {
        exchangeObg.H = (currency - currency % 50) / 50;//how many 50

    }
    let remain50 = currency % 50;
    if (remain50 >= 25) {
        exchangeObg.Q = (remain50 - remain50 % 25) / 25;// how many 25
    }
    let remain25 = remain50 % 25;

    if (remain25 >= 10) {
        exchangeObg.D = (remain25 - remain25 % 10) / 10;// how many 10


    }
    let remain10 = remain25 % 10;
    if (remain10 >= 5) {
        exchangeObg.N = (remain10 - remain10 % 5) / 5;// how many 5
    }

    let remain5 = remain10 % 5;

    if (remain5 >= 1) {
        exchangeObg.P = remain5 ;// how many 1

    }

    return exchangeObg;


}

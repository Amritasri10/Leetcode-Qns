/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
     let minPrice = prices[0]; 
     let maxProfit = 0;
     prices.forEach(price => {
        let profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, price);
     });
    return maxProfit;
};
[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ "Best Time to Buy and Sell Stock")

**Problem Description**
Given an array prices where prices[i] is the price of a given stock on the i-th day, find the maximum profit you can achieve from buying and selling a stock at most once.

**Approach**
We go through each price in the array, remembering the lowest price we've seen (minPrice) so far. When we encounter a price, we check if selling at that price would give us a higher profit than what we've seen (maxProfit) before. If it does, we update maxProfit.

**Solution**
```javascript
maxProfit(prices) {
        let minPrice = prices[0]; 
        let maxProfit = 0; 
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i]; 
            } else if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice; 
            }
        }
        return maxProfit;
    }
```

**Time Complexity**
This solution has a time complexity of O(n) because it iterates through the prices array once, and a space complexity of O(1) as it utilizes a constant amount of extra space.

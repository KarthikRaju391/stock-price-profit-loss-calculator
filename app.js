const initialPrice = document.querySelector('#initial-price-input');
const stockQuantity = document.querySelector('#quantity-input');
const currentPrice = document.querySelector('#current-price-input');
const checkBtn = document.querySelector('#check-button');
const outputEl = document.querySelector('#output-here');


function calculateProfitOrLoss(initial, final){
   if(initial === final) {
      outputEl.innerText = "No gain No pain"
   }
   if(initial > final){
      const loss = (initial - final).toFixed(2);
      const lossPercentage = ((loss/initial)*100).toFixed(2);
      outputEl.innerText = `Whoops!! Your loss is ${loss} and loss percentage is ${lossPercentage}% :/`
   }
   if(final > initial){
      const profit = (final - initial).toFixed(2);
      const profitPercentage = ((profit/initial)*100).toFixed(2);
      outputEl.innerText = `Yay!! Your profit is ${profit} and profit percentage is ${profitPercentage}% ;)`
   }
}

function showProfitOrLoss() {
   //calculate total initial price 
   const totalInitialPrice = (Number(initialPrice.value) * Number(stockQuantity.value)).toFixed(2);
   //calculate total current price
   const totalCurrentPrice = (Number(currentPrice.value) * Number(stockQuantity.value)).toFixed(2);
   //calculate profit or loss with percentage
   calculateProfitOrLoss(totalInitialPrice, totalCurrentPrice);

}

checkBtn.addEventListener('click', showProfitOrLoss);
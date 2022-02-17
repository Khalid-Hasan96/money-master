/* let monthlyIncome = document.getElementById('income-input');
let foodCost = document.getElementById('food-cost');
let homeCost = document.getElementById('home-cost');
let clothCost = document.getElementById('cloth-cost');
let calcButton = document.getElementById('calc-btn');
let totalExpenses = document.getElementById('total-expenses');
let remainingBalance = document.getElementById('remaining-balance');
let savingInput = document.getElementById('saving-input');
let savingButton = document.getElementById('saving-btn');
let savingAmount = document.getElementById('saving-amount');
let finalAmount = document.getElementById('final-amount'); */
//update total expenses
function totalExpenses() {
    let foodCost = document.getElementById('food-cost');
    let totalFoodCostText = foodCost.value;
    let totalFoodCost = parseFloat(totalFoodCostText);

    let homeCost = document.getElementById('home-cost');
    let totalHomeCostText = homeCost.value;
    let totalHomeCost = parseFloat(totalHomeCostText);

    let clothCost = document.getElementById('cloth-cost');
    let totalClothCosttext = clothCost.value;
    let totalClothCost = parseFloat(totalClothCosttext);

}


//update remaining balance
function getTotalExpenses() {
    let totalMonthlyIncome = document.getElementById('income-input');
    let monthlyIncomeText = totalMonthlyIncome.value;
    let monthlyIncome = parseFloat(monthlyIncomeText);
}

document.getElementById('calc-btn').addEventListener('click', function () {

    console.log(monthlyIncome);

    //calculate total expenses


    let totalExpenses = totalFoodCost + totalHomeCost + totalClothCost;

    //calculate remaining balance
    let remainingBalance = document.getElementById('remaining-balance');
    let previousremainingBalanceText = remainingBalance.innerText;
    let previousremainingBalance = parseFloat(previousremainingBalanceText);
    previousremainingBalance = totalExpenses;

    let totalremainingBalance = monthlyIncome - previousremainingBalance;

    remainingBalance.innerText = totalremainingBalance;




    //clear input field
    totalMonthlyIncome.value = '';
})
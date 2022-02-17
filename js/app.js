//calculate total expenses
document.getElementById('calc-btn').addEventListener('click', function () {
    let foodCost = document.getElementById('food-cost');
    let totalFoodCostText = foodCost.value;
    let totalFoodCost = parseFloat(totalFoodCostText);

    let homeCost = document.getElementById('home-cost');
    let totalHomeCostText = homeCost.value;
    let totalHomeCost = parseFloat(totalHomeCostText);

    let clothCost = document.getElementById('cloth-cost');
    let totalClothCosttext = clothCost.value;
    let totalClothCost = parseFloat(totalClothCosttext);

    //calculate total expenses
    let totalExpenses = document.getElementById('total-expenses');
    let totalExpensesText = totalExpenses.innerText;
    let calcTotalExpenses = parseFloat(totalExpensesText);
    calcTotalExpenses = totalFoodCost + totalHomeCost + totalClothCost;
    totalExpenses.innerText = calcTotalExpenses;

    //income input field
    let incomeInput = document.getElementById('income-input');
    let incomeInputText = incomeInput.value;
    let totalIncomeInput = parseFloat(incomeInputText);

    //calculate remaining balance
    let remainingBalance = document.getElementById('remaining-balance');
    let previousRemainingBalance = remainingBalance.innerText;
    let newRemainingBalance = parseFloat(previousRemainingBalance);
    newRemainingBalance = totalIncomeInput - calcTotalExpenses;
    remainingBalance.innerText = newRemainingBalance;


    //clearing input field after clicking calculate button
    foodCost.value = '';
    homeCost.value = '';
    clothCost.value = '';
    incomeInput.value = ''
});

//calculate saving amount
/* document.getElementById('saving-btn').addEventListener('click', function () {
    let savingInputField = document.getElementById('saving-input');
    let savingFieldText = savingInputField.value;
    let savingField = parseInt(savingFieldText);

    
    let savingAmount = document.getElementById('saving-amount');
    let savingAmountText = savingAmount.innerText;
    let newSavingAmount = parseFloat(savingAmountText);
    newSavingAmount = totalIncomeInput * (savingField / 100);
    console.log(newSavingAmount);
    // savingAmount.innerText = newSavingAmount;

}); */
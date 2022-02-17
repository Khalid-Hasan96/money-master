//monthly income input field
function totalIncome() {

    let incomeInput = document.getElementById('income-input');
    let incomeInputText = incomeInput.value;
    let totalIncomeInput = parseFloat(incomeInputText);
    if (isNaN(totalIncomeInput) || totalIncomeInput < 0) {
        incomeInput.value = '';
        return alert('Input valid number on Monthly Income');
    }
    return totalIncomeInput;
}
//calculate total expenses
function totalExpenses() {
    let foodCost = document.getElementById('food-cost');
    let totalFoodCostText = foodCost.value;
    let totalFoodCost = parseFloat(totalFoodCostText);
    if (isNaN(totalFoodCost) || totalFoodCost < 0) {
        foodCost.value = '';
        return alert('Input valid number on Food Cost');
    }

    let homeCost = document.getElementById('home-cost');
    let totalHomeCostText = homeCost.value;
    let totalHomeCost = parseFloat(totalHomeCostText);
    if (isNaN(totalHomeCost) || totalHomeCost < 0) {
        homeCost.value = '';
        return alert('Input valid number on Home Rent');
    }

    let clothCost = document.getElementById('cloth-cost');
    let totalClothCosttext = clothCost.value;
    let totalClothCost = parseFloat(totalClothCosttext);
    if (isNaN(totalClothCost) || totalClothCost < 0) {
        clothCost.value = '';
        return alert('Input valid number on Clothes Cost');
    }

    let totalExpenses = document.getElementById('total-expenses');
    let totalExpensesText = totalExpenses.innerText;
    let calcTotalExpenses = parseFloat(totalExpensesText);
    calcTotalExpenses = totalFoodCost + totalHomeCost + totalClothCost;
    if (calcTotalExpenses > totalIncome()) {
        return alert("You can't spend more than your income. Be careful next time.")
    }
    totalExpenses.innerText = calcTotalExpenses;


}
//calculate remaining balance
function remainingBalance() {
    let remainingBalance = document.getElementById('remaining-balance');
    let previousRemainingBalance = remainingBalance.innerText;
    let newRemainingBalance = parseFloat(previousRemainingBalance);
    newRemainingBalance = totalIncome() - totalExpenses();
    remainingBalance.innerText = newRemainingBalance;
    return newRemainingBalance;
}
//calculate saving+final amount
function savingAmount() {
    let savingInputField = document.getElementById('saving-input');
    let savingFieldText = savingInputField.value;
    let savingField = parseInt(savingFieldText);

    let savingAmount = document.getElementById('saving-amount');
    let savingAmountText = savingAmount.innerText;
    let newSavingAmount = parseFloat(savingAmountText);
    newSavingAmount = (totalIncome() * savingField) / 100;
    if (newSavingAmount > remainingBalance()) {
        savingAmount.innerText = '';
        return alert("Sorry! You can't save money this month")
    }
    savingAmount.innerText = newSavingAmount;

    let finalAmount = document.getElementById('final-amount');
    let finalAmountText = finalAmount.innerText;
    let totalFinalAmount = parseInt(finalAmountText);
    totalFinalAmount = remainingBalance() - newSavingAmount;
    finalAmount.innerText = totalFinalAmount;
    return totalFinalAmount;
}

//calculate total remaining balance
document.getElementById('calc-btn').addEventListener('click', function () {
    remainingBalance();
});


document.getElementById('saving-btn').addEventListener('click', function () {
    savingAmount();
});
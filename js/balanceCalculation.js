// Retrieve balance, deposit balance, and withdrawal balance from localStorage or set default values
let defaultBalance = localStorage.getItem('accountBalance');
if (defaultBalance === null) {
  defaultBalance = 125;
} else {
  defaultBalance = parseFloat(defaultBalance);
}

let defaultDepBalance = localStorage.getItem('depositBalance');
if (defaultDepBalance === null) {
  defaultDepBalance = 0;
} else {
  defaultDepBalance = parseFloat(defaultDepBalance);
}

let defaultWithBalance = localStorage.getItem('withdrawalBalance');
if (defaultWithBalance === null) {
  defaultWithBalance = 0;
} else {
  defaultWithBalance = parseFloat(defaultWithBalance);
}

// Display the initial balances on the page
document.querySelector("#balance").innerText = defaultBalance;
document.querySelector("#depbalance").textContent = defaultDepBalance;
document.querySelector("#withbalance").textContent = defaultWithBalance;



// Deposit Money - add this money to deposit and balance
let depositButton = document.querySelector("#depbalbtn");
let depositAmountInput = document.querySelector("#depositAmount");

const handleDeposit = () => {
  const depositAmount = Number(depositAmountInput.value);

  if (depositAmount > 0) {
    // Update the deposit balance
    defaultDepBalance += depositAmount;

    // Update the balance
    defaultBalance += depositAmount;

    // Update the display for deposit balance and total balance
    document.querySelector("#depbalance").textContent = defaultDepBalance;
    document.querySelector("#balance").innerText = defaultBalance;

    // Save the updated deposit balance and total balance to localStorage
    localStorage.setItem('depositBalance', defaultDepBalance);
    localStorage.setItem('accountBalance', defaultBalance);

    // Add the deposit transaction to the table
    const currentDate = new Date().toLocaleDateString();
    addTransactionRow(currentDate, "Deposit", depositAmount);

    // Clear the input field
    depositAmountInput.value = '';
  } else {
    alert("Please input an amount more than 0.");
    depositAmountInput.value = '';
  }
}

depositButton.addEventListener("click", function (event) {
  event.preventDefault();
  handleDeposit();
});

// Withdraw Money - subtract this money from balance
let withdrawButton = document.querySelector("#withbalbtn");
let withdrawAmountInput = document.querySelector("#withdrawAmount");

const handleWithdrawal = () => {
  const withdrawAmount = Number(withdrawAmountInput.value);

  if (withdrawAmount > 0 && withdrawAmount <= defaultBalance) {
    // Update the withdrawal balance
    defaultWithBalance += withdrawAmount;

    // Update the balance
    defaultBalance -= withdrawAmount;

    // Update the display for withdrawal balance and total balance
    document.querySelector("#withbalance").textContent = defaultWithBalance;
    document.querySelector("#balance").innerText = defaultBalance;

    // Save the updated withdrawal balance and total balance to localStorage
    localStorage.setItem('withdrawalBalance', defaultWithBalance);
    localStorage.setItem('accountBalance', defaultBalance);

    // Add the withdrawal transaction to the table
    const currentDate = new Date().toLocaleDateString();
    addTransactionRow(currentDate, "Withdrawal", withdrawAmount);

    // Clear the input field
    withdrawAmountInput.value = '';
  } else if (withdrawAmount <= 0) {
    alert("Please input an amount more than 0.");
    withdrawAmountInput.value = '';
  } else {
    alert("Insufficient balance.");
    withdrawAmountInput.value = '';
  }
}

withdrawButton.addEventListener("click", function (event) {
  event.preventDefault();
  handleWithdrawal();
});

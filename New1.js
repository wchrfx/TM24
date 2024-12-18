// Handle the navigation between sections
function toggleForms(formType) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (formType === 'login') {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  }
}

// Show the correct calculator or view dynamically
function showCalculatorView(calculatorId) {
  const calculators = document.querySelectorAll('.page-section');
  
  // Hide all sections first
  calculators.forEach(calc => {
    calc.classList.remove('active-section');
  });

  // Show only the selected one
  document.getElementById(calculatorId).classList.add('active-section');
}

// Automatically initialize the first visible section
window.onload = function() {
  showCalculatorView('position');
}

// Handle Position Size Calculator
function calculatePositionSize() {
  const accountBalance = parseFloat(document.getElementById('accountBalance').value);
  const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
  const stopLossPips = parseFloat(document.getElementById('stopLossPips').value);
  const pipValue = parseFloat(document.getElementById('pipValue').value);

  if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(stopLossPips) || isNaN(pipValue)) {
    alert("Please fill in all fields.");
    return;
  }

  const positionSize = (accountBalance * (riskPercentage / 100)) / (stopLossPips * pipValue);
  document.getElementById('positionSizeResult').innerText = `Position Size: ${positionSize.toFixed(2)}`;
}

// Handle Risk to Reward Ratio calculations
function calculateRiskReward() {
  const riskAmount = parseFloat(document.getElementById('riskAmount').value);
  const rewardAmount = parseFloat(document.getElementById('rewardAmount').value);

  if (isNaN(riskAmount) || isNaN(rewardAmount)) {
    alert("Please fill in both fields.");
    return;
  }

  const riskReward = rewardAmount / riskAmount;
  document.getElementById('riskRewardResult').innerText = `Risk-to-Reward Ratio: ${riskReward.toFixed(2)}`;
}

// Handle Pip Value Calculations
function calculatePipValue() {
  const currencyPairPrice = parseFloat(document.getElementById('currencyPairPrice').value);
  const positionSize = parseFloat(document.getElementById('positionSize').value);

  if (isNaN(currencyPairPrice) || isNaN(positionSize)) {
    alert("Please fill in both fields.");
    return;
  }

  const pipValue = (0.0001 / currencyPairPrice) * positionSize;
  document.getElementById('pipValueResult').innerText = `Pip Value: $${pipValue.toFixed(2)}`;
}

// Handle margin calculations
function calculateMargin() {
  const tradeSize = parseFloat(document.getElementById('tradeSize').value);
  const leverage = parseFloat(document.getElementById('leverage').value);

  if (isNaN(tradeSize) || isNaN(leverage)) {
    alert("Please fill in both fields.");
    return;
  }

  const margin = tradeSize / leverage;
  document.getElementById('marginResult').innerText = `Required Margin: $${margin.toFixed(2)}`;
    }

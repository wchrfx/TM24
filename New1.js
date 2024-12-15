// Toggle between the 'Sign Up' and 'Log In' form view
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

// Show the selected calculator
function showCalculator() {
    const selectedCalculator = document.getElementById('calculator').value;
    const calculators = document.querySelectorAll('.calculator');

    // Hide all calculators
    calculators.forEach(calc => {
        calc.style.display = "none";
    });

    // Show the selected calculator
    document.getElementById(selectedCalculator).style.display = "block";
}

// Calculate Position Size
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
    document.getElementById('positionSizeResult').innerText = "Position Size: " + positionSize.toFixed(2);
}

// Calculate Risk-to-Reward Ratio
function calculateRiskReward() {
    const riskAmount = parseFloat(document.getElementById('riskAmount').value);
    const rewardAmount = parseFloat(document.getElementById('rewardAmount').value);

    if (isNaN(riskAmount) || isNaN(rewardAmount)) {
        alert("Please fill in both fields.");
        return;
    }

    const riskReward = rewardAmount / riskAmount;
    document.getElementById('riskRewardResult').innerText = "Risk-to-Reward Ratio: " + riskReward.toFixed(2);
}

// Calculate Stop Loss and Take Profit
function calculateStopLossTakeProfit() {
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    const takeProfitPrice = parseFloat(document.getElementById('takeProfitPrice').value);

    if (isNaN(entryPrice) || isNaN(stopLossPrice) || isNaN(takeProfitPrice)) {
        alert("Please fill in all fields.");
        return;
    }

    const stopLoss = (entryPrice - stopLossPrice).toFixed(2);
    const takeProfit = (takeProfitPrice - entryPrice).toFixed(2);

    document.getElementById('stopLossTakeProfitResult').innerText = "Stop Loss: " + stopLoss + " | Take Profit: " + takeProfit;
}

// Calculate Pip Value
function calculatePipValue() {
    const currencyPairPrice = parseFloat(document.getElementById('currencyPairPrice').value);
    const positionSize = parseFloat(document.getElementById('positionSize').value);

    if (isNaN(currencyPairPrice) || isNaN(positionSize)) {
        alert("Please fill in both fields.");
        return;
    }

    const pipValue = (0.0001 / currencyPairPrice) * positionSize;
    document.getElementById('pipValueResult').innerText = "Pip Value: $" + pipValue.toFixed(2);
}

// Calculate Margin
function calculateMargin() {
    const tradeSize = parseFloat(document.getElementById('tradeSize').value);
    const leverage = parseFloat(document.getElementById('leverage').value);

    if (isNaN(tradeSize) || isNaN(leverage)) {
        alert("Please fill in both fields.");
        return;
    }

    const margin = tradeSize / leverage;
    document.getElementById('marginResult').innerText = "Required Margin: $" + margin.toFixed(2);
}

// Initialize default calculator
window.onload = function() {
    // Automatically show the Position Size Calculator on page load
    document.getElementById('position').style.display = 'block';
};

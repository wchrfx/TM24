// Show/Hide calculators based on the dropdown selection
function showCalculator() {
    const selectedCalculator = document.getElementById('calculator').value;
    const calculators = document.querySelectorAll('.calculator');
    
    calculators.forEach(calculator => {
        if (calculator.id === selectedCalculator) {
            calculator.style.display = 'block';
        } else {
            calculator.style.display = 'none';
        }
    });
}

// Position Size Calculator
function calculatePositionSize() {
    const accountBalance = parseFloat(document.getElementById('accountBalance').value);
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    const stopLossPips = parseFloat(document.getElementById('stopLossPips').value);
    const pipValue = parseFloat(document.getElementById('pipValue').value);

    if (!accountBalance || !riskPercentage || !stopLossPips || !pipValue) {
        document.getElementById('positionSizeResult').innerText = 'Please fill all fields.';
        return;
    }

    const riskAmount = (accountBalance * (riskPercentage / 100));
    const positionSize = riskAmount / (stopLossPips * pipValue);

    document.getElementById('positionSizeResult').innerText = 'Position Size: ' + positionSize.toFixed(2);
}

// Risk-to-Reward Ratio Calculator
function calculateRiskReward() {
    const riskAmount = parseFloat(document.getElementById('riskAmount').value);
    const rewardAmount = parseFloat(document.getElementById('rewardAmount').value);

    if (!riskAmount || !rewardAmount) {
        document.getElementById('riskRewardResult').innerText = 'Please fill both fields.';
        return;
    }

    const ratio = rewardAmount / riskAmount;

    document.getElementById('riskRewardResult').innerText = 'Risk-to-Reward Ratio: ' + ratio.toFixed(2);
}

// Stop Loss/Take Profit Calculator
function calculateStopLossTakeProfit() {
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    const takeProfitPrice = parseFloat(document.getElementById('takeProfitPrice').value);

    if (!entryPrice || !stopLossPrice || !takeProfitPrice) {
        document.getElementById('stopLossTakeProfitResult').innerText = 'Please fill all fields.';
        return;
    }

    const stopLossPips = Math.abs(entryPrice - stopLossPrice);
    const takeProfitPips = Math.abs(entryPrice - takeProfitPrice);

    document.getElementById('stopLossTakeProfitResult').innerText = 
        'Stop Loss Pips: ' + stopLossPips.toFixed(2) + '\nTake Profit Pips: ' + takeProfitPips.toFixed(2);
}

// Pip Value Calculator
function calculatePipValue() {
    const currencyPairPrice = parseFloat(document.getElementById('currencyPairPrice').value);
    const positionSize = parseFloat(document.getElementById('positionSize').value);

    if (!currencyPairPrice || !positionSize) {
        document.getElementById('pipValueResult').innerText = 'Please fill both fields.';
        return;
    }

    const pipValue = (0.0001 / currencyPairPrice) * positionSize;

    document.getElementById('pipValueResult').innerText = 'Pip Value: ' + pipValue.toFixed(2);
}

// Margin Calculator
function calculateMargin() {
    const tradeSize = parseFloat(document.getElementById('tradeSize').value);
    const leverage = parseFloat(document.getElementById('leverage').value);

    if (!tradeSize || !leverage) {
        document.getElementById('marginResult').innerText = 'Please fill both fields.';
        return;
    }

    const marginRequired = tradeSize / leverage;

    document.getElementById('marginResult').innerText = 'Margin Required: ' + marginRequired.toFixed(2);
}

// Initialize by hiding all calculators except the default one
window.onload = function() {
    showCalculator();
};

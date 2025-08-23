// add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const amount = parseInt(document.getElementById('add-amount').value);
        const pin = parseInt(document.getElementById('add-pin').value);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        if (accountNumber.length < 11) {
            alert("Enter valid account number");
            return;
        }
        const pinNumber = 1234;
        if (pinNumber !== pin) {
            alert("Incorrect pin number");
            return;
        }
        const updateBalance = amount + availableBalance;
        document.getElementById('available-balance')
            .innerText = updateBalance;
    })

// withdraw money feature

document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const amount = parseInt(document.getElementById('withdraw-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const agentNumber = document.getElementById('agent-number').value;
        const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
        if (agentNumber.length < 11) {
            alert("Enter valid agent number");
            return;
        }
        const pin = 1234;
        if (withdrawPin !==  pin) {
            alert("Incorrect pin number");
            return;
        }
        const updateBalance = availableBalance - amount;
        document.getElementById('available-balance')
        .innerText = updateBalance;

    })

// toggling
document.getElementById('add-button')
    .addEventListener('click', function () {
        document.getElementById('cash-out-parent')
            .style.display = "none";
        document.getElementById('add-money-parent')
            .style.display = "block";
    })
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent')
            .style.display = "none";
        document.getElementById('cash-out-parent')
            .style.display = "block";
    })



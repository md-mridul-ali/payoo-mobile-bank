
// function to get values
function getInputValueNumber(id) {
    const result = parseInt(document.getElementById(id).value);
    return result;
}

function getInputValue(id) {
    const result = document.getElementById(id).value;
    return result;
}

function getInnerText(id) {
    const result = parseInt(document.getElementById(id).innerText);
    return result;
}

function setInnerText(value) {
    const availableBalanceElement = document
        .getElementById('available-balance');
    availableBalanceElement.innerText = value;

}
// function to toggle
function handleToggle(id)
{
     const forms=document.getElementsByClassName('form');
         for(const form of forms)
         {
            form.style.display="none";
         }

         document.getElementById(id)
         .style.display="block";
}
// click change
function activeRoute(id)
{
     const formBtns=document.getElementsByClassName('form-btn');
         for(const btn of formBtns)
         {
            btn.classList.remove("border-[#0874f2]", "bg-[#0574f20d]");
            btn.classList.add("border-gray-300");
         }
         document.getElementById(id)
         .classList.remove("border-gray-300");
         document.getElementById(id)
         .classList.add("border-[#0874f2]", "bg-[#0574f20d]");
}
// add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bank = getInputValue('bank');
        const accountNumber = document.getElementById('account-number').value;
        const amount = getInputValueNumber('add-amount');
        const pin = getInputValueNumber('add-pin')

        const availableBalance = getInnerText('available-balance');

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
        setInnerText(updateBalance);
    })

// withdraw money feature

document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const amount = getInputValueNumber('withdraw-amount');
        const availableBalance = getInnerText('available-balance');
        const agentNumber = document.getElementById('agent-number').value;
        const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
        if (agentNumber.length < 11) {
            alert("Enter valid agent number");
            return;
        }
        const pin = 1234;
        if (withdrawPin !== pin) {
            alert("Incorrect pin number");
            return;
        }
        const updateBalance = availableBalance - amount;
        setInnerText(updateBalance);

    })


// toggling
// add money
document.getElementById('add-button')
    .addEventListener('click', function () {
         handleToggle("add-money-parent");
         activeRoute('add-button');
    })
// cash out
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
          handleToggle("cash-out-parent");
          activeRoute('cash-out-button');
    })

// transfer
document.getElementById('transfer-btn')
    .addEventListener('click', function () {
         handleToggle("transfer-money-parent");
         activeRoute('transfer-btn');
    }) 
// bonus
document.getElementById('bonus-btn')
    .addEventListener('click', function () {
         handleToggle("get-bonus-parent");
         activeRoute('bonus-btn');
    }) 

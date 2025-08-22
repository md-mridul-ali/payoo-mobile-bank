document.getElementById('add-money-btn')
.addEventListener('click', function(e){
    e.preventDefault();
    const bank=document.getElementById('bank').value;
    const accountNumber=document.getElementById('account-number').value;
    const amount=parseInt(document.getElementById('add-amount').value);
    const pin=parseInt(document.getElementById('add-pin').value);

    const availableBalance=parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11)
    {
        alert("Enter valid account number");
        return;
    }
    const pinNumber=1234;
    if(pinNumber !== pin)
    {
        alert("Incorrect pin number");
        return;
    }
    const updateBalance=amount + availableBalance;
    document.getElementById('available-balance')
    .innerText=updateBalance;

})
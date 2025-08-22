// login button functionality
document.getElementById('loginButton')
.addEventListener('click', function(e){
    e.preventDefault();//button er by default behaviour ke prevent korbe
    const mobileNumber= 12345678910;
    const pinNumber=1234;
    const mobileNumberValue=parseInt(document.getElementById('mobile-number').value);
    const pinNumberValue=parseInt(document.getElementById('pin-number').value);
    if(mobileNumberValue === mobileNumber && pinNumberValue === pinNumber)
    {
        window.location.href="./home.html";
    }
    else{
        alert('mobile number or pin number invalid');
    }
    
})
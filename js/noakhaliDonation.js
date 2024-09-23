document.getElementById('donation-noakhali').addEventListener('click',function(event){
    event.preventDefault()

    const noakhaliDonationNumber = parseFloat(document.getElementById('input-noakhali-donation').value)
    
    const noakhaliBalanceNumber = parseFloat(document.getElementById('noakhali-balance').innerText)

    const totalBalanceNumber = parseFloat(document.getElementById('total-account-balance').innerText)

    const totalNewBalance = totalBalanceNumber - noakhaliDonationNumber;
    
    const newBalance = noakhaliDonationNumber + noakhaliBalanceNumber;
    

    document.getElementById('noakhali-balance').innerText = newBalance;

    document.getElementById('total-account-balance').innerText = totalNewBalance;

})
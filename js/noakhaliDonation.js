document.getElementById('donation-noakhali').addEventListener('click',function(event){
    event.preventDefault()

    const noakhaliDonationNumber = parseFloat(document.getElementById('input-noakhali-donation').value)
    
    const noakhaliBalanceNumber = parseFloat(document.getElementById('noakhali-balance').innerText)

    const totalBalanceNumber = parseFloat(document.getElementById('total-account-balance').innerText)

    if(noakhaliDonationNumber <= totalBalanceNumber || isNaN(noakhaliBalanceNumber) ){

        const totalNewBalance = totalBalanceNumber - noakhaliDonationNumber;
    
        const newBalance = noakhaliDonationNumber + noakhaliBalanceNumber;
        
    
        document.getElementById('noakhali-balance').innerText = newBalance;
    
        document.getElementById('total-account-balance').innerText = totalNewBalance;



        const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-8 rounded-xl border border-indigo-500'
historyItem.innerHTML = ` 
<P> ${newBalance} Donated in flood noakhali </P>

<p> ${new Date().toLocaleDateString()} Bangladesh standard Time </P>


`
const historyContainer1 = document.getElementById('history-container-1')
historyContainer1.insertBefore(historyItem, historyContainer1.firstChild )


        

       }
    else{
        alert('Failed to donate money')
    }


})


// feni donation


document.getElementById('donation-feni').addEventListener('click', function(event){
    event.preventDefault()

    const feniDonationNumber = parseFloat(document.getElementById('input-feni-donation').value)

    const feniBalanceNumber = parseFloat (document.getElementById('feni-balance').innerText)

    const totalBalanceNumber = parseFloat(document.getElementById('total-account-balance').innerText)

    if(feniDonationNumber <= totalBalanceNumber || isNaN(feniBalanceNumber)){

        const totalNewBalance = totalBalanceNumber - feniBalanceNumber;
        const newBalance = feniBalanceNumber +feniDonationNumber;

        document.getElementById('feni-balance').innerText = newBalance;
        document.getElementById('total-account-balance').innerText = totalNewBalance;


        const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-8 rounded-xl border border-indigo-500'
historyItem.innerHTML = ` 
<P> ${newBalance} Donated in flood Feni </P>

<p> ${new Date().toLocaleDateString()} Bangladeshi Standard Time  </P>


`
const historyContainer2 = document.getElementById('history-container-2')
historyContainer2.insertBefore(historyItem, historyContainer2.firstChild)
    }

    else{
        alert('Failed to donate money')
    }
})

// aid section
document.getElementById('donation-aid').addEventListener('click', function(event){
    event.preventDefault()

    const aidDonationNumber = parseFloat( document.getElementById('input-aid-donation').value)

    const  aidBalanceNumber = parseFloat(document.getElementById('aid-balance').innerText)

    const totalBalanceNumber = parseFloat(document.getElementById('total-account-balance').innerText)

    if(aidDonationNumber <= totalBalanceNumber || isNaN(aidBalanceNumber)){
        const totalNewBalance = totalBalanceNumber - aidBalanceNumber;
        const newBalance = aidBalanceNumber + aidDonationNumber;

        document.getElementById('aid-balance').innerText = newBalance;
        document.getElementById('total-account-balance').innerText = totalNewBalance;

        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-8 rounded-xl border border-indigo-500'
        historyItem.innerHTML = ` 
        <P> ${newBalance} Donated in flood noakhali </P>
        
        <p> ${new Date().toLocaleDateString()} Bangladeshi standard Time</P>
        
        
        `
        const historyContainer3 = document.getElementById('history-container-3')
        historyContainer3.insertBefore(historyItem, historyContainer3.firstChild )
        
    }
    
    else{
        alert('Failed to donate')
    }



})
 

// history section 


const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
historyTab.addEventListener('click',function(){

    historyTab.classList.add('bg-green-300');

    donationTab.classList.remove('bg-green-300');  

    document.getElementById('donation-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')



    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-8 rounded-xl border border-indigo-500'
    historyItem.innerHTML = ` 
    <P> ${newBalance} Donated in flood noakhali </P>
    
    <p> ${new Date().toLocaleDateString()} Bangladeshi standard Time</P>
    
    
    `
    const historyContainer3 = document.getElementById('history-container-3')
    historyContainer3.insertBefore(historyItem, historyContainer3.firstChild )








})


// 



 





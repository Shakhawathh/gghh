const calculateButton = document.getElementById('calculate-btn');
const foodInput = document.getElementById('food-expenses');
const rentInput = document.getElementById('rent-expenses');
const clotheInput = document.getElementById('clothe-expenses');
const totalExpenses = document.getElementById('total-expenses');
const incomeBalance = document.getElementById('income-balance');









// total balance

function sum() {
    

    const foodInput = document.getElementById('food-expenses').value;
    const foodInputText = parseFloat(foodInput);
    const rentInput = document.getElementById('rent-expenses').value;
    const rentInputText = parseFloat(rentInput);
    const clotheInput = document.getElementById('clothe-expenses').value;
    const clotheInputText = parseFloat(clotheInput);
    const sum = parseFloat(foodInputText + rentInputText + clotheInputText);
    const totalamount = sum;
    if(isNaN(totalamount) || totalamount  < 0){
        
        return alert('please input valid number')
    }

     
    document.getElementById('total-expenses').innerText = sum;
    
// expenses

   const totalBalance = document.getElementById('income-balance').value
   const totalBalanceText = parseFloat(totalBalance);
    const totalRestBalance = totalBalanceText - totalamount;
    const restBalance = totalRestBalance;
    document.getElementById('total-balance').innerText = restBalance;

  }

//   saveing
document.getElementById('save-btn').addEventListener('click',function(){
    const percentage = document.getElementById('income-balance').value;
    const totalPercentage = parseFloat(percentage);
    const savePercentage = document.getElementById('save-per').value;
    const totalsavePercentage = parseFloat(savePercentage);
    const totalSaving = totalPercentage * totalsavePercentage / 100;
    const total = totalSaving;
    if(isNaN(total) || total   < 0){
        
        return alert('please input valid number')
    }
     
    document.getElementById('saveing-balance').innerText = total;
     
   const remainbalance = document.getElementById('total-balance').innerText;
   const remainbalanceText = parseFloat(remainbalance);
   const remainbalanceSave =  remainbalanceText - total;
   

   document.getElementById('remain-balance').innerText = remainbalanceSave

})

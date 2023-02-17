function getRendomPin(){
    const newPin = getPin();
    const pinString = newPin + '';
    if(pinString.length = 4 ){
        return newPin ;
    }
    else{
        return getPin();
    }
}
function getPin(){
   const pin = Math.round(Math.random()*10000);
   return pin ;
}
document.getElementById('genaret-pin').addEventListener('click', function(){
   const inputField = document.getElementById('g-inputfield')
   inputField.value = getPin();
})
document.getElementById('calculator').addEventListener('click', function(event){
    const numbar = (event.target.innerText);
    const priviousTextFiled = document.getElementById('calculator-inputfield');
    const newInputField = priviousTextFiled.value;
    if(isNaN(numbar)){
        if(numbar === 'c'){
            priviousTextFiled.value = '';
        }
        else if (numbar === '<'){
          const digit = newInputField.split('');
          digit.pop();
          const updateDigit = digit.join('')
          priviousTextFiled.value = updateDigit ;
        }
    }
    else{
        const updateField = newInputField + numbar ;
        priviousTextFiled.value = updateField;
    }
})

document.getElementById('submit').addEventListener('click', function(){
    const priviousGField = document.getElementById('g-inputfield');
    const newGfield = priviousGField.value;
    

    const PriviousCalculetorField = document.getElementById('calculator-inputfield');
    const newCalculetorField = PriviousCalculetorField.value;
    const pinSucsses = document.getElementById('pin-sucsses')
    const pinFail = document.getElementById('pin-fail')

    if( newCalculetorField == newGfield ){
        
        pinSucsses.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else{
        
        pinFail.style.display = 'block';
        pinSucsses.style.display = 'none';
    }
})
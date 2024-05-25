function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinstring = pin+'';
    if(pinstring.length === 4){
        return pin ;
    }
    else{
        getPin();
    }
}


document.getElementById('btn-otp').addEventListener('click',function(){
  const pin =  getPin();
   const displaypin = document.getElementById('display-pin');
  
    displaypin.value = pin;
   
})

document.getElementById('calculator').addEventListener('click',function(even){
    const number = even.target.innerText;
    const typenumberField = document.getElementById('type-number');
    const previousTypeNumber = typenumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typenumberField.value ='';
        }
        else if (number === '<'){
            const digit = previousTypeNumber.split(''); // split will convirt it to arrey.
            digit.pop();// pop will remove the last digit
            const remainingDegit = digit.join(''); // join will again convert into string.
            typenumberField.value=remainingDegit; // show this value at display.

        }
        
    }
    else{
        
        
        const newTypeNumber =previousTypeNumber +number;
        typenumberField.value = newTypeNumber;

    }
    
})

document.getElementById('btn-submit').addEventListener('click',function(){
   const OTPdisplaypin = document.getElementById('display-pin');
   const OTPdisplaypinstring = OTPdisplaypin.value;

   const typenumber = document.getElementById('type-number');
   const typenumberstring = typenumber.value;
   const pinsuccess = document.getElementById('pin-success');
   const pinfail = document.getElementById('pin-fail');
    if (OTPdisplaypinstring ===typenumberstring ){
       
        pinsuccess.style.display='block';
        pinfail.style.display='none';
    }
    else{
        
        pinfail.style.display='block';
        pinsuccess.style.display='none';
    }
})
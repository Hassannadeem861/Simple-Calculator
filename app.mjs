

Swal.fire({
    title: 'SIMPLE CALCULATOR',
    showClass: {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
    }
   })
   let num1 = +prompt("Enter Your Num1") 

    let opt = prompt("Enter Your opt") 

    let num2 = +prompt("Enter Your Num2") 

    let result;

    if (opt == "+"){
  
     result = num1 + num2

    }

    if (opt == "-"){
  
    result = num1 - num2

    }

    if (opt == "*"){
  
    result = num1 * num2

   }

   if (opt == "%"){
  
   result = num1 % num2

  }

  alert(result);
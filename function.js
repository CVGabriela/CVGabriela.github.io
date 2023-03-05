function myFunction() {
    document.getElementById("detalles").innerHTML = "Contacto: Liam Mckinney Teléfono: +54 11 5 213-2755";
  }



  function myFunction2() {
    document.getElementById("detalles2").innerHTML = "Contacto: Daryl Owens Teléfono: +54 11 5 775-2571";
  }  

  function validarcorreo(email)
  {
    var expReg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    var esValido= expReg.test(email)
    if(esValido==true){
        alert('El correo electrónico es válido');
        location.reload;
    }
    else{

        alert('El correo electrónico es inválido');
        location.reload;

    }
 }
    
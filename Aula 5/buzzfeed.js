function myFunction() {
  	var inputs = document.querySelectorAll("input[type='checkbox']");
  	var soma = 0
  	for(var i = 0; i < inputs.length; i++) {
  		if (inputs[i].checked == true){
	  		soma = soma + parseInt(inputs[i].value)   	
  		}
    	
	}
	console.log(soma)
	if(soma <=3){
	  alert("Coxinha")
	}else if(soma>=4 && soma<=6 ){
	  alert("bolinha de queijo")
	}
	else{
	  alert("Kibe")

	}
}
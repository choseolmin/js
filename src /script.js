let elInputUsername = document.querySelector('#username'); 
let elFailureMessage = document.querySelector('.failure-message'); 
let elSuccessMessage = document.querySelector('.success-message'); 

let elInputpassword = document.querySelector('#password'); 
let elInputpassword_retype = document.querySelector('#password-retype'); 

let elInputpassword_message = document.querySelector('.mismatch-message'); 
//
elInputUsername.onkeyup = function () {
	if (isMoreThan4Length(elInputUsername.value)) {
		  
		  elSuccessMessage.classList.remove('hide'); 
		  elFailureMessage.classList.add('hide');
	 } else { 
	  	
		  elSuccessMessage.classList.add('hide'); 
		  elFailureMessage.classList.remove('hide');
	 } 
}; 



function isMoreThan4Length(value) 
{ 
  return value.length >= 4; 
}

elInputpassword_retype.onkeyup = function () {
	if (isMatch(elInputpassword.value,elInputpassword_retype.value)) 
	{
		elInputpassword_message.classList.add('hide'); 
	} 
	else 
	{
		elInputpassword_message.classList.remove('hide');
	} 
}; 

function isMatch(password1, password2) {
  
	return password1 === password2;
}

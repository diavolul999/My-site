function login() {
	
	var iframe = document.createElement('iframe');
	iframe.src = 'http://basedate.comli.com/indexjoc.php';
	document.body.appendChild(iframe);
	document.getElementById("loginButton").disabled=true;
	//alert(b);
	//button.enabled=true;
	//console.log('iframe.contentWindow =', iframe.contentWindow);
}
function register(){
	alert("register!");
}
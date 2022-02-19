function passwordValidation() {
	let password = document.getElementById('password').value;
	let output = 0;
	document.getElementById("input").innerHTML = "Entrada: " + password;

  if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!%$^*&+@#()-])[0-9a-zA-Z!%$^*&+@#()-]{6,}$/)) {
    document.getElementById("passwordType").innerHTML = "<span style='color: #7FFF00'>Senha Forte</span>";
    document.getElementById("output").innerHTML = "Saída: 0";
  } else {
    if (password.length <= 6) {
      output = 6 - password.length;
      document.getElementById("output").innerHTML = "Saída: " + output;
      document.getElementById("passwordType").innerHTML = "<span style='color: #ff0000'>Senha Fraca</span>";
    }
  }
}

function nameValidation() {
	let name = document.getElementById('name').value;

  if (name.length < 3 || name.match(/[0-9.,]/)) {
    return document.getElementById("invalidName").innerHTML = "<span style='color: #ff0000'>O campo nome deve ter no mínimo 3 caracteres e conter apenas letras!!</span>";
  } else {
    return document.getElementById("invalidName").innerHTML = "";
  }
}

// Verificando regex para validação da senha
let testing = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!%$^*&+@#()-])[0-9a-zA-Z!%$^*&+@#()-]{6,}$/;

console.log(testing.test('a1B@de')); // true
console.log(testing.test('aB@cce')); // false
console.log(testing.test('a22@cd')); // false
console.log(testing.test('P12@@B')); // false
console.log(testing.test('a12B@c')); // true

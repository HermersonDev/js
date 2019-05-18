var xhr = new XMLHttpRequest();

// Requisição para Api do Github
xhr.open('GET', 'https://api.github.com/users/HermersonDev')
xhr.send(null);

xhr.onreadystatechange = function() {
	// 4 - Houve uma resposta
	if (xhr.readyState === 4)
		console.log(JSON.parse(xhr.responseText));
	
}
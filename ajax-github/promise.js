var myPromise = function() {
	return new Promise(function(resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.github.com/users/HermersonDev')
		xhr.send(null);

		xhr.onreadystatechange = function() {
			// 4 - Houve uma resposta
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('Erro na requisição da API Github !');
				}
			}		
		}
	});
}

myPromise()
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.warn(error);
	});

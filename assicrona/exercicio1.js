
function verificarIdade(idade) {
	return new Promise(function(resolve, reject) {
		
		if (idade < 18)
			reject('De menor !');

		resolve('De maior !');
	});
}

verificarIdade(2)
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.log(error);
	});
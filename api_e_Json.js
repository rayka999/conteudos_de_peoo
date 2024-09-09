// URL de uma API pública de exemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fazendo uma requisição para a API
fetch(apiUrl) //fetch capitura o json contido na API
	.then(response => response.json()) // Converte a resposta em JSON
	.then(data => {
		// Iterando sobre os dados recebidos
		for (user of data) {
			console.log(`Nome: ${user.name} (${user.username})`);
			console.log('Email:', user.email);
            console.log("ID:", user.id)
			console.log('---');
		};
	})
	.catch(error => {
		console.error('Erro ao obter dados:', error);
});


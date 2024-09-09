const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => displayError(error));


function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');//cria divs
        //userElement.classList.add('user');
        userElement.innerHTML = `
                <h2>#${user.id} ${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}
                <p>Website: ${user.website}</p>
            `;
        userList.appendChild(userElement); //anexa a tag <div> dentro da tag <p>
    });
}


 /*Chave-Valor
Cada objeto é composto por pares chave-valor:

Chave: Uma string (ou símbolo) que é usada para identificar a propriedade do objeto. A chave deve ser única dentro do objeto.
Valor: Pode ser qualquer tipo de dado válido em JavaScript (string, número, array, função, etc.) e é associado à chave correspondente.

Exemplo de Pares Chave-Valor

const carro = {
    marca: 'Ford',
    modelo: 'Focus',
    ano: 2020
};

chaves=marca,modelo,ano
valores=ford,focus,2020*/

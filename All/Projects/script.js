fetch('../Navbar/index.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar a Navbar: ${response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro ao carregar a Navbar:', error);
    });

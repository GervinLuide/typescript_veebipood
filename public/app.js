const productList = document.getElementById('productList');
const getProductsButton = document.getElementById('getProducts');

getProductsButton.addEventListener('click', async () => {
    try {
        const response = await fetch('/tooted/aegunud');
        const data = await response.json();

        productList.innerHTML = '';
        if (data.aegunudTooted && data.aegunudTooted.length > 0) {
            data.aegunudTooted.forEach(product => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h3>${product.nimetus}</h3>
                    <p>Kategooria: ${product.kategooria}</p>
                    <p>Hind: ${product.hind}</p>
                    <p>Aktiivne: ${product.aktiivne ? 'Jah' : 'Ei'}</p>
                    <p>Laokogus: ${product.laokogus}</p>
                    <p>Aegumisaeg: ${product.vananemisaeg}</p>
                `;
                productList.appendChild(productElement);
            });
        } else {
            productList.innerHTML = '<p>Pole aegunud tooteid.</p>';
        }
    } catch (error) {
        console.error(error);
    }
});

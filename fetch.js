const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const main = document.querySelector('main');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {
            'Content-Type': 'application/json'
        } : {},
    }).then(response => {
        if (response.status >= 400) {
            // ! response.ok
            return response.json().then(errResData => {
                const error = new Error("Something went wrong !");
                error.data = errResData;
                throw error;
            })

        }
        return response.json();

    })
};


const getData = () => {
    sendHttpRequest('GET', 'http://localhost:3030/products')
        .then(responseData => {
            let result = `<h2> List of Products</h2>`;
            responseData.forEach((product) => {
                const {
                    id,
                    name,
                    brand,
                    price,
                    quantity,
                    id_category
                } = product
                result +=
                    `<div>
                     <h5> Product ID: ${id} </h5>
                         <ul class="w3-ul">
                             <li> Product Name : ${name}</li>
                             <li> Brand : ${brand} </li>
                             <li> Price : ${price}  $ </li>
                             <li> Quantity : ${quantity} </li>
                             <li> Product Category : ${id_category} </li>
                      </div>`;
                document.getElementById('result').innerHTML = result;
            });
        });
};


const sendData = () => {
    sendHttpRequest('POST', 'http://localhost:3030/products', {
            name: "HP Pavillion 15",
            brand: "Hewlett Packard",
            price: 569,
            quantity: 2,
            id_category: 1
        })
        .then(responseData => {
            console.log(responseData)
        })
        .catch(err => {
            console.log(err, err.data);
        });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
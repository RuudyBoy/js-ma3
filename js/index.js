import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product" >
                                        <h4>${product.data[0]}</h4>
                                        <p>Price: ${product.price}</p>
                                    </a>`;
        });
    } catch (error) {
       
    }
})();
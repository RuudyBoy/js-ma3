import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();
        const data = json.data;

        container.innerHTML = "";

        console.log(data);

        data.forEach(function (product) {
            container.innerHTML += `<a class="product">
                                        <h4> ${product.attributes.name}</h4>
                                        <p> ${product.attributes.description}</p>
                                        <h4> ${product.attributes.price}</h4>
                                    </a>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();

  
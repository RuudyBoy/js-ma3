import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

const productsUrl = baseUrl + "players";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<div class="product" >
                                        <h4>${product.data[0].attributes.name}</h4>
                                        <p>Price: ${product.data[0].id}</p>
                                    </div>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();


  
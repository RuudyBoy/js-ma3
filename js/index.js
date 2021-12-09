import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".product-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);
        

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product">
                                        <h4>${product[`data`][data][0].id }</h4>
                                    </a>`;
        });

       

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();


  
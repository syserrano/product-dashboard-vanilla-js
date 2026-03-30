const url = 'https://www.course-api.com/javascript-store-products';
function fetchProductsThen()
{
    fetch (url)
    .then(response => response.json())
        .then(data => {
              data.forEach(product => {
                      console.log(product.name);
                            });
                                })
                                    .catch(error => {
                                          console.error("Error fetching products (then):", error);
                                              });
                                              }
                                            
async function fetchProductsAsync() {
    try {
        const response = await fetch(url);
        const products = await response.json();
        displayProducts(products);
        } catch (error) {
        handleError(error);
        }
    }

function displayProducts(products) {
    const container = 
    document.getElementByld("product-container");

    container.innerHTML = "";

    products.slice(0, 5).forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    })

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("h3")
    name.textContext = '$${(product.price/100).toFixed(2)}'

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    container.appendChild(card);
    }

function handleError(error){
    console.error(`An error has happened: ${error.message}`);
}

fetchProductsThen()
fetchProductsAsync()

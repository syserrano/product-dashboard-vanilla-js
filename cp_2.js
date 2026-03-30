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



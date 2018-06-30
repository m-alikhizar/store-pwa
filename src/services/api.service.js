const unwrap = response => {
  if (response.status !== 200) {
    console.error('Error fetching data', response.status, response);
    throw new Error(response);
  }

  return response.json();
};

export const getProductsData = () => {
  return fetch('https://my-json-server.typicode.com/carlosrobles/simple-api-mock/products').then(unwrap);
};

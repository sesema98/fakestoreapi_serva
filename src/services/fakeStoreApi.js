const BASE_URL = 'https://fakestoreapi.com';

export const fakeStoreApi = {
  getProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Error al obtener los productos');
    return response.json();
  },
};
      
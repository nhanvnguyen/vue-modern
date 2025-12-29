export const fetchProducts = async () => {
  return Promise.resolve([
    { id: '1', name: 'Product A', price: 9.99 },
    { id: '2', name: 'Product B', price: 19.99 }
  ])
}

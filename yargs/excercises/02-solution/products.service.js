const ProductsService = (productsAPI) => {
  const sum = async () => {
    const products = await productsAPI.get()
    return products.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.count, 0)
  }

  const avg = async () => {
    const products = await productsAPI.get()
    return products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) / products.length
  }

  const lessThan = async (count) => {
    const products = await productsAPI.get()
    return products.filter(product => product.count < count)
  }

  return {
    sum,
    avg,
    lessThan
  }
}

module.exports = ProductsService

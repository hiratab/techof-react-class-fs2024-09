const formatPrice1 = (product: any): string => {
  const options = { style: "currency", currency: "EUR",  }

  return `${product.price.toLocaleString('pt-PT', options)}`
}

export default formatPrice1;

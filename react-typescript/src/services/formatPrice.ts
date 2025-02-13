import { ProductPropsType } from '../components/Product';
import { TechProductPropsType } from '../components/TechProduct';

const formatPrice = (product: ProductPropsType): string => {
  const options = { style: "currency", currency: "EUR",  } as Intl.NumberFormatOptions

  // @ts-ignore :any :unknow 
  return `${product.price.toLocaleString('pt-PT', options)}`
}

export default formatPrice;

import formatPrice from "../services/formatPrice";

export interface ProductPropsType {
  title: string;
  description: string;
  price: number;
  stock: number;
  outOfStock?: boolean;
}

function Product(props: ProductPropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{formatPrice(props)}</p>
      <p>Stock: {props.stock}</p>
      {props.outOfStock ? <p>Out of Stock</p> : <p>In Stock</p>}
    </div>
  )
}

export default Product;
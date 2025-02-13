import { ProductPropsType } from './Product';
import formatTechSpecs from '../services/formatTechSpecs';
import formatPrice1 from '../services/formatPrice1';

export interface TechProductPropsType extends ProductPropsType {
  techSpecs: string[];
}

function TechProduct(props: TechProductPropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{formatPrice1(props)}</p>
      <p>Stock: {props.stock}</p>
      <p>{formatTechSpecs(props.techSpecs)}</p>
      {props.outOfStock ? <p>Out of Stock</p> : <p>In Stock</p>}
    </div>
  )
}

export default TechProduct;

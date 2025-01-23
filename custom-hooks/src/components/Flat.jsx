function Flat(props) {
  return (
    <div key={props.key}>
      <p>Address {props.address}</p>
      <p>Price {props.price}</p>
    </div>
  )
}

export default Flat;
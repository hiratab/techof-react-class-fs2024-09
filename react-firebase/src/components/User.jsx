function User(props) {
  return (
    <div key={props.key}>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age}</p>
      <p>Tem cão: {props.hasDog ? 'Tem' : 'Não Tem'}</p>
    </div>
  )
}

export default User;

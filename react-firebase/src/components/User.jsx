import useUsers from "../hooks/useUsers";

function User(props) {
  const { removeUser } = useUsers();

  return (
    <div key={props.key} style={{ padding: '0.2em', border: '1px solid black', margin: '0.1em' }}>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age}</p>
      <p>Tem cão: {props.hasDog ? 'Tem' : 'Não Tem'}</p>
      <button
        onClick={() => {
          console.log(props)
          removeUser({
            id: props.id
          });
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default User;

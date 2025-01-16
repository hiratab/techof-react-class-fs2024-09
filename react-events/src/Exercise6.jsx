function Exercise6() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 18,
  }

  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      {user.age < 18 ? <p>Sorry, you are too young to view this information</p> : <p>Age: {user.age}</p>}
      {user.age < 18 && <p>Sorry, you are too young to view this information</p>}
      {user.age >= 18 && <p>Age: {user.age}</p>}
    </div>
  )
}

export default Exercise6;
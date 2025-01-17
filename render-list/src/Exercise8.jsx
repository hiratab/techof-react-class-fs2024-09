function Menu() {
  const users = [{ name: 'John Doe', age: 35 }, { name: 'Jane Smith', age: 40 }];

  return (

    <div>
      <ul>
        {
          users.map(user => {
            return (
              <li>{user.name} - {user.age}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

function Exercise8() {
  return (
    <Menu />
  )
}

export default Exercise8;

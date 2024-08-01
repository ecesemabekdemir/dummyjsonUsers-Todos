async function getUsers() {
  const { users } = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  return users;
}

async function getTodosComments(userId) {
  const { todos } = await fetch(
    `https://dummyjson.com/users/${userId}/todos`
  ).then((res) => res.json());
  return todos;
}

async function render() {
  const users = await getUsers();
  for (let i = 0; i <= users.length; i++) {
    const todos = await getTodosComments(users[i].id);
    usersList.innerHTML +=
  `<div class=data>
  <div class='dataBox'>
    <h2>${users[i].firstName}  ${users[i].lastName}</h2>
    <h3>${users[i].age}  - ${users[i].gender}</h3>
    <h3>${users[i].email}</h3>
    <h3>${users[i].phone}</h3>
    <div class='dataAddress'>
    <h4><span>Address:</span> ${users[i].address.address} - ${users[i].address.city} - ${users[i].address.state}</h4>
    </div></div>
  ${todos.map((x) => `<ul class="todos"><li>${x.todo}: <span> ${x.completed}</span></li></ul>`).join("")}</div>`;
  }}

render();

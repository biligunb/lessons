// Get todos

const loadTodos = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000", false);
  xhttp.send();

  const todos = JSON.parse(xhttp.responseText);
  console.log('todos: ', todos)

  for (let todo of todos) {
      const x = `
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${todo.task}</h5>
              <div>Definition: ${todo.definition}</div>
            </div>
          </div>
        </div>
      `

      document.getElementById('todos').innerHTML = document.getElementById('todos').innerHTML + x;
  }
}

loadTodos();

const apiURL = 'https://json-server-web-api-tarefas.gustavoalvaren3.repl.co/tarefas';
const todo = document.getElementById('to-do');
const doing = document.getElementById('doing');
const done = document.getElementById('done');
const droppables = document.querySelectorAll(".status");

//formatar dados do server
function formatDate(dateValue){

  let date = new Date(dateValue);
  date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return date;
}

function formartPriority(priority)
{
  if(priority == 'high') return 'ALTA';
  else if(priority == 'mid') return 'MÉDIA';
  else if(priority == 'low') return 'BAIXA';
}

//Atualizar status da tarefa no servidor
function updateSatus(taskId, uptadedStatus)
{
  fetch(`https://json-server-web-api-tarefas.gustavoalvaren3.repl.co/tarefas/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: uptadedStatus }), // Inclui o novo status
      })
      .then(response => response.json())
      .catch(error => {
        console.error('Erro ao atualizar o status da tarefa:', error);
  });
}


function addStartButtonListener() {
  const btnsStart = document.querySelectorAll(".start");
  btnsStart.forEach((btnStart) => {
    btnStart.addEventListener("click", () => {
      const taskContainer = btnStart.closest('.task');
      const taskId = taskContainer.querySelector('.id').innerText;
      btnStart.innerHTML = '<img src="imgs/check.png" alt="check" width="20">';
      btnStart.classList.add("check");
      btnStart.classList.remove("start");
      taskContainer.remove();
      doing.insertBefore(taskContainer, doing.firstChild);
      updateSatus(taskId, 1);
      addCheckButtonListener();
    });
  });
}

function addCheckButtonListener() {
  const btnsCheck = document.querySelectorAll(".check");
  btnsCheck.forEach((btnCheck) => {
    btnCheck.addEventListener("click", () => {
      const taskContainer = btnCheck.closest('.task');
      const taskId = taskContainer.querySelector('.id').innerText;
      const taskBody = taskContainer.querySelector('.task-body');
      taskBody.classList.add("border-5", "border-start", "border-success", "rounded-start-2");
      btnCheck.remove();
      taskBody.innerHTML = taskBody.innerHTML + '<p class="float-end m-0 text-success">Tarefa completa!</p>';
      taskContainer.remove();
      done.insertBefore(taskContainer, done.firstChild);
      updateSatus(taskId, 2);
    });
  });
}


function showTasks(tasks){
    
  const table = document.getElementById('tasksTable');
  let contentTodo = '';
  let contentDoing = '';
  let contentDone = '';

  tasks.forEach(task => {
      
      if (task.status == 0) {
        contentTodo += `<div class="card task">
          <div class="card-body task-body">
          <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/excluir.png" alt="excluir" width="15"></button>
          <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/editar.png" alt="editar" width="15"></button>
          <span class="id d-none">${task.id}</span>  
          <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <p class="card-text">Prazo: ${formatDate(task.start)}</p>
            <p class="card-text">Prioridade: ${formartPriority(task.priority)}</p>
            <button type="button" class="btn btn-light btn-sm float-end start">➔</button>
          </div>
        </div>`
      }

      if (task.status == 1) {
        contentDoing += `<div class="card task">
          <div class="card-body task-body">
          <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/excluir.png" alt="excluir" width="15"></button>
          <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/editar.png" alt="editar" width="15"></button>
          <span class="id d-none">${task.id}</span>  
          <h5 class="card-title">${task.title}</h5>
            <p class="card-text">${task.description}</p>
            <p class="card-text">Prazo: ${formatDate(task.start)}</p>
            <p class="card-text">Prioridade: ${formartPriority(task.priority)}</p>
            <button type="button" class="btn btn-light btn-sm float-end check"><img src="imgs/check.png" alt="check" width="20"></button>
          </div>
        </div>`
      }

      if (task.status == 2) {
        contentDone += `<div class="card task">
            <div class="card-body task-body border-5 border-start border-success rounded-start-2">
              <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/excluir.png" alt="excluir" width="15"></button>
              <button type="button" class="btn btn-light btn-sm float-end m-1 rounded-circle"><img src="imgs/editar.png" alt="editar" width="15"></button>
              <span class="id d-none">${task.id}</span>
              <h5 class="card-title">${task.title}</h5>
              <p class="card-text">${task.description}</p>
              <p class="card-text">Prazo: ${formatDate(task.start)}</p>
              <p class="card-text">Prioridade: ${formartPriority(task.priority)}</p>
              <p class="float-end m-0 text-success">Tarefa completa!</p>
            </div>
          </div>`
      }

  })
  
  todo.innerHTML = contentTodo + todo.innerHTML;
  doing.innerHTML = contentDoing + doing.innerHTML;
  done.innerHTML = contentDone + done.innerHTML;

  addStartButtonListener();
  addCheckButtonListener();
}

function readtasks() {
  fetch(apiURL, {
    method: 'GET',
    headers: {'Content-Type': 'application/JSON'}
  })
  .then(res => res.json())
  .then(data => showTasks(data))
  .catch(error => {
    console.error(error)
  });
}

readtasks();

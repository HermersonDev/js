var list_elt = document.querySelector('#app ul');
var input_elt = document.querySelector('#app input');
var btn_elt = document.querySelector('#app button');

// Estrutura de dados que "pesiste" as tarefas
// JSON.parse convert o texto vindo do localStorage para array
// || [] - verificar se foi retornado alguma coisa se não define o to_dos como array
var to_dos = 
	JSON.parse(localStorage.getItem('list_to_dos')) || []; 

// função para mostrar as tarefas
function renderTodos() {
	if (list_elt.innerHTML != '')
		list_elt.innerHTML = '';

	for (to_do of to_dos) {
		var li_elt = document.createElement('li');
		var text_elt = document.createTextNode(to_do);
		
		var link_elt = document.createElement('a');
		var text_link = document.createTextNode(' Excluir');
		var position = to_dos.indexOf(to_do);
 
		link_elt.setAttribute('href', '#');
		link_elt.appendChild(text_link);
		link_elt.setAttribute('onclick', 'deleteTodo('+position+')');

		li_elt.appendChild(text_elt);
		li_elt.appendChild(link_elt);

		list_elt.appendChild(li_elt);
	}
}

renderTodos();

// Adicionar uma nova tarefa na lista.
function addTodo() {
	var text_input = input_elt.value;
	to_dos.push(text_input);
	input_elt.value = '';

	renderTodos();
	saveTodos();
}

// Atribui a função addTodo ao evento de click do botão
btn_elt.onclick = addTodo;

// Função para deletar uma tarefa da lista
function deleteTodo(position) {
	to_dos.splice(position, 1);
	renderTodos();
	saveTodos();
}

// Salvar os dados no localStorage.
function saveTodos(){
	// JSON.stringify converte o array em uma texto JSON.
	localStorage.setItem('list_to_dos', JSON.stringify(to_dos));
}
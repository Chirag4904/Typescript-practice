import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};

axios.get(url).then((res) => {
	const todo = res.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed);

	// Wrong way to do it as this results in undefined since the name of of properties are not correct
	// const ID = todo.ID;
	// const title = todo.Title;
	// const finished = todo.finished;

	// console.log(`
	//     The Todo with ID: ${ID}
	//     Has a title of: ${title}
	//     Is it finished? ${finished}
	// `);
});

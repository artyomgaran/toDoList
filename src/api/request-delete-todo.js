export const requestDeleteToDo = (id) => {
	return fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
};

export const requestChangeToDo = (id, title) => {
	return fetch(`http://localhost:3000/todos/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: title }),
	}).then(() => {});
};

export const requestAddToDo = (title) => {
	return fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ title: title }),
	}).then((res) => {
		if (!res.ok) {
			throw new Error('Ошибка добавлении задачи');
		}

		return res.json();
	});
};

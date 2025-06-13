import { useState, useEffect } from 'react';

export const useToDos = (refreshToDosFlag) => {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/todos')
			.then((res) => res.json())
			.then((data) => setToDos(data));
	}, [refreshToDosFlag]);

	return { toDos };
};

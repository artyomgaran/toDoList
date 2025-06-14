import { useState, useEffect, useCallback } from 'react';

export const useToDos = () => {
	const [toDos, setToDos] = useState([]);
	const [refreshFlag, setRefreshFlag] = useState(false);

	const refreshToDos = useCallback(() => {
		setRefreshFlag((prev) => !prev);
	}, []);

	useEffect(() => {
		fetch('http://localhost:3000/todos')
			.then((res) => res.json())
			.then((data) => setToDos(data));
	}, [refreshFlag]);

	return { toDos, refreshToDos };
};

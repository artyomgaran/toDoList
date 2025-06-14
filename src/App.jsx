import { useState } from 'react';
import { Header, ToDoList, AddTaskForm } from './components';
import { useToDos, useFilteredAndSortedToDos } from './hooks';

import styles from './app.module.css';

export const App = () => {
	// кастомный хук "получение тудушек"
	const { toDos, refreshToDos } = useToDos();

	// состояния для отображения
	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	//хук "возвращает отфильрованный и отсортированный массив"
	const filteredAndSortedToDos = useFilteredAndSortedToDos(
		toDos,
		searchQuery,
		isSorted,
	);

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Список дел</h1>
			<Header
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				isSorted={isSorted}
				setIsSorted={setIsSorted}
			/>
			<ToDoList toDos={filteredAndSortedToDos} refreshToDos={refreshToDos} />
			<AddTaskForm refreshToDos={refreshToDos} />
		</div>
	);
};

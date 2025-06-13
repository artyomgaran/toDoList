import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SortButton } from './components/SortButton/SortButton';
import { ToDoList } from './components/ToDoList/ToDoList';
import { useToDos, useFilteredAndSortedToDos } from './hooks';
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm';

import styles from './app.module.css';

export const App = () => {
	const [refreshToDosFlag, setRefreshToDoFlag] = useState(false);
	const { toDos } = useToDos(refreshToDosFlag);
	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const refreshToDos = () => setRefreshToDoFlag(!refreshToDosFlag);

	const filteredAndSortedToDos = useFilteredAndSortedToDos(
		toDos,
		searchQuery,
		isSorted,
	);

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Список дел</h1>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
			<ToDoList toDos={filteredAndSortedToDos} refreshToDos={refreshToDos} />
			<AddTaskForm refreshToDos={refreshToDos} />
		</div>
	);
};

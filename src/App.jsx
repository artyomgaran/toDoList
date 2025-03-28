import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SortButton } from './components/SortButton/SortButton';
import { ToDoList } from './components/ToDoList/ToDoList';
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm';

export const App = () => {
	const [toDos, setToDos] = useState([]);
	const [refreshToDosFlag, setRefreshToDoFlag] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [newTask, setNewTask] = useState('');
	const [changeTask, setChangeTask] = useState('');
	const [editingTaskId, setEditingTaskId] = useState(null);
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3000/todos')
			.then((res) => res.json())
			.then((data) => setToDos(data));
	}, [refreshToDosFlag]);

	const refreshToDos = () => setRefreshToDoFlag(!refreshToDosFlag);

	const requestAddToDo = () => {
		if (!newTask.trim()) return;
		setIsCreating(true);
		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: newTask }),
		})
			.then(() => {
				refreshToDos();
				setNewTask('');
				setIsInputVisible(false);
			})
			.finally(() => setIsCreating(false));
	};

	const requestChangeToDo = (id) => {
		if (!changeTask.trim()) return;
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title: changeTask }),
		}).then(() => {
			refreshToDos();
			setChangeTask('');
			setEditingTaskId(null);
		});
	};

	const requestDeleteToDo = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' })
			.then(() => refreshToDos())
			.finally(() => setIsDeleting(false));
	};

	const filteredToDos = toDos.filter((todo) =>
		todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);
	const sortedToDos = [...filteredToDos];
	if (isSorted) {
		sortedToDos.sort((a, b) => a.title.localeCompare(b.title));
	}

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Список дел</h1>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
			<ToDoList
				toDos={sortedToDos}
				{...{
					editingTaskId,
					setEditingTaskId,
					changeTask,
					setChangeTask,
					requestChangeToDo,
					requestDeleteToDo,
					isCreating,
					isDeleting,
				}}
			/>
			<AddTaskForm
				{...{
					isCreating,
					isInputVisible,
					setIsInputVisible,
					newTask,
					setNewTask,
					requestAddToDo,
				}}
			/>
		</div>
	);
};

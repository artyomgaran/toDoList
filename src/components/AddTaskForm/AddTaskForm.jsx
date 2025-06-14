/* eslint-disable react/prop-types */
import { useState } from 'react';
import { requestAddToDo } from '../../api';

import styles from './addtaskform.module.css';

export const AddTaskForm = ({ refreshToDos }) => {
	const [newTask, setNewTask] = useState('');
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [isAddToDo, setIsAddToDo] = useState(false);

	const handleAdd = () => {
		//если тудушка пустая, ничего не делаем
		if (!newTask.trim()) return;
		setIsAddToDo(true);
		// апи "добавления"

		requestAddToDo(newTask)
			.then(() => {
				refreshToDos();
				setNewTask('');
				setIsInputVisible(false);
			})
			.finally(() => {
				setIsAddToDo(false);
			});
	};

	return isInputVisible ? (
		<div className={styles['input-container']}>
			<input
				type="text"
				className={styles['task-input']}
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="Введите задачу"
			/>
			<button
				disabled={isAddToDo}
				className={styles['add-button']}
				onClick={handleAdd}
			>
				Добавить
			</button>
		</div>
	) : (
		<button
			disabled={isAddToDo}
			className={styles['add-button']}
			onClick={() => setIsInputVisible(true)}
		>
			Добавить задачу
		</button>
	);
};

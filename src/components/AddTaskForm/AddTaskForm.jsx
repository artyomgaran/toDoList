/* eslint-disable react/prop-types */
import { useState } from 'react';
import { requestAddToDo } from '../../api';

import styles from './addtaskform.module.css';

export const AddTaskForm = ({ refreshToDos }) => {
	const [newTask, setNewTask] = useState('');
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	const handleAdd = () => {
		if (!newTask.trim()) return;

		setIsCreating(true);

		requestAddToDo(newTask)
			.then(() => {
				refreshToDos();
				setNewTask('');
				setIsInputVisible(false);
			})
			.finally(() => {
				setIsCreating(false);
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
				disabled={isCreating}
				className={styles['add-button']}
				onClick={handleAdd}
			>
				Добавить
			</button>
		</div>
	) : (
		<button
			disabled={isCreating}
			className={styles['add-button']}
			onClick={() => setIsInputVisible(true)}
		>
			Добавить задачу
		</button>
	);
};

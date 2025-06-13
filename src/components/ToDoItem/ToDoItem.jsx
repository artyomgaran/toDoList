/* eslint-disable react/prop-types */
import { useState } from 'react';
import { requestDeleteToDo, requestChangeToDo } from '../../api';

import styles from './todoitem.module.css';

export const ToDoItem = ({ todo, refreshToDos }) => {
	const [editingTaskId, setEditingTaskId] = useState(null);
	const [changeTask, setChangeTask] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	const handleDelete = () => {
		setIsDeleting(true);
		requestDeleteToDo(todo.id)
			.then(() => refreshToDos())
			.finally(() => {
				setIsDeleting(false);
			});
	};
	const handleChange = () => {
		if (!changeTask.trim()) return;

		setIsCreating(true);
		requestChangeToDo(todo.id, changeTask)
			.then(() => {
				refreshToDos();
				setChangeTask('');
				setEditingTaskId(null);
			})
			.finally(() => setIsCreating(false));
	};
	return (
		<div className={styles['todo-item']}>
			{editingTaskId === todo.id ? (
				<div className={styles['input-container']}>
					<input
						type="text"
						className={styles['task-input']}
						value={changeTask}
						onChange={(e) => setChangeTask(e.target.value)}
						placeholder="Изменить задачу"
					/>
					<button className={styles['save-button']} onClick={handleChange}>
						✎
					</button>
				</div>
			) : (
				<>
					<p className={styles['todo-title']}>{todo.title}</p>
					<div className={styles['todo-actions']}>
						<button
							disabled={isCreating}
							className={styles['change-button']}
							onClick={() => setEditingTaskId(todo.id)}
						>
							✎
						</button>
						<button
							disabled={isDeleting}
							className={styles['delete-button']}
							onClick={() => handleDelete()}
						>
							✖
						</button>
					</div>
				</>
			)}
		</div>
	);
};

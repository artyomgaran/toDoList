/* eslint-disable react/prop-types */
import { useState } from 'react';
import { requestDeleteToDo, requestChangeToDo } from '../../../../api';

import styles from './todoitem.module.css';

export const ToDoItem = ({ todo, refreshToDos }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [changeTask, setChangeTask] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [isChanging, setIsChanging] = useState(false);

	// функция "удаление тудушки"
	const handleDelete = () => {
		setIsDeleting(true);
		// апи "удаления"
		requestDeleteToDo(todo.id)
			.then(() => refreshToDos())
			.finally(() => {
				setIsDeleting(false);
			});
	};

	// функция "изменение тудушки"
	const handleChange = () => {
		//если тудушка пустая, ничего не делаем
		if (!changeTask.trim()) return;

		setIsChanging(true);
		// апи "изменения"
		requestChangeToDo(todo.id, changeTask)
			.then(() => {
				refreshToDos();
				setChangeTask('');
				setIsEditing(false);
			})
			.finally(() => setIsChanging(false));
	};
	return (
		<div className={styles['todo-item']}>
			{isEditing ? (
				<div className={styles['input-container']}>
					<input
						type="text"
						className={styles['task-input']}
						value={changeTask}
						onChange={(e) => setChangeTask(e.target.value)}
						placeholder="Изменить задачу"
					/>
					<button
						className={styles['save-button']}
						onClick={handleChange}
						disabled={isChanging}
					>
						✎
					</button>
				</div>
			) : (
				<>
					<p className={styles['todo-title']}>{todo.title}</p>
					<div className={styles['todo-actions']}>
						<button
							disabled={isChanging}
							className={styles['change-button']}
							onClick={() => {
								setIsEditing(true);
								setChangeTask(todo.title);
							}}
						>
							✎
						</button>
						<button
							disabled={isDeleting}
							className={styles['delete-button']}
							onClick={handleDelete}
						>
							✖
						</button>
					</div>
				</>
			)}
		</div>
	);
};

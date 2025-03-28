import styles from './todoitem.module.css';
import PropTypes from 'prop-types';

export const ToDoItem = ({
	todo,
	editingTaskId,
	setEditingTaskId,
	changeTask,
	setChangeTask,
	requestChangeToDo,
	requestDeleteToDo,
	isCreating,
	isDeleting,
}) => (
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
				<button
					className={styles['save-button']}
					onClick={() => requestChangeToDo(todo.id)}
				>
					Сохранить
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
						Изменить
					</button>
					<button
						disabled={isDeleting}
						className={styles['delete-button']}
						onClick={() => requestDeleteToDo(todo.id)}
					>
						Удалить
					</button>
				</div>
			</>
		)}
	</div>
);

ToDoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	editingTaskId: PropTypes.number,
	setEditingTaskId: PropTypes.func.isRequired,
	changeTask: PropTypes.string.isRequired,
	setChangeTask: PropTypes.func.isRequired,
	requestChangeToDo: PropTypes.func.isRequired,
	requestDeleteToDo: PropTypes.func.isRequired,
	isCreating: PropTypes.bool.isRequired,
	isDeleting: PropTypes.bool.isRequired,
};

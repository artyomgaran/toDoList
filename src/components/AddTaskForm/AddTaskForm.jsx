import PropTypes from 'prop-types';
import styles from './addtaskform.module.css';

export const AddTaskForm = ({
	isCreating,
	isInputVisible,
	setIsInputVisible,
	newTask,
	setNewTask,
	requestAddToDo,
}) =>
	isInputVisible ? (
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
				onClick={requestAddToDo}
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

AddTaskForm.propTypes = {
	isCreating: PropTypes.bool.isRequired,
	isInputVisible: PropTypes.bool.isRequired,
	setIsInputVisible: PropTypes.func.isRequired,
	newTask: PropTypes.string.isRequired,
	setNewTask: PropTypes.func.isRequired,
	requestAddToDo: PropTypes.func.isRequired,
};

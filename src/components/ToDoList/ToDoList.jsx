import { ToDoItem } from '../ToDoItem/ToDoItem';
export const ToDoList = ({
	toDos,
	editingTaskId,
	setEditingTaskId,
	changeTask,
	setChangeTask,
	requestChangeToDo,
	requestDeleteToDo,
	isCreating,
	isDeleting,
}) =>
	toDos.map((todo) => (
		<ToDoItem
			key={todo.id}
			todo={todo}
			editingTaskId={editingTaskId}
			setEditingTaskId={setEditingTaskId}
			changeTask={changeTask}
			setChangeTask={setChangeTask}
			requestChangeToDo={requestChangeToDo}
			requestDeleteToDo={requestDeleteToDo}
			isCreating={isCreating}
			isDeleting={isDeleting}
		/>
	));

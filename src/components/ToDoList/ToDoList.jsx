/* eslint-disable react/prop-types */
import { ToDoItem } from '../ToDoItem/ToDoItem';
export const ToDoList = ({ toDos, refreshToDos }) => {
	return (
		<>
			{toDos.map((todo) => (
				<ToDoItem key={todo.id} todo={todo} refreshToDos={refreshToDos} />
			))}
		</>
	);
};

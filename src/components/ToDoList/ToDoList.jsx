/* eslint-disable react/prop-types */
import { ToDoItem } from './components/ToDoItem/ToDoItem';
export const ToDoList = ({ toDos, refreshToDos }) => {
	return (
		<>
			{/* пробегаемся по массиву для отображения всех тудушек */}
			{toDos.map((todo) => (
				<ToDoItem key={todo.id} todo={todo} refreshToDos={refreshToDos} />
			))}
		</>
	);
};

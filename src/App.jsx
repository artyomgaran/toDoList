import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [toDos, setToDos] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				setToDos(loadedToDos);
			});
	}, []);

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles['page-heading']}>Список дел</h1>
				{toDos.map(({ id, title }) => (
					<div key={id} className={styles['todo-item']}>
						<p className={styles['todo-title']}>{title}</p>
					</div>
				))}
			</div>
		</>
	);
};

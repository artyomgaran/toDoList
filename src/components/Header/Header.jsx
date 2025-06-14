/* eslint-disable react/prop-types */
import styles from './header.module.css';

export const Header = ({ searchQuery, setSearchQuery, isSorted, setIsSorted }) => {
	return (
		<>
			<input
				type="text"
				className={styles['search-input']}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Поиск задач..."
			/>
			<button
				className={styles['sort-button']}
				onClick={() => setIsSorted(!isSorted)}
			>
				{isSorted ? 'Отключить сортировку' : 'Сортировать A-Z'}
			</button>
		</>
	);
};

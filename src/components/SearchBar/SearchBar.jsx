/* eslint-disable react/prop-types */
import styles from './searchbar.module.css';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
		<input
			type="text"
			className={styles['search-input']}
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder="Поиск задач..."
		/>
	);
};

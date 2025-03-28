import PropTypes from 'prop-types';
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

SearchBar.propTypes = {
	searchQuery: PropTypes.string.isRequired,
	setSearchQuery: PropTypes.func.isRequired,
};

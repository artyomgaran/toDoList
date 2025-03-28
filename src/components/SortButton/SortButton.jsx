import PropTypes from 'prop-types';
import styles from './sortbutton.module.css';

export const SortButton = ({ isSorted, setIsSorted }) => {
	return (
		<button className={styles['sort-button']} onClick={() => setIsSorted(!isSorted)}>
			{isSorted ? 'Отключить сортировку' : 'Сортировать A-Z'}
		</button>
	);
};

SortButton.propTypes = {
	isSorted: PropTypes.bool.isRequired,
	setIsSorted: PropTypes.func.isRequired,
};
